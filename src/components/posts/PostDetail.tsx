import Link from "next/link";
import type { Post } from "~/utils/api/posts";
import Profile from "../Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";


interface PostDetailProps {
    boradName: string;
    post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ boradName, post }) => {

    return (
        <article>
            <header className="border-y flex flex-col gap-2 p-3">
                <Link href={`/boards/${boradName}`} className="text-slate-500">{boradName}</Link>
                <h1 className=""><strong className="text-2xl">{post.title}</strong></h1>
                <div className="flex">
                    <Profile src="/noidea.jpeg" alt="Profile Image" size={40} />
                    <div className="flex flex-col mx-3">
                        <b className="text-sm">{post.created_by}</b>
                        <div className="flex">
                            <time id="publish-date" dateTime={post.updated_at} className="text-slate-400 text-sm">{format(post.updated_at, 'yyyy.MM.dd. HH:MM')}</time>
                            <small className="text-slate-400 ml-3">조회 {post.views}</small>
                        </div>
                    </div>
                </div>
            </header>

            <div className="my-5" dangerouslySetInnerHTML={{ __html: post.content }}></div>

            <footer className="text-center mb-2">
                <button className="border rounded-full p-2 hover:text-sky-600 text-slate-600">
                    <FontAwesomeIcon icon={faThumbsUp} className="h-4"/>
                    <b className="ml-1">101</b>
                </button>
            </footer>
        </article>
    );
};

export default PostDetail;
