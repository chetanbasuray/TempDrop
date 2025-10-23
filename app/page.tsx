'use client';

import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setUploadedUrl(data.url);
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">📦 TempDrop — Upload a File</h1>
      
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      {uploadedUrl && (
        <p className="mt-4">
          ✅ File uploaded! <a href={uploadedUrl} className="text-blue-500 underline">View file</a>
        </p>
      )}
    </main>
  );
}
