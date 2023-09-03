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
    <main className="container mx-auto">
      <h1 className="text-2xl">lets test nextjs-prisma-supabase</h1>
      <div className="border">
        <h2 className="text-xl">show Posts from supabase:</h2>
        {data.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
          </ul>
        ))}
      </div>
      <div>
        <h2>create a post and send it to supabase</h2>
        <Link href="/create">
          create a post
        </Link>
      </div>
    </main>
  );
}
