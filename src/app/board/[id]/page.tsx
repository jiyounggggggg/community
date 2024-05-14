import { Metadata } from "next";

export const metadata: Metadata = {
  title: "board",
  description: "board",
};

type BlogPostProps = {
  params: {
    id: string;
  };
};

async function fetchPost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}/`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function PostPage({ params }: BlogPostProps) {
  const post = await fetchPost(params.id);

  return (
    <>
      <a href="/board/list">
        <button className="border p-1">목록</button>
      </a>
      <section>
        <h1 className="border-y-4">
          <strong>{post.title}</strong>
        </h1>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-y">댓글</div>
      </section>
    </>
  );
}
