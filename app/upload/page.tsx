'use client';

import { useState } from "react";

export default function UploadDocs() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  async function upload() {
    if (!file) return;

    setStatus("Uploading...");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload-doc", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus(`Uploaded! Indexed ${data.chunks} chunks`);
    } else {
      setStatus(data.error);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Knowledge Docs</h1>

      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <button
        onClick={upload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload & Train Agent
      </button>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
