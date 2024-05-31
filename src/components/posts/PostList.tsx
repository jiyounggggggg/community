import { getPosts } from "~/utils/api/posts";
import type { Post } from "~/utils/api/posts";
import Link from "next/link";

interface PostListProps {
  boardId: number;
}

const PostList: React.FC<PostListProps> = async ({ boardId }) => {
  const posts = await getPosts(Number(boardId));

  return (
    <ul className="mb-2">
      {posts.map((post: Post, index: number) => (
        <li key={post.id} className="border-t p-1 last:border-b">
          <Link href={`/boards/1/${post.id}`} className="inline-flex">
            <b className="pr-2 text-red-600">{index + 1}</b>
            <h2 className="pl-2">{post.title}</h2>
            <small className="pl-2 text-red-600">[{post.comment_count}]</small>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
