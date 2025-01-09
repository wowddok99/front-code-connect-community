import {
    PageLayout,
    MainWrapper,
    CardWrapper,
    CardHeaderWrapper,
    CardMainWrapper,
    CardFooterWrapper,
    Title,
    WriterPasswordWrapper,
    InputWrapper,
    Label,
    Writer,
    Password,
    SubjectWrapper,
    Subject,
    ContentWrapper,
    Content,
    AddressWrapper,
    ZipcodeWrapper,
    ZipCode,
    SearchButton,
    Address,
    YoutubeWrapper,
    Youtube,
    ImageUploadWrapper,
    ImageInputWrapper,
    ImageUploadButton,
    MainOptionWrapper,
    MainOptionRadioWrapper,
    MainOptionRadioButton,
    SubmitButtonWrapper,
    SubmitButton,
    Error,
    RiImageAddLineIcon,
    ImageFileNameWrapper,
    ImageFileName,
    ImageFileDeleteButton
    
} from "./BoardWrite.styles"
import { Modal } from "antd"
import DaumPostcodeEmbed from "react-daum-postcode"

export default function BoardWriterUI(props) {
    return (
        <PageLayout>
            <MainWrapper>
                <CardWrapper>
                    <CardHeaderWrapper>
                        <Title></Title>
                    </CardHeaderWrapper>
                    <CardMainWrapper>
                        <WriterPasswordWrapper>
                            <InputWrapper>
                                <Label>작성자</Label>
                                <Writer type ="text" placeholder="이름을 입력해주세요." onInput={props.onInputWriter}></Writer>
                                <Error></Error>
                            </InputWrapper>
                            <InputWrapper>
                                <Label>패스워드</Label>
                                <Password type="Password" placeholder ="패스워드를 입력해주세요."></Password>
                                <Error></Error>
                            </InputWrapper>
                        </WriterPasswordWrapper>
                        <SubjectWrapper>
                            <Label>제목</Label>
                            <Subject type="text" placeholder="제목을 입력해주세요."></Subject>
                            <Error></Error>
                        </SubjectWrapper>
                        <ContentWrapper>
                            <Label>내용</Label>
                            <Content type="text" placeholder="내용을 입력해주세요."></Content>
                            <Error></Error>
                        </ContentWrapper>
                        <AddressWrapper>                      
                            <ZipcodeWrapper>
                                <ZipCode placeholder={"우편번호"} disabled={true}></ZipCode>
                                <SearchButton>우편번호 검색</SearchButton>
                            </ZipcodeWrapper>
                            <Address placeholder={"주소를 입력해주세요."} disabled={true}></Address>
                            <Address placeholder={"상세주소를 입력해주세요."}></Address>
                        </AddressWrapper>
                        <YoutubeWrapper>
                            <Label>유튜브</Label>
                            <Youtube type="text" placeholder="유튜브 영상 URL을 입력해주세요."></Youtube>
                        </YoutubeWrapper>
                        <ImageUploadWrapper>
                            <Label>사진 첨부</Label>
                            <ImageInputWrapper>
                                <input type ="file" multiple={true} style={{ display: 'none' }} accept="image/jpeg,image/png"/>
                                <RiImageAddLineIcon>+<br/>upload</RiImageAddLineIcon>
                            </ImageInputWrapper>
                        </ImageUploadWrapper>
                        {/* <MainOptionWrapper>
                            <MainOptionRadioWrapper>
                                <MainOptionRadioButton type="radio" name="MainOption" id="youtube"></MainOptionRadioButton>
                                <label>유튜브</label>
                            </MainOptionRadioWrapper>
                            <MainOptionRadioWrapper>
                                <MainOptionRadioButton type="radio" name="MainOption" id="image"></MainOptionRadioButton>
                                <label>사진</label>
                            </MainOptionRadioWrapper>
                        </MainOptionWrapper> */}
                        <SubmitButtonWrapper>
                            <SubmitButton>등록</SubmitButton>
                        </SubmitButtonWrapper>
                    </CardMainWrapper>
                </CardWrapper>
            </MainWrapper>
        </PageLayout>
    )
}