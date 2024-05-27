import { fetchComments } from '~/utils/api';
import type { Comment } from '~/utils/api';
import CommentList from '~/components/comments/CommentList';
import Link from 'next/link';
import Profile from '~/components/Profile/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { auth } from '@clerk/nextjs/server';

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
async function fetchPost(category: string, postId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const postId = Number(params['post-id']);
  const post = await fetchPost(params.category, params["post-id"]); // todo fetchPost
  const initialComments: Comment[] = await fetchComments(postId);   // 댓글
  const { userId } = auth();                                        // 로그인 정보

  return (
    <>
      <section className="flex flex-row-reverse">
        <Link href={`/boards/${params.category}`}>
          <button className="border p-1 my-1">목록</button>
        </Link>
      </section>

      <article>
        <header className="border-y flex flex-col gap-2 p-3">
          <Link href={`/boards/${params.category}`} className="text-slate-500">{params.category}</Link>
          <h1 className=""><strong className="text-2xl">{post.title}</strong></h1>
          <div className="flex">
            <Profile src="/noidea.jpeg" alt="Profile Image" size={40} />
            <div className="flex flex-col mx-3">
              <b className="text-sm">{post.author}</b>
              <div className="flex">
                <time id="publish-date" dateTime={post.created_at} className="text-slate-400 text-sm">{post.created_at}</time>
                <small className="text-slate-400 ml-3">조회 110</small>
              </div>
            </div>
          </div>
        </header>

        <div className="my-5" dangerouslySetInnerHTML={{ __html: post.content }}></div>

        <footer className="text-center mb-2">
          <button className="border rounded-full p-2 hover:text-sky-600 text-slate-600">
            <FontAwesomeIcon icon={faThumbsUp} />
            <b className="ml-1">101</b>
          </button>
        </footer>
      </article>

      <section>
        <CommentList initialComments={initialComments} postId={postId} author={userId} />
      </section>
    </>
  );
};

export default PostPage;
