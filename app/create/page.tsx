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
    <main>
      <h1>Create Post</h1>
      <form onSubmit={(e) => {e.preventDefault(); submitPost();}}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>
          <input
            type="checkbox"
            checked={published}
            onChange={() => setPublished(!published)}
          />
          Published
        </label>
        <button type="submit">Create Post</button>
      </form>
    </main>
  );
}
