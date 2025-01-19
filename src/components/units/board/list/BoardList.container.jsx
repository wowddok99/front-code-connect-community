import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function BoardList(){
    const router = useRouter();
    const { categoryName: queryCategoryName, pageNumber: queryPageNumber } = router.query;

    useEffect(() => {
        if (queryCategoryName) {
            setCategoryName(queryCategoryName);
        }
        if (queryPageNumber) {
            setPageNumber(Number(queryPageNumber));
        }
    }, [queryCategoryName, queryPageNumber]);

    // State Variables
    const [categoryName, setCategoryName] = useState(queryCategoryName);
    const [pageNumber, setPageNumber] = useState(queryPageNumber);

    const [inputTitle, setInputTitle] = useState("");
    const [title, setTitle] = useState("");
    const [inputStartDate, setInputStartDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [inputEndDate, setInputEndDate] = useState("");
    const [endDate, setEndDate] = useState("");


    // API 요청 함수
    const fetchPosts = async () => {
        const response = await fetch(
            `http://localhost:8081/api/posts/${categoryName}?` +
            `page=${pageNumber}&` +
            `size=10&` +
            `sort=createdAt,desc&` +
            `title=${encodeURIComponent(title)}&` +
            `startDate=${startDate}&` +
            `endDate=${endDate}`
        );

        console.log(response);

        if (!response.ok) {
            alert('네트워크 응답이 올바르지 않습니다.');
        }
        return response.json();
    };

    // UseQuery
    const { data: fetchPostsData, error, isLoading } = useQuery({
        queryKey: ['fetchPostsData', categoryName, pageNumber],
        queryFn: fetchPosts,
        enabled: !!categoryName && !!pageNumber
    });

    // Event Handlers (Input Handlers)
    const inputTitleHandler = (event) => {
        setInputTitle(event.target.value);
    }

    const inputStartDateHandler = (event) => {
        const selectedDate = event.target.value; // YYYY-MM-DD 형식의 날짜 문자열
        setInputStartDate(new Date(selectedDate + 'T00:00')); // 자정으로 설정
    }

    const inputEndDateHandler = (event) => {
        setInputEndDate(event.target.value);
    }

    // Event Handlers (Click Handlers)
    const onClickMoveToWritePage = () => {
        router.push(`/boards/write/${categoryName}`);
    }

    const onClickMoveToDetailPage = (el) => {
        router.push(`/boards/detail/${el.id}`);
    }

    const onClickSearchByTitleAndDate = () => {
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
                endDate: inputEndDate
            }
        });
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
