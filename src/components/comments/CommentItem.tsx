import React, { useState } from "react";
import { fetchComments, type Comment } from "../../utils/api";
import Profile from "../Profile/Profile";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDown,
  faCircleUp,
  faComment,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CommentBox from "./CommentBox";

interface CommentItemProps {
  comment: Comment;
  onAddReply: () => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onAddReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const toggleReplyBox = () => {
    setShowReplyBox(!showReplyBox);
  };

  const fetchAndSetReplies = async () => {
    onAddReply();
    setShowReplyBox(false); // 댓글 추가 후 입력 창 숨기기
  };

  return (
    <div className="my-3">
      <div className="flex items-center gap-3">
        <Profile src="/noidea.jpeg" alt="Profile Image" size={35} />
        <b className="text-xs">{comment.created_by}</b>
        <small className="text-slate-400">
          {format(comment.created_at, "yyyy.MM.dd. HH:MM")}
        </small>
      </div>
      <p className="my-2">{comment.content}</p>
      <ul className="flex">
        <li>
          <button className="hover:text-sky-600">
            <FontAwesomeIcon icon={faCircleUp} className="h-4" />
            <b className="mx-1 text-sm">100</b>
          </button>
        </li>
        <li>
          <button className="hover:text-sky-600">
            <FontAwesomeIcon icon={faCircleDown} className="h-4" />
            <b className="mx-1 text-sm">10</b>
          </button>
        </li>
        <li className="px-4">
          <button onClick={toggleReplyBox} className="hover:text-sky-600">
            {showReplyBox ? (
              <>
                <FontAwesomeIcon icon={faXmark} className="h-4" />
                <b className="mx-1 text-sm">cancel</b>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faComment}
                  flip="horizontal"
                  className="h-4"
                />
                <b className="mx-1 text-sm">reply</b>
              </>
            )}
          </button>
        </li>
      </ul>
      <section className="ml-24">
        {showReplyBox && (
          <CommentBox
            postId={comment.post}
            user={comment.created_by}
            parent={comment.id}
            onCommentAdded={fetchAndSetReplies}
          />
        )}

        {/* Replies */}
        {comment.replies && (
          <div style={{ marginLeft: "20px" }}>
            {comment.replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                onAddReply={onAddReply}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CommentItem;
