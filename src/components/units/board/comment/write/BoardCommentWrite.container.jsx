import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { ChangeEvent, MouseEvent, useState } from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export default function BoardCommentWrite(props) {
    const router = useRouter();
    const queryClient = useQueryClient();

    // API 호출 함수
    const createComment = async (newComment) => {
        const response = await fetch(`http://localhost:8081/api/posts/${props.postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다.');
        }

        return response.json();
    };

    // Mutation
    const createCommentMutation = useMutation({
        mutationFn: createComment,
        onSuccess: () => {},
        onError: (error) => {}
    });

    // State Variables
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentPassword, setCommentPassword] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [commentContentLength, setCommentContentLength] = useState(0);

    // Event Handlers (Input Handlers)
    const onInputCommentAuthor = (event) => {
        setCommentAuthor(event.target.value);
    }

    const onInputCommentPassword = (event) => {
        setCommentPassword(event.target.value);
    }

    const onInputCommentContent = (event) => {
        setCommentContent(event.target.value);
        setCommentContentLength(event.target.value.length)
    }

    // Event Handlers (Click Handlers)
    const onClickSubmitComment = () => {
        const newComment = {
            author: commentAuthor,
            password: commentPassword,
            contents: commentContent,
        };

        if (commentAuthor && commentPassword && commentContent) {
            createCommentMutation.mutate(newComment, {
                onSuccess: () => {
                    // 댓글 등록 성공시 댓글 리패치
                    queryClient.invalidateQueries(['fetchCommentsData']);
                    setCommentAuthor("")
                    setCommentPassword("");
                    setCommentContent("")
                    setCommentContentLength(0);
                },
                onError: (error) => {
                    alert(error.message);
                }
            });
        }
    }

    return (
        <div>
            <BoardCommentWriteUI
                commentContentLength={commentContentLength}
                commentAuthor={commentAuthor}
                commentPassword={commentPassword}
                commentContent={commentContent}

                onInputCommentAuthor={onInputCommentAuthor}
                onInputCommentPassword={onInputCommentPassword}
                onInputCommentContent={onInputCommentContent}

                onClickSubmitComment={onClickSubmitComment}
            />
        </div>
    )

}