import BoardDetailUI from "./BoardDetail.presenter"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function BoardDetail(){
    const router = useRouter();
    const { categoryName: queryCategoryName, postId: queryPostId } = router.query;

    useEffect(() => {
        if (queryCategoryName) {
            setCategoryName(queryCategoryName);
        }
        if (queryPostId) {
            setPostId(Number(queryPostId));
        }
    }, [queryCategoryName, queryPostId]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // State Variables
    const [isMounted, setIsMounted] = useState(false)
    const [categoryName, setCategoryName] = useState(undefined);
    const [postId, setPostId] = useState(undefined);

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [isYoutubePlayerError, setIsYoutubePlayerError] = useState(false);
    const [fullAddress, setFullAddress] = useState("");

    // API 요청 함수
    const fetchPost = async () => {
        const response = await fetch(`http://localhost:8081/api/posts/${categoryName}/${postId}`);

        if (!response.ok) {
            alert('API 응답이 올바르지 않습니다.');
            throw new Error('API 응답이 올바르지 않습니다.');
        }
        return response.json();
    };

    const deletePost = async () => {
        const response = await fetch(`http://localhost:8081/api/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다.');
        }

        return response;
    };

    const likePost = async () => {
        const response = await fetch(`http://localhost:8081/api/posts/${postId}/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다.');
        }

        return response.json();
    };

    const dislikePost = async () => {
        const response = await fetch(`http://localhost:8081/api/posts/${postId}/dislikes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다.');
        }

        return response.json();
    };

    // UseQuery
    const { data: fetchPostData, error, isLoading, refetch } = useQuery({
        queryKey: ['fetchPostData', categoryName, postId],
        queryFn: fetchPost,
        enabled: !!categoryName && !!postId
    });

    useEffect(() => {
        if (fetchPostData) {
            setLikeCount(fetchPostData.data?.likeCount);
            setDislikeCount(fetchPostData.data?.dislikeCount);
            const fullAddress = `(${fetchPostData.data?.postAddress?.zipcode}) ${fetchPostData.data?.postAddress?.address} ${fetchPostData.data?.postAddress?.addressDetail}`;
            setFullAddress(fullAddress);
        }
    }, [fetchPostData]);

    // Mutation
    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {},
        onError: (error) => {}
    });

    const likeMutation = useMutation({
        mutationFn: (postId) => likePost(postId),
        onSuccess: (data) => {},
        onError: (error) => {}
    });

    const dislikeMutation = useMutation({
        mutationFn: (postId) => dislikePost(postId),
        onSuccess: (data) => {},
        onError: (error) => {}
    });

    // Event Handlers (Click Handlers)
    const onClickCopyCurrentURL = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("주소가 클립보드에 복사되었습니다.")
    }

    const onClickMoveToListPage = () => {
        router.push(`/boards/list/${categoryName}/1`);
    }

    const onClickMoveToEditPage = () => {
        router.push(`/boards/edit/${categoryName}/${postId}`);
    }

    const onClickDeletePost = async() => {
        deleteMutation.mutate(postId,{
            onSuccess: () => {
                alert("게시물이 성공적으로 삭제되었습니다.");
                router.push(`/boards/list/${categoryName}/1`);
            },
            onError: (error) => {
                alert(error.message);
            }
        });
    }

    const onClickLike = async (postId) => {
        likeMutation.mutate(postId, {
            onSuccess: () => {
                refetch();
            },
            onError: (error) => {
                alert(error.message);
            }
        });
    }

    const onClickDislike = async (postId) => {
        dislikeMutation.mutate(postId, {
            onSuccess: () => {
                refetch();

            },
            onError: (error) => {
                alert(error.message);
            }
        });
    }

    // Helper Functions
    const onErrorYoutubePlayer = ()=> {
        setIsYoutubePlayerError(true);
    }
    return (
        <div>
            <BoardDetailUI
                fetchPostData={fetchPostData}

                isMounted={isMounted}
                likeCount={likeCount}
                dislikeCount={dislikeCount}
                isYoutubePlayerError={isYoutubePlayerError}
                fullAddress={fullAddress}

                onClickCopyCurrentURL={onClickCopyCurrentURL}
                onClickMoveToListPage={onClickMoveToListPage}
                onClickMoveToEditPage={onClickMoveToEditPage}
                onClickDeletePost={onClickDeletePost}
                onClickLike={onClickLike}
                onClickDislike={onClickDislike}

                onErrorYoutubePlayer={onErrorYoutubePlayer}
            />
        </div>
        )
}