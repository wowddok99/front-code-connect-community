// import '../styles/global.css'
import { AppProps } from 'next/app';
import { globalStyles } from '../src/components/commons/styles/globalStyles';
import { Global } from '@emotion/react';
import LoadingProvider from '../src/components/commons/loading';
import LayOut from '../src/components/commons/layout';

export default function App({ Component, pageProps }) {

  return (
    <LoadingProvider>
      <div>
        <Global styles={globalStyles}/>
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
      </div>
    </LoadingProvider>
  )
  
}

