// 'use client';

// import { useState } from 'react';
// import { CandidateFormData } from '../types ';

// interface FormProps {
//   onSubmit: (formData: CandidateFormData) => void;
// }

// export default function Form({ onSubmit }: FormProps) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [linkedin, setLinkedin] = useState('');
//   const [resume, setResume] = useState<File | null>(null);
//   const [skills, setSkills] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate resume file
//     if (!resume) {
//       alert('Please upload a resume file.');
//       return;
//     }

//     // Create form data
//     const formData: CandidateFormData = { name, email, linkedin, resume, skills };

//     // Call the onSubmit prop
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
//           LinkedIn URL
//         </label>
//         <input
//           type="url"
//           id="linkedin"
//           placeholder="LinkedIn URL"
//           value={linkedin}
//           onChange={(e) => setLinkedin(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
//           Resume (PDF)
//         </label>
//         <input
//           type="file"
//           id="resume"
//           accept=".pdf"
//           onChange={(e) => setResume(e.target.files?.[0] || null)}
//           className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
//           Skills & Experience
//         </label>
//         <textarea
//           id="skills"
//           placeholder="Skills & Experience"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows={4}
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }


'use client';

import { useState } from 'react';
import { CandidateFormData } from '../types ';
interface FormProps {
  onSubmit: (formData: CandidateFormData) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [skills, setSkills] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate resume file
    if (!resume) {
      alert('Please upload a resume file.');
      return;
    }

    // Create form data
    const formData: CandidateFormData = { name, email, linkedin, resume, skills };

    // Call the onSubmit prop
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
          LinkedIn URL
        </label>
        <input
          type="url"
          id="linkedin"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
          Resume (PDF)
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf"
          onChange={(e) => setResume(e.target.files?.[0] || null)}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
          Skills & Experience
        </label>
        <textarea
          id="skills"
          placeholder="Skills & Experience"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}