import { Tooltip } from "antd";
import {
    PageLayout,
    MainWrapper,
    CardWrapper,
    CardHeaderWrapper,
    CardMainWrapper,
    InfoWrapper,
    WriterCreatedAtWrapper,
    Writer,
    CreateAt,
    CardHeaderLogoWrapper,
    ProfileIcon,
    LinkIcon,
    Subject,
    Image,
    Contents,
    YoutubePlayerWrapper,
    YoutubePlayer,
    LikeHateButtonWrapper,
    LikeButtonWrapper,
    HateButtonWrapper,
    LikeIcon,
    HateIcon,
    CrudButtonGroupWrapper,
    ListButton,
    EditButton,
    DeleteButton,
    CommentFormWrapper
} from "./BoardDetail.styles"
import BoardCommentWrite from "@/src/components/units/board/comment/write/BoardCommentWrite.container";
import BoardCommentList from "@/src/components/units/board/comment/list/BoardCommentList.container";

export default function BoardDetailUI(props){
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <InfoWrapper>
                            <ProfileIcon src="/images/profile.png" />
                            <WriterCreatedAtWrapper>
                                <Writer>{props.fetchPostData?.writer}</Writer>
                                <CreateAt>{props.fetchPostData?.createdAt}</CreateAt>
                            </WriterCreatedAtWrapper>
                        </InfoWrapper>
                        <CardHeaderLogoWrapper>
                            <LinkIcon src="/images/ic_link.png" onClick={props.onClickCopyCurrentURL}/>
                            <Tooltip placement="top" title={props.fullAddress}>
                                <LinkIcon src="/images/ic_location.png" />
                            </Tooltip>
                        </CardHeaderLogoWrapper>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <Subject>{props.fetchPostData?.title}</Subject>
                        {props.fetchPostData?.imagePathList.map((el)=> (
                            <Image src={`http://localhost:3000/uploads/images/${el.split('\\').pop()}`} style={{ display: props.fetchPostData?.imagePathList[0] ? '' : 'none'}}></Image>
                        ))}
                        {!props.isYoutubePlayerError && props.isMounted && (
                            <YoutubePlayerWrapper>
                                <YoutubePlayer
                                    url={props.fetchPostData?.youtubeUrl}
                                    style={{display: props.fetchPostData?.youtubeUrl ? 'block' : 'none'}}
                                    controls={true}
                                    onError={props.onErrorYoutubePlayer}
                                />
                            </YoutubePlayerWrapper>
                        )}
                        <LikeHateButtonWrapper>
                            <LikeButtonWrapper>
                                <LikeIcon src="/images/ic_thumb_up.png" onClick={props.onClickLike}></LikeIcon>
                                {props.likeCount}
                            </LikeButtonWrapper>
                            <HateButtonWrapper>
                                <HateIcon src="/images/ic_thumb_down.png" onClick={props.onClickDislike}></HateIcon>
                                {props.dislikeCount}
                            </HateButtonWrapper>
                        </LikeHateButtonWrapper>
                    </CardMainWrapper>
                </CardWrapper>
                <CrudButtonGroupWrapper>
                    <ListButton onClick={props.onClickMoveToListPage}>목록</ListButton>
                    <EditButton onClick={props.onClickMoveToEditPage}>수정</EditButton>
                    <DeleteButton onClick={props.onClickDeletePost}>삭제</DeleteButton>
                </CrudButtonGroupWrapper>
                <CommentFormWrapper>
                    {/* 댓글 */}
                    <BoardCommentWrite postId={props.postId}/>
                    <BoardCommentList postId={props.postId}/>
                </CommentFormWrapper>
            </MainWrapper>
        </PageLayout>
    )
}