import { fetchComments } from "~/utils/api";
import type { Comment } from "~/utils/api";
import CommentList from "~/components/comments/CommentList";
import Link from "next/link";
import PostDetail from "~/components/posts/PostDetail";
import { getPost } from "~/utils/api/posts";
import { cookies } from "next/headers";
import { fetchCurrentUser, refreshToken } from "~/utils/api/users";

interface PostPageProps {
  params: {
    category: string;
    "post-id": string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  return {
    title: `Post ${params["post-id"]}`,
  };
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const cookieStore = cookies();
  let token = cookieStore.get("accessToken");
  let refreshTokenValue = cookieStore.get("refreshToken");
  let currentUser = token ? await fetchCurrentUser(token.value) : null; // 로그인사용자 정보
  if (!currentUser && refreshTokenValue) {
    const newTokens = await refreshToken(refreshTokenValue.value);
    if (newTokens) {
      token = newTokens.access;
      cookieStore.set("accessToken", token, { path: "/" });
      cookieStore.set("refreshToken", newTokens.refresh, { path: "/" });
      currentUser = await fetchCurrentUser(token);
    }
  }
  const postId = Number(params["post-id"]);
  const post = await getPost(postId);
  const initialComments: Comment[] = await fetchComments(postId); // 댓글

  return (
    <>
      <section className="flex flex-row-reverse">
        <Link href={`/boards/${params.category}`}>
          <button className="my-1 border p-1">목록</button>
        </Link>
      </section>

      <PostDetail boradName={params.category} post={post} />

      <section>
        <CommentList
          initialComments={initialComments}
          postId={postId}
          user={currentUser?.id}
        />
      </section>
    </>
  );
};

export default PostPage;
