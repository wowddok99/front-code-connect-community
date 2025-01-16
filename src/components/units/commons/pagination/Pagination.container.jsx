import { useEffect, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { useRouter } from "next/router";

export default function Pagination(props){
    const router = useRouter();
    const { categoryName } = router.query;

    // useEffect
    useEffect(() => { // router.query의 startPage 및 currentPage의 값이 변하면 상태 업데이트
        setStartPage(Number(router.query.startPage) || 1); // router.query.startPage가 Nan(빈값)이면 1로 저장
        setCurrentPage(Number(router.query.currentPage) || 1);
    }, [router.query.startPage, router.query.currentPage]);

    // Paging Management
    const [startPage, setStartPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil((props.fetchPostsData?.data?.totalElements ?? 10) / 10);


    // Event Handlers (Click Handlers)
    const onClickPage = (event) => {
        const newPage = Number(event.currentTarget.id);

        // 페이지 이동
        router.push(`/boards/list/${categoryName}/${newPage}`);

        // 현재 페이지 상태 업데이트
        setCurrentPage(newPage);
    }

    const onClickMoveToPreviousPage = () => {
        if (startPage === 1) {
            return;
        }

        setStartPage(startPage - 10)
        setCurrentPage(Number(startPage - 10));

        router.push(`/boards/list/${categoryName}/${(startPage - 10)}`);
    }

    const onClickMoveToNextPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            setCurrentPage(Number(startPage + 10));

            router.push(`/boards/list/${categoryName}/${(startPage + 10)}`);
        }
    }

    return (
        <PaginationUI
            startPage={startPage}
            lastPage={lastPage}
            currentPage={currentPage}
            onClickPage={onClickPage}
            onClickMoveToPreviousPage={onClickMoveToPreviousPage}
            onClickMoveToNextPage={onClickMoveToNextPage}
        />
    )
}