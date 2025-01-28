import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { Dropdown, Tooltip } from 'antd';
import { IoIosSettings } from "@react-icons/all-files/io/IoIosSettings";
import { IoIosLogOut  } from "@react-icons/all-files/io/IoIosLogOut";


const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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

export const FaUserIcon = styled(FaUser)`
  margin-top: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;
  color: dimgray;
  cursor: pointer;  
`

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`

export const RiArrowDropDownLineIcon = styled(RiArrowDropDownLine)`
  margin-top: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;
  color: dimgray;
`

export const IoIosSettingsIcon = styled(IoIosSettings)`
  margin-top: 0.1rem;
  width: 1.17rem;
  height: 1.17rem;
  color: dimgray;
`

export const IoIosLogOutIcon = styled(IoIosLogOut)`
  margin-top: 0.1rem;
  width: 1.17rem;
  height: 1.17rem;
  color: dimgray;
`

export const LoginButton = styled.button`
    background-color: dimgray; // 3485fa
    border: none;
    border-radius: 0.6rem;
    width: 4.1rem;
    height: 2.5rem;
    color: white;
    font-weight: bold;
    font-size: 0.95rem;
    cursor: pointer;
`

export default function LayOutHeader(){
    const router = useRouter();

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" href="" style={{fontSize: "1rem"}}>
                    설정
                </a>
            ),
            icon: <IoIosSettingsIcon />
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: (
                <a target="_blank" href="" style={{fontSize: "1rem"}}>
                    로그아웃
                </a>
            ),
            icon: <IoIosLogOutIcon />

        }
    ];

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
            <LoginWrapper>
                <LoginButton>로그인</LoginButton>
                <div>
                    <Tooltip placement="top" title={"ㅁㅁ님 환영합니다."}>
                        <FaUserIcon/>
                    </Tooltip>
                    <Dropdown menu={{ items }} placement="">
                        <a onClick={(e) => e.preventDefault()}>
                            <RiArrowDropDownLineIcon/>
                        </a>
                    </Dropdown>
                </div>
            </LoginWrapper>
        </HeaderWrapper>
    )
}