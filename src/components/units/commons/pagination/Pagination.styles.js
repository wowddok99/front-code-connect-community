import styled from "@emotion/styled";
import { MdNavigateBefore } from "@react-icons/all-files/md/MdNavigateBefore";
import { MdNavigateNext } from "@react-icons/all-files/md/MdNavigateNext";

export const NavigateWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const NavigateNextIcon = styled(MdNavigateNext)`
    cursor: pointer;
`

export const NavigateBeforeIcon = styled(MdNavigateBefore)`
    cursor: pointer;
`