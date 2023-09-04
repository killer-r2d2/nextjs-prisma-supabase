"use client";
import { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [published, setPublished] = useState<boolean>(false);

  const submitPost = async () => {
    const res = await fetch('/api/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, published })
    });

    if (res.status === 201) {
      // Reset form or navigate to another page
    } else {
      // Handle error
    }
  };

  return (
    <main className="container mx-auto p-4">
    <h1 className="text-3xl font-semibold mb-4">Create Post</h1>
    <form onSubmit={(e) => {e.preventDefault(); submitPost();}} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded h-32"
      ></textarea>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={published}
          onChange={() => setPublished(!published)}
          className="mr-2"
        />
        <span className="text-sm">Published</span>
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Post
      </button>
    </form>
  </main>
  
  );
}
