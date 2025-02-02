import { useEffect, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { useRouter } from "next/router";

export default function Pagination(props){
    const router = useRouter();
    const { categoryName } = router.query;

    useEffect(() => { // router.query의 startPage 및 currentPage의 값이 변하면 상태 업데이트
        setStartPage(Number(router.query.startPage) || 1); // router.query.startPage가 Nan(빈값)이면 1로 저장
        setCurrentPage(Number(router.query.currentPage) || 1);
    }, [router.query.startPage, router.query.currentPage]);

    // Paging Management
    const [startPage, setStartPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil((props.fetchPostsData?.totalElements ?? 10) / 10);


    // Event Handlers (Click Handlers)
    const onClickPage = (event) => {
        const newPage = Number(event.currentTarget.id);

        // 페이지 이동
        router.push({
            pathname: `/boards/list/${categoryName}/${newPage}`,
            query: {
                title: router.query.title,
                // 시작 날짜와 종료 날짜가 비어있거나 정의되지 않은 경우 undefined로 설정, 그렇지 않으면 원래 값(startDate or endDate) 유지
                startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate),
                endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate),
                startPage: startPage,
                currentPage: Number(event.currentTarget.id)
            }
        });

        // 현재 페이지 상태 업데이트
        setCurrentPage(newPage);
    }

    const onClickMoveToPreviousPage = () => {
        if (startPage === 1) {
            return;
        }

        setStartPage(startPage - 10)
        setCurrentPage(Number(startPage - 10));

        // 페이지 이동
        router.push({
            pathname: `/boards/list/${categoryName}/${(startPage - 10)}`,
            query: {
                title: router.query.title,
                startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate),
                endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate),
                startPage: startPage - 10,
                currentPage: Number(startPage - 10)
            }
        });
    }

    const onClickMoveToNextPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            setCurrentPage(Number(startPage + 10));

            // 페이지 이동
            router.push({
                pathname: `/boards/list/${categoryName}/${(startPage + 10)}`,
                query: {
                    title: router.query.title,
                    startDate: router.query.startDate === "" || router.query.startDate === undefined ? undefined : (router.query.startDate),
                    endDate: router.query.endDate === "" || router.query.endDate === undefined ? undefined : (router.query.endDate),
                    startPage: startPage + 10,
                    currentPage: Number(startPage + 10)
                }
            });
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