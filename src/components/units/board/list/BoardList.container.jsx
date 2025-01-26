import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function BoardList(){
    const router = useRouter();
    const { categoryName, pageNumber } = router.query;

    const [inputTitle, setInputTitle] = useState("");
    const [title, setTitle] = useState("");
    const [inputStartDate, setInputStartDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [inputEndDate, setInputEndDate] = useState("");
    const [endDate, setEndDate] = useState("");


    // API 요청 함수
    const fetchPosts = async () => {
        // 백엔드의 startDate와 endDate는 LocalDateTime 타입이므로 형식 변환
        const formattedStartDate = startDate === "" || startDate === undefined ? "" : `${startDate}T00:00:00`;
        const formattedEndDate = endDate === "" || endDate === undefined ? "" : `${endDate}T23:59:59`;

        const response = await fetch(
            `http://localhost:8081/api/posts/${categoryName}?` +
            `page=${pageNumber}&` +
            `size=10&` +
            `sort=createdAt,desc&` +
            `title=${encodeURIComponent(title)}&` +
            `startDate=${formattedStartDate}&` +
            `endDate=${formattedEndDate}`
        );

        if (!response.ok) {
            alert('API 응답이 올바르지 않습니다.');
        }
        return response.json();
    };

    // UseQuery
    const { data: fetchPostsData, error, isLoading, refetch} = useQuery({
        queryKey: ['fetchPostsData', categoryName, pageNumber, title, startDate, endDate],
        queryFn: fetchPosts,
        enabled: !!categoryName && !!pageNumber
    });

    // Event Handlers (Input Handlers)
    const inputTitleHandler = (event) => {
        setInputTitle(event.target.value);
    }

    const inputStartDateHandler = (event) => {
        const selectedDate = event.target.value; // YYYY-MM-DD 형식의 날짜 문자열
        setInputStartDate(selectedDate); // 자정으로 설정
    }

    const inputEndDateHandler = (event) => {
        const selectedDate = event.target.value; // YYYY-MM-DD 형식의 날짜 문자열
        setInputEndDate(selectedDate); // 자정으로 설정
    }

    // Event Handlers (Click Handlers)
    const onClickMoveToWritePage = () => {
        router.push(`/boards/write/${categoryName}`);
    }

    const onClickMoveToDetailPage = (el) => {
        router.push(`/boards/detail/${categoryName}/${el.id}`);
    }

    const onClickSearchByTitleAndDate = () => {
        // 입력된 제목, 시작 날짜, 종료 날짜를 상태(state)에 설정
        setTitle(inputTitle);
        setStartDate(inputStartDate);
        setEndDate(inputEndDate);

        router.push({
            pathname: `/boards/list/${categoryName}/1`,
            query: {
                startPage: 1,
                currentPage: 1,
                title: inputTitle,
                startDate: inputStartDate,
                endDate: inputEndDate //
            }
        });

        refetch();
    }

    // Helper Function
    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            onClickSearchByTitleAndDate();
        }
    }

    return (
        <div>
            <BoardListUI
            fetchPostsData={fetchPostsData}
            inputTitle={inputTitle}
            inputStartDate={inputStartDate}
            inputEndDate={inputEndDate}

            onClickMoveToWritePage={onClickMoveToWritePage}
            onClickMoveToDetailPage={onClickMoveToDetailPage}
            onClickSearchByTitleAndDate={onClickSearchByTitleAndDate}

            inputTitleHandler={inputTitleHandler}
            inputStartDateHandler={inputStartDateHandler}
            inputEndDateHandler={inputEndDateHandler}

            handleKeyDown={handleKeyDown}
            />
        </div>
    )
}
