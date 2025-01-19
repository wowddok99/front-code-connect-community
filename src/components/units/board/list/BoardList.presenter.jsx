import Pagination from "../../commons/pagination/Pagination.container"
import {
    PageLayout,
    MainWrapper,
    SearchWrapper,
    SearchInputWrapper,
    SearchIcon,
    SearchInput,
    DateInput,
    SearchButton,
    TableWrapper,
    TableTop,
    TableBottom,
    Row,
    ColumnHeaderId,
    ColumnHeaderTitle,
    ColumnHeaderWriter,
    ColumnHeaderDate,
    ColumnId,
    ColumnTitle,
    ColumnWriter,
    ColumnDate,
    FooterWrapper,
    SubmitButtonWrapper,
    SubmitButton,
    PencilIcon,
    DummyWrapper
} from "./BoardList.styles"

export default function BoardListUI(props){
    return (
        <PageLayout>
            <MainWrapper>
                <SearchWrapper>
                    <SearchInputWrapper>
                        <SearchIcon></SearchIcon>
                        <SearchInput type="text" onInput={props.inputTitleHandler} onKeyDown={props.handleKeyDown} value={props.inputTitle} placeholder="제목을 검색해주세요."></SearchInput>
                    </SearchInputWrapper>
                    <DateInput type="date" onInput={props.inputStartDateHandler} onKeyDown={props.handleKeyDown} value={props.inputStartDate} placeholder="YYYY-MM-DD" max={"9999-12-31"}></DateInput>
                    ~
                    <DateInput type="date" onInput={props.inputEndDateHandler} onKeyDown={props.handleKeyDown} value={props.inputEndDate} placeholder="YYYY-MM-DD" max={"9999-12-31"}></DateInput>
                    <SearchButton onClick={props.onClickSearchByTitleAndDate}>검색하기</SearchButton>
                </SearchWrapper>
                <TableWrapper>
                    <TableTop/>
                    <Row>
                        <ColumnHeaderId>ID</ColumnHeaderId>
                        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
                        <ColumnHeaderWriter>작성자</ColumnHeaderWriter>
                        <ColumnHeaderDate>날짜</ColumnHeaderDate>
                    </Row>
                    {props.fetchPostsData?.data?.posts.map((el) => (
                        <Row key={el.id} onClick={(event) => props.onClickMoveToDetailPage(el)}>
                            <ColumnId>{el.id}</ColumnId>
                            <ColumnTitle>{el.title}</ColumnTitle>
                            <ColumnWriter>{el.writer}</ColumnWriter>
                            <ColumnDate>{el.createdAt.substring(0, 10)}</ColumnDate>
                        </Row>
                    ))}
                    <TableBottom/>
                </TableWrapper>
                <FooterWrapper>
                    <DummyWrapper/>
                    <Pagination fetchPostsData={props.fetchPostsData}/>
                    <SubmitButtonWrapper>
                        <PencilIcon/>
                        <SubmitButton onClick={props.onClickMoveToWritePage}>등록하기</SubmitButton>
                    </SubmitButtonWrapper>
                </FooterWrapper>
            </MainWrapper>
        </PageLayout>
    )
}