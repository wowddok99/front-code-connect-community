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

export default function BoardListUI(){
    return (
        <PageLayout>
            <MainWrapper>
                <SearchWrapper>
                    <SearchInputWrapper>
                        <SearchIcon></SearchIcon>
                        <SearchInput type="text" placeholder="제목을 검색해주세요."></SearchInput>
                    </SearchInputWrapper>
                    <DateInput type="date" placeholder="YYYY-MM-DD" max={"9999-12-31"}></DateInput>
                    ~
                    <DateInput type="date" placeholder="YYYY-MM-DD" max={"9999-12-31"}></DateInput>
                    <SearchButton>검색하기</SearchButton>
                </SearchWrapper>
                <TableWrapper>
                    <TableTop/>
                    <Row>
                        <ColumnHeaderId>ID</ColumnHeaderId>
                        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
                        <ColumnHeaderWriter>작성자</ColumnHeaderWriter>
                        <ColumnHeaderDate>날짜</ColumnHeaderDate>
                    </Row>
                    <TableBottom/>
                </TableWrapper>
                <FooterWrapper>
                    <DummyWrapper/>
                    {/* 페이지네이션 추가 필요 */}
                    <SubmitButtonWrapper>
                        <PencilIcon/>
                        <SubmitButton>등록하기</SubmitButton>
                    </SubmitButtonWrapper>
                </FooterWrapper>
            </MainWrapper>
        </PageLayout>
    )
}