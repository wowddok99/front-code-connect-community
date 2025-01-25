import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";

export default function BoardCommentList(props){
    const router = useRouter();

    // API 요청 함수
    const fetchComments = async (pageNumber) => {
        const response = await fetch(
            `http://localhost:8081/api/posts/1/comments?` +
            `page=${pageNumber}&size=5&sort=createdAt,desc`
        );
        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다.');
        }
        return response.json();
    };

    // const { data: fetchCommentsData, error, isLoading } = useQuery({
    //     queryKey: ['fetchCommentsData', props.postId],
    //     queryFn: () => fetchComments(0),
    //     enabled: !!props.postId
    // });
    //
    // console.log(fetchCommentsData)

    const {
        data,
        fetchNextPage,
        hasNextPage
    } = useInfiniteQuery({
        queryKey: ['fetchCommentsData'],
        queryFn: ({ pageParam = 1 }) => fetchComments(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 0 ? undefined : allPages.length + 1;
        },
        onError: (error) => {
            console.error("Error fetching comments:", error);
        }
    });

    console.log(data?.pages);

    const loadMoreComments = () => {
        console.log(hasNextPage);
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    return (
        <div>
            <BoardCommentListUI
                data={data}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                loadMoreComments={loadMoreComments}
            />
        </div>
    )
}