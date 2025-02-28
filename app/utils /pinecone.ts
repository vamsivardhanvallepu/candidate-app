import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

export const upsertCandidate = async (
  id: string,
  embedding: number[]
): Promise<void> => {
  const index = pinecone.Index("candidates");
  await index.upsert([{ id, values: embedding }]);
};

export const searchCandidates = async (
  embedding: number[],
  topK = 5
): Promise<{ id: string; score: number }[]> => {
  const index = pinecone.Index("candidates");
  const results = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });

  return results.matches.map((match) => ({
    id: match.id,
    score: match.score || 0,
  }));
};
