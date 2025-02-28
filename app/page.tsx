'use client';

import { useState } from 'react';
import Form from './components /Form';
import { CandidateFormData, CandidateResult } from './types ';

export default function Home() {
  const [result, setResult] = useState<CandidateResult | null>(null);

  const handleSubmit = async (formData: CandidateFormData) => {
    const response = await fetch('/api/resume', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const data: CandidateResult = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Candidate Application</h1>
      <Form onSubmit={handleSubmit} />
      {result && (
        <div> 
          <h2>Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}