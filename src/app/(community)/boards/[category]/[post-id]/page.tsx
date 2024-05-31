import { fetchComments } from '~/utils/api';
import type { Comment } from '~/utils/api';
import CommentList from '~/components/comments/CommentList';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import PostDetail from '~/components/posts/PostDetail';
import { getPost } from '~/utils/api/posts';
import { getUserProfile } from '~/utils/api/users';

interface PostPageProps {
  params: {
    category: string;
    'post-id': string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  return {
    title: `Post ${params['post-id']}`,
  };
}

// todo fetchPost

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access') : null;
  console.log("typeof window: ", typeof window);
  console.log("token: ", token);
  const user = token ? await getUserProfile(token) : null;
  console.log("user: ", user);

  const postId = Number(params['post-id']);
  const post = await getPost(params.category, params["post-id"]); // todo fetchPost
  const initialComments: Comment[] = await fetchComments(postId);   // 댓글
  const { userId } = auth();                                        // 로그인 정보

  return (
    <>
      <section className="flex flex-row-reverse">
        <Link href={`/boards/${params.category}`}>
          <button className="border p-1 my-1">목록</button>
        </Link>
      </section>

      <PostDetail boradName={params.category} post={post} />

      <section>
        <CommentList initialComments={initialComments} postId={postId} author={userId} />
      </section>
    </>
  );
};

export default PostPage;
