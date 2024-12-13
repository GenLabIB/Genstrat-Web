import React from 'react'
import '@/styles/global.css'
import { Fragment } from 'react'
import Layout from '@/layout/Layout'
import { ModalProvider } from '@/context/ModalContext';

const App = ({Component , pageProps}) => {
  return (
    <Fragment>
      <ModalProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </ModalProvider>
    </Fragment>
  )
}

export default App