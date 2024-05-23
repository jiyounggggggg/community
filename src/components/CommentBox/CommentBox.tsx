"use client";
import React, { useState } from 'react';
import styles from './CommentBox.module.css';
import { createComment } from '~/utils/api';

// interface CommentBoxProps {
//     author: string;
// }

interface CommentBoxProps {
    post: number;
    author: number;
    parent?: number;
    // onCommentAdded?: () => void; // 댓글이 추가된 후 호출될 콜백 함수
}

const CommentBox: React.FC<CommentBoxProps> = ({ post, author, parent}) => {
    const [content, setContent] = useState('');

    // const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setComment(event.target.value);
    // };

    // const handleCommentSubmit = () => {
    const handleCommentSubmit = async () => {
        // console.log('Submitted comment:', comment);
        // setComment('');

        if (content.trim() === '') {
            alert('댓글 내용을 입력해주세요.');
            return;
        }

        try {
            const commentInfo = { post, author, content, parent };
            console.log("POST commentInfo: ", commentInfo);
            await createComment(commentInfo);
            setContent(''); // 댓글 작성 후 입력 필드 초기화
            // if (onCommentAdded) {
            //     onCommentAdded(); // 콜백 함수 호출
            // }
        } catch (error) {
            console.error('Error creating comment:', error);
            alert('댓글 작성 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className={styles.commentContainer}>
            <b className={styles.author}>{author}</b>
            <textarea
                id="comment"
                className={styles.commentTextarea}
                placeholder="여기에 댓글을 작성하세요..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.buttonContainer}>
                <button type="button" className={styles.commentButton} onClick={handleCommentSubmit}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default CommentBox;
