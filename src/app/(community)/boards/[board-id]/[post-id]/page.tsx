import type { CommentData } from "~/types/comments";
import CommentList from "~/components/comments/CommentList";
import Link from "next/link";
import PostDetail from "~/components/posts/PostDetail";
import { getPost } from "~/app/api/posts";
import { cookies } from "next/headers";
import { getCurrentUser, refreshToken } from "~/app/api/users";
import { getComments } from "~/app/api/comments";

interface PostPageProps {
  params: {
    "board-id": number;
    "post-id": number;
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
  const refreshTokenValue = cookieStore.get("refreshToken");
  let currentUser = token ? await getCurrentUser(token.value) : null; // 로그인사용자 정보
  if (!currentUser && refreshTokenValue) {
    const newTokens = await refreshToken(refreshTokenValue.value);
    if (newTokens) {
      token = newTokens.access;
      cookieStore.set("accessToken", token, { path: "/" });
      cookieStore.set("refreshToken", newTokens.refresh, { path: "/" });
      currentUser = await getCurrentUser(token);
    }
  }
  console.log("token: ", token);
  console.log("currentUser: ", currentUser);
  console.log("refreshTokenValue: ", refreshTokenValue);

  const postId = params["post-id"];
  const post = await getPost(postId);
  const initialComments: CommentData[] = await getComments(postId); // 댓글

  return (
    <>
      <section className="flex flex-row-reverse">
        <Link href={`/boards/${params["board-id"]}`}>
          <button className="my-1 border p-1">목록</button>
        </Link>
      </section>

      <PostDetail boardId={params["board-id"]} post={post} />

      <section>
        <CommentList
          initialComments={initialComments}
          postId={postId}
          user={currentUser?.username}
        />
      </section>
    </>
  );
};

export default PostPage;
