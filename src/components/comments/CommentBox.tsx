'use client';

import React, { useState } from 'react';
import { createComment } from '../../utils/api';
import styles from './Comment.module.css';

interface CommentBoxProps {
    postId: number;
    author: number;
    parent?: number;
    onCommentAdded: () => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId, author, onCommentAdded }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        if (content.trim() === '') {
            alert('댓글 내용을 입력해주세요.');
            return;
        }

        try {
            await createComment({ post: postId, author, content, parent });
            // (content: { post: number; author: number; content: string; parent?: number })
            setContent('');
            onCommentAdded();
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
                placeholder="댓글을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.buttonContainer}>
                <button type="button" className={styles.commentButton} onClick={handleSubmit}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default CommentBox;
