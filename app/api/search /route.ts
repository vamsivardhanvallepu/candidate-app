import { NextResponse } from "next/server";
import { generateEmbedding } from "@/app/utils /gemini";
import { searchCandidates } from "@/app/utils /pinecone";
import { SearchResult } from "@/app/types ";

export async function POST(request: Request) {
  const { jobDescription }: { jobDescription: string } = await request.json();

  try {
    const embedding = await generateEmbedding(jobDescription);

    const candidates = await searchCandidates(embedding);

    const result: SearchResult = { candidates };
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
