'use client';

import React, { useState, useEffect } from 'react';
import { fetchComments } from '~/utils/api';
import type { Comment } from '~/utils/api';
import CommentBox from './CommentBox';
import CommentItem from './CommentItem';


interface CommentListProps {
    initialComments: Comment[];
    postId: number;
    author: string;
}

const CommentList: React.FC<CommentListProps> = ({ initialComments, postId, author }) => {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [loading, setLoading] = useState(false);

    const fetchAndSetComments = async () => {
        setLoading(true);
        try {
            const updatedComments: Comment[] = await fetchComments(postId);
            setComments(updatedComments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAndSetComments();
    }, [postId]);

    return (
        <>
            <h2><strong>댓글</strong></h2>
            <CommentBox postId={postId} author={author} parent={undefined} onCommentAdded={fetchAndSetComments} />
            <small>Sort by: </small>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="my-10">
                    {comments.map((comment) => (
                        <li key={comment.id} className="my-5">
                            <CommentItem comment={comment} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CommentList;
