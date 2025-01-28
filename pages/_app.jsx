import { globalStyles } from '@/src/components/commons/styles/globalStyles';
import { Global } from '@emotion/react';
import LoadingProvider from '../src/components/commons/loading';
import LayOut from '../src/components/commons/layout';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    const router = useRouter();

    // 기본 레이아웃을 제외할 경로 목록
    const excludedLayoutPaths = ['/auth'];
    // 현재 경로가 제외 목록에 포함되는지 확인
    const isExcludedLayout = excludedLayoutPaths.some(path => router.pathname.startsWith(path));

    // excludedLayoutPaths에 해당하는 경로에서만 global.css를 동적 임포트
    useEffect(() => {
        if (isExcludedLayout) {
            const loadStyles = async () => {
                const styles = await import('../styles/global.css');
            };
            loadStyles();
        }
    }, [isExcludedLayout]);

    return (
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
        <Global styles={globalStyles}/>
          <div>
              {!isExcludedLayout ? (
                  <LayOut>
                      <Component {...pageProps} />
                  </LayOut>
              ) : (
                  <Component {...pageProps} />
              )}
          </div>
        </LoadingProvider>
      </QueryClientProvider>
)

}

