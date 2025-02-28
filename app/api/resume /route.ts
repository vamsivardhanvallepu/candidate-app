import { NextResponse } from "next/server";
import { parseResume } from "@/app/utils /parser";
import { summarizeResume, generateEmbedding } from "@/app/utils /gemini";
import { upsertCandidate } from "@/app/utils /pinecone";
import { CandidateResult } from "@/app/types ";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const resume = formData.get("resume") as File;

    if (!resume) {
      return NextResponse.json(
        { error: "Resume file is required" },
        { status: 400 }
      );
    }

    const resumeText = await parseResume(resume);

    const summary = await summarizeResume(resumeText);

    const embedding = await generateEmbedding(resumeText);

    await upsertCandidate(email, embedding);

    const result: CandidateResult = { summary, embedding };
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
