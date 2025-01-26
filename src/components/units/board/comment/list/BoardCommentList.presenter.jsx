import InfiniteScroll from 'react-infinite-scroller';
import {
    CommentListFormWrapper,
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
    CommentCreatedAt,
    CommentEditFormWrapper,
    CommentInsertWrapper,
    CommentInputHeaderWrapper,
    CommentInputWriter,
    CommentInputPassword,
    CommentInputWrapper,
    CommentInputContent,
    CommentInputFooter,
    CommentSubmitButton,
    DeleteModal,
    DeleteModalContent,
    DeleteModalInput

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
                        props.editingCommentId === comment.id ? (
                            // 댓글 수정
                            <CommentEditFormWrapper>
                                <CommentInsertWrapper>
                                    <CommentInputHeaderWrapper>
                                        <CommentInputWriter type="text" disabled={true} placeholder="작성자" value={comment.author}></CommentInputWriter>
                                        <CommentInputPassword type="password" placeholder="비밀번호" onInput={props.onInputCommentPassword} value={props.commentPassword}></CommentInputPassword>
                                    </CommentInputHeaderWrapper>
                                    <CommentInputWrapper>
                                        <CommentInputContent type="text" maxLength={100} onInput={props.onInputCommentContent} value={props.commentContent} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInputContent>
                                        <CommentInputFooter>{props.commentContentLength}/{100}</CommentInputFooter>
                                        <CommentSubmitButton onClick={() => props.onClickSubmitEditedComment(comment.id, comment.author)}>수정하기</CommentSubmitButton>
                                    </CommentInputWrapper>
                                </CommentInsertWrapper>
                            </CommentEditFormWrapper>
                        ) : (
                            // 댓글 목록
                            <CommentListWrapper>
                                <CommentProfileIcon src="/images/profile.png" />
                                <CommentInfoWrapper>
                                    <CommentHeaderWrapper>
                                        <WriterStarWrapper>
                                            <CommentWriter>{comment.author}</CommentWriter>
                                        </WriterStarWrapper>
                                        <IconWrapper>
                                            <MdModeEditIcon onClick={() => props.onClickEditComment(comment)}/>
                                            <MdClearIcon onClick={() => props.onClickDeleteComment(comment.id)}/>
                                        </IconWrapper>
                                    </CommentHeaderWrapper>
                                    <CommentContent>{comment.contents}</CommentContent>
                                    <CommentCreatedAt>{comment.createdAt}</CommentCreatedAt>
                                </CommentInfoWrapper>
                            </CommentListWrapper>
                        )
                    ))
                ))}
            </InfiniteScroll>
        </CommentListFormWrapper>
    )
}