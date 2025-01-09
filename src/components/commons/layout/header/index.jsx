import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useState } from "react"

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 4rem;
    height: 6.25rem;
    border: 0.125rem solid whitesmoke;
`

const LogoWrapper = styled.div`
    
`

const HeaderLogo = styled.img`
    cursor: pointer;
    width: auto;
    height: 2.6rem;
`

const MenuWrapper = styled.div`
    display: flex;
    gap: 0.9375rem;
`

const Menu = styled.a`
    cursor: pointer;
    font-size: 1.4375rem;
    font-family: "NotoSansKR-ExtraLight";
    font-weight: bold;
    color: gray;
    text-decoration: none;
    padding: 0.1875rem;
`


export default function LayOutHeader(){
    const router = useRouter();

    const { pathname } = router;
    const isListMenuActive = pathname.includes('/boards/list');
    
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <a href="http://localhost:3000/boards/list/1">
                    <HeaderLogo src="/images/codeConnect_logo.png"></HeaderLogo>
                </a>
            </LogoWrapper>
            <MenuWrapper>
                <Menu onClick={() => alert("준비중입니다.")}>Notice</Menu>
                <Menu href="http://localhost:3000/boards/list/1">Community</Menu>
                <Menu onClick={() => alert("준비중입니다.")}>Information</Menu>
            </MenuWrapper>
        </HeaderWrapper>
    )
}