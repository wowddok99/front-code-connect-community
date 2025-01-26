import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import {useInfiniteQuery, useMutation} from "@tanstack/react-query";
import { useState } from "react";

export default function BoardCommentList(props){
    const router = useRouter();
    const { postId } = router.query;

    // State Variables
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [commentPassword, setCommentPassword] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [commentContentLength, setCommentContentLength] = useState(0);


    // API 요청 함수
    const fetchComments = async (pageNumber) => {
        const response = await fetch(
            `http://localhost:8081/api/posts/${postId}/comments?` +
            `page=${pageNumber}&size=5&sort=createdAt,desc`
        );
        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다.');
        }
        return response.json();
    };

    const updateComment = async (params) => {
        console.log(params.commentId);
        console.log(params.updatedComment)
        const response = await fetch(`http://localhost:8081/api/comments/${params.commentId}`, {
            method: 'PUT', // 또는 'PATCH'를 사용할 수 있습니다.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params.updatedComment),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`${response.status} Server Error : ${errorData.message || '알 수 없는 오류'}`);
        }

        return response.json();
    };

    // UseInfiniteQuery
    const {
        data, // 페이징된 데이터
        fetchNextPage, // 다음 페이지를 가져오는 함수
        hasNextPage, // 다음 페이지 여부 체크
        refetch
    } = useInfiniteQuery({
        queryKey: ['fetchCommentsData'],
        queryFn: ({ pageParam = 1 }) => fetchComments(pageParam),
        initialPageParam: 1, // 처음 요청할 페이지 번호
        getNextPageParam: (lastPage, allPages) => {
            return lastPage?.data?.comments?.length > 0 ? (lastPage?.data?.currentPage + 1) : undefined;
        },
        enabled: !!postId, // postId가 있을 때만 쿼리 활성화
        onError: (error) => {
            console.error("댓글을 가져오는 도중 오류가 발생했습니다: ", error);
        }
    });

    // Mutation
    const updateCommentMutation = useMutation({
        mutationFn: updateComment,
        onSuccess: () => {},
        onError: (error) => {}
    });

    // Event Handlers (Input Handlers)
    const onInputCommentPassword = (event) => {
        setCommentPassword(event.target.value);
    }

    const onInputCommentContent = (event) => {
        setCommentContent(event.target.value);
        setCommentContentLength(event.target.value.length)
    }

    const onClickEditComment = (comment) => {
        setEditingCommentId(comment.id); // 수정할 댓글의 ID 설정
        setCommentContent(comment.contents); // 현재 댓글 내용으로 초기화
        setCommentContentLength(comment.contents.length); // 현재 댓글 내용으로 초기화
    };

    const onClickSubmitEditedComment = (commentId, commentAuthor) => {
        const updatedComment = {
            author: commentAuthor,
            contents: commentContent,
            password: commentPassword
        };

        if (commentAuthor && commentPassword && commentContent) {
            updateCommentMutation.mutate({ commentId, updatedComment },{
                onSuccess: () => {
                    setEditingCommentId(null); // 수정 모드 종료
                    setCommentContentLength(0);
                    setCommentContent("");
                    setCommentPassword("");
                    refetch();
                },
                onError: (error) => {
                    alert(error.message);
                }
            })
        }
    };

    return (
        <div>
            <BoardCommentListUI
                data={data}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}

                editingCommentId={editingCommentId}
                commentContentLength={commentContentLength}
                commentPassword={commentPassword}
                commentContent={commentContent}

                onInputCommentPassword={onInputCommentPassword}
                onInputCommentContent={onInputCommentContent}

                onClickEditComment={onClickEditComment}
                onClickSubmitEditedComment={onClickSubmitEditedComment}
            />
        </div>
    )
}