import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function BoardList(){
    const router = useRouter();
    const { pageNumber, categoryName } = router.query;

    // API 요청 함수
    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:8081/api/posts/${categoryName}?pageNumber=${pageNumber}&size=10`);
        if (!response.ok) {
            alert('네트워크 응답이 올바르지 않습니다.');
        }
        return response.json();
    };

    // UseQuery
    const { data: fetchPostsData, error, isLoading } = useQuery({
        queryKey: ['fetchPostsData'],
        queryFn: fetchPosts,
        enabled: !!categoryName && !!pageNumber
    });

    // Event Handlers (Click Handlers)
    const onClickMoveToWritePage = () => {
        router.push(`/boards/write/${categoryName}`);
    }

    return (
        <div>
            <BoardListUI
            fetchPostsData={fetchPostsData}
            onClickMoveToWritePage={onClickMoveToWritePage}
            />
        </div>
    )
}
