// import { NextResponse } from 'next/server';
// import { parseResume } from '@/app/utils /parser';
// import { summarizeResume,generateEmbedding } from '@/app/utils /gemini';
// import { upsertCandidate } from '@/app/utils /pinecone';
// import { CandidateFormData,CandidateResult } from '@/app/types ';
// export async function POST(request: Request) {
//   const { name, email, linkedin, resume, skills }: CandidateFormData = await request.json();

//   // Check if resume is null
//   if (!resume) {
//     return NextResponse.json({ error: 'Resume file is required' }, { status: 400 });
//   }

//   try {
//     // Parse resume
//     const resumeText = await parseResume(resume);

//     // Summarize resume using Gemini
//     const summary = await summarizeResume(resumeText);

//     // Generate embedding
//     const embedding = await generateEmbedding(resumeText);

//     // Store candidate in Pinecone
//     await upsertCandidate(email, embedding);

//     const result: CandidateResult = { summary, embedding };
//     return NextResponse.json(result);
//   } catch (error) {
//     return NextResponse.json({ error}, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';
import { parseResume } from '@/app/utils /parser';
import { summarizeResume,generateEmbedding } from '@/app/utils /gemini';
import { upsertCandidate } from '@/app/utils /pinecone';
import { CandidateResult } from '@/app/types ';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const resume = formData.get('resume') as File;

    if (!resume) {
      return NextResponse.json({ error: 'Resume file is required' }, { status: 400 });
    }

    // Parse resume
    const resumeText = await parseResume(resume);

    // Summarize resume using Gemini
    const summary = await summarizeResume(resumeText);

    // Generate embedding
    const embedding = await generateEmbedding(resumeText);

    // Store candidate in Pinecone
    await upsertCandidate(email, embedding);

    const result: CandidateResult = { summary, embedding };
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
