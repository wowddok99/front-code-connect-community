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

export default function BoardDetailUI(props){
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <InfoWrapper>
                            <ProfileIcon src="/images/profile.png" />
                            <WriterCreatedAtWrapper>
                                <Writer>{props.fetchPostData?.data.writer}</Writer>
                                <CreateAt>{props.fetchPostData?.data.createdAt}</CreateAt>
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
                        <Subject>{props.fetchPostData?.data.title}</Subject>
                        {props.fetchPostData?.data.imagePathList.map((el)=> (
                            <Image src={`http://localhost:3000/uploads/images/${el.split('\\').pop()}`} style={{ display: props.fetchPostData?.data.imagePathList[0] ? '' : 'none'}}></Image>
                        ))}
                        {!props.isYoutubePlayerError && props.isMounted && (
                            <YoutubePlayerWrapper>
                                <YoutubePlayer
                                    url={props.fetchPostData?.data.youtubeUrl}
                                    style={{display: props.fetchPostData?.data.youtubeUrl ? 'block' : 'none'}}
                                    controls={true}
                                    onError={props.onErrorYoutubePlayer}
                                />
                            </YoutubePlayerWrapper>
                        )}
                        <LikeHateButtonWrapper>
                            <LikeButtonWrapper>
                                <LikeIcon src="/images/ic_thumb_up.png"></LikeIcon>
                            </LikeButtonWrapper>
                            <HateButtonWrapper>
                                <HateIcon src="/images/ic_thumb_down.png"></HateIcon>
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
                    {/* 댓글 추가 필요 */}
                </CommentFormWrapper>
            </MainWrapper>
        </PageLayout>
    )
}