export interface CandidateFormData {
    name: string;
    email: string;
    linkedin: string;
    resume: File | null;
    skills: string;
  }
  
  export interface CandidateResult {
    summary: string;
    embedding: number[];
  }
  
  export interface SearchResult {
    candidates: {
      id: string;
      score: number;
    }[];
  }