import React, { useState } from 'react';
import type { Comment } from '../../utils/api';
import Profile from '../Profile/Profile';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown, faCircleUp, faComment, faXmark } from '@fortawesome/free-solid-svg-icons';
import CommentBox from './CommentBox';

interface CommentItemProps {
    comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    const [showReplyBox, setShowReplyBox] = useState(false);
    const toggleReplyBox = () => {
        setShowReplyBox(!showReplyBox);
    };

    return (
        <>
            <div className="flex gap-3 items-center">
                <Profile src="/noidea.jpeg" alt="Profile Image" size={35} />
                <b className="text-xs">{comment.author}</b>
                <small className="text-slate-400">{format(comment.created_at, 'yyyy.MM.dd. HH:MM')}</small>
            </div>
            <p className="my-2">{comment.content}</p>
            <ul className="flex">
                <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleUp} /><b className="text-sm mx-1">100</b></button></li>
                <li><button className="hover:text-sky-600"><FontAwesomeIcon icon={faCircleDown} /><b className="text-sm mx-1">10</b></button></li>
                <li className="px-4">
                    <button onClick={toggleReplyBox} className="hover:text-sky-600">
                        {showReplyBox ? <><FontAwesomeIcon icon={faXmark} /><b className="text-sm mx-1">cancel</b></> : (<><FontAwesomeIcon icon={faComment} flip="horizontal" /><b className="text-sm mx-1">reply</b></>)}
                    </button>
                </li>
            </ul>
            <section className='ml-24'>
                {showReplyBox && (
                    <CommentBox
                        postId={comment.post}
                        author={comment.author}
                        parent={comment.id}
                        onCommentAdded={() => {
                            onCommentAdded();
                            setShowReplyBox(false); // 댓글 추가 후 입력 창 숨기기
                        }}
                    />
                )}
            </section>
        </>
    );
};

export default CommentItem;
