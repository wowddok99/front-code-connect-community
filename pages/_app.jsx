// import '../styles/global.css'
import { globalStyles } from '../src/components/commons/styles/globalStyles';
import { Global } from '@emotion/react';
import LoadingProvider from '../src/components/commons/loading';
import LayOut from '../src/components/commons/layout';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {

  return (
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <div>
            <Global styles={globalStyles}/>
            <LayOut>
              <Component {...pageProps} />
            </LayOut>
          </div>
        </LoadingProvider>
      </QueryClientProvider>
  )

}

