import styled from "@emotion/styled";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";
import { RiPencilFill } from "@react-icons/all-files/ri/RiPencilFill";

export const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 100vh; */
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    width: 78.5rem; // 필요시 %로 width 비율 조절
    /* width: 90%; */
    gap: 2.5rem;
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`
export const SearchInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const SearchIcon = styled(IoIosSearch)`
    position: absolute;
    margin-left: 0.625rem;
`

export const SearchInput = styled.input`
    background-color: #F2F2F2;
    width: 42rem;
    height: 3.25rem;
    padding-left: 2.5rem;
    border-radius: 0.625rem;
    border: none;
`

export const DateInput = styled.input`
    text-align: center;
    width: 7.0rem;
    height: 3.25rem;
    border: 0.0625rem solid #bdbdbd ;
`

export const SearchButton = styled.button`
    cursor: pointer;
    background-color: black;
    color: white;
    width: 5.875rem;
    height: 3.25rem;
    border-radius: 0.625rem;
    border: none;
`

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65rem;
`

export const TableTop = styled.div`
    border-top: 0.125rem solid gray;
`

export const TableBottom = styled.div`
    border-bottom: 0.125rem solid gray;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    height: 3.25rem;
    border-top: 0.0625rem solid #bdbdbd;
    border-bottom: 0.0625rem solid #bdbdbd;
`

export const ColumnHeaderId = styled.div`
    font-weight: bold;
    width: 10%;
    text-align: center;
`

export const ColumnHeaderTitle = styled.div`
    font-weight: bold;
    width: 70%;
    text-align: center;
`

export const ColumnHeaderWriter = styled.div`
    font-weight: bold;
    width: 20%;
    text-align: center;
`

export const ColumnHeaderDate = styled.div`
    font-weight: bold;
    width: 10%;
    text-align: center;
`

export const ColumnId = styled.div`
    width: 10%;
    text-align: center;
`

export const ColumnTitle = styled.div`
    width: 70%;
    text-align: center;
`

export const ColumnWriter = styled.div`
    width: 20%;
    text-align: center;
`

export const ColumnDate = styled.div`
    width: 10%;
    text-align: center;
`

export const FooterWrapper = styled.div`
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 65rem;
    display: flex;
    /* gap: 22.875rem; */
    `

export const DummyWrapper = styled.div`
    border: none;
    width: 6.6875rem;
    padding-left: 1rem;
    height: 2rem;
`

export const SubmitButtonWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const SubmitButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    background-color: white;
    border: 0.0625rem solid #F2F2F2;
    width: 6.6875rem;
    padding-left: 1rem;
    height: 2rem;
`

export const PencilIcon = styled(RiPencilFill)`
    position: absolute;
    margin-left: 1rem;
`