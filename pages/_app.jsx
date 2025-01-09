// import '../styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '../src/components/commons/styles/globalStyles';
import { Global } from '@emotion/react';
import LoadingProvider from '../src/components/commons/loading';
import LayOut from '../src/components/commons/layout';

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

