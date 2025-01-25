import InfiniteScroll from 'react-infinite-scroller';

import {
    CommentListFormWrapper,
    DeleteModal,
    EditModal,
    DeleteModalContent,
    DeleteModalInput,
    EditModalInputWrapper,
    ModalInputLabel,
    EditModalInput,
    EditModalStarWrapper,
    CommentListWrapper,
    CommentProfileIcon,
    CommentInfoWrapper,
    CommentHeaderWrapper,
    WriterStarWrapper,
    IconWrapper,
    MdModeEditIcon,
    MdClearIcon,
    CommentWriter,
    CommentContent,
    CommentCreatedAt
} from "./BoardCommentList.styles";

export default function BoardCommentListUI(props){
    return (
        <CommentListFormWrapper>
            <InfiniteScroll
                loadMore={props.fetchNextPage}
                hasMore={props.hasNextPage}
            >
                {props.data?.pages.map((page, pageIndex) => (
                    page?.data?.comments?.map((comment) => (
                    <CommentListWrapper>
                        <CommentProfileIcon src="/images/profile.png" />
                        <CommentInfoWrapper>
                            <CommentHeaderWrapper>
                                <WriterStarWrapper>
                                    <CommentWriter>{comment.author}</CommentWriter>
                                </WriterStarWrapper>
                                <IconWrapper>
                                    <MdModeEditIcon/>
                                    <MdClearIcon/>
                                </IconWrapper>
                            </CommentHeaderWrapper>
                            <CommentContent>{comment.contents}</CommentContent>
                            <CommentCreatedAt>{comment.createdAt}</CommentCreatedAt>
                        </CommentInfoWrapper>
                    </CommentListWrapper>
                    ))
                ))}
            </InfiniteScroll>
        </CommentListFormWrapper>
    )
}