import styled from "@emotion/styled"

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    padding: 2.5rem;
    height: 12.5rem;
    border-top: 0.125rem solid whitesmoke;
`

const FooterTitle = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    color: #999999;
`
const FooterContent = styled.div`
    font-size: 1.125rem;
    color: #bfbfbf;
`

export default function LayOutFooter(){
    return (
        <FooterWrapper>
            <FooterContent>© 2024 Code Connect. All rights reserved.</FooterContent>
        </FooterWrapper>
    )
}