import pdfParse from 'pdf-parse';

export const parseResume = async (file: File): Promise<string> => {
  // Convert the File object to an ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();

  // Convert the ArrayBuffer to a Buffer
  const buffer = Buffer.from(arrayBuffer);

  // Parse the PDF
  const data = await pdfParse(buffer);
  return data.text;
};