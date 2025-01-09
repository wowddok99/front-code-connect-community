import styled from "@emotion/styled"
import { Flex, Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FullScreenLayout = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(211, 211, 211, 0.2);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function LoadingProvider(props){
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        
        const end = () => {
            setLoading(false);
        };
        
        const handleBeforeUnload = () => {
            start();
        };

        // beforeunload: 페이지를 떠나기 전, 즉 사용자가 새로고침이나 이동을 시도할 때 호출
        window.addEventListener('beforeunload', handleBeforeUnload);
        
        // router.events: Next.js에서 페이지 내의 경로 변경 이벤트
        router.events.on('routeChangeStart', start);
        router.events.on('routeChangeComplete', end);
        router.events.on('routeChangeError', end);
        
        // clean-up
        return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        router.events.off('routeChangeStart', start);
        router.events.off('routeChangeComplete', end);
        router.events.off('routeChangeError', end);
        };
    }, []);

    return (
        <div>
            {props.children}
            {loading && (
                <FullScreenLayout>
                    <Spin size="large"/>
                </FullScreenLayout>
            )}
        </div>
    )
}