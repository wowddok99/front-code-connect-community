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

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <a href="http://localhost:3000/">
                    <HeaderLogo src="/images/codeConnect_logo.png"></HeaderLogo>
                </a>
            </LogoWrapper>
            <MenuWrapper>
                <Menu href="http://localhost:3000/boards/list/notice/1">Notice</Menu>
                <Menu href="http://localhost:3000/boards/list/community/1">Community</Menu>
                <Menu href="http://localhost:3000/boards/list/information/1">Information</Menu>
            </MenuWrapper>
        </HeaderWrapper>
    )
}