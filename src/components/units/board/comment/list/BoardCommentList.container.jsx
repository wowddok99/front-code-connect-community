import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function BoardCommentList(props){
    const router = useRouter();
    const { postId } = router.query;

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

    return (
        <div>
            <BoardCommentListUI
                data={data}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
            />
        </div>
    )
}