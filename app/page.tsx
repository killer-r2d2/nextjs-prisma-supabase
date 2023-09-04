import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-6">
        Lets Test Next.js-Prisma-Supabase
      </h1>

      <div className="border p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-medium mb-4">Show Posts from Supabase:</h2>
        <ul className="list-disc list-inside">
          {data.map((post) => (
            <li key={post.id} className="text-lg mb-2">
              {post.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-medium mb-4">
          Create a Post and Send it to Supabase
        </h2>
        <Link href="/create" className="text-blue-500 hover:underline">
          Create a Post
        </Link>
      </div>
    </main>
  );
}
