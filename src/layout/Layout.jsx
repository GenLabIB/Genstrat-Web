import React from 'react'
import { Fragment } from 'react'
import Header from './utils/Header'
import Footer from './utils/Footer'
import Home from '@/pages/home'

const Layout = (props) => {

  return (
    <Fragment>
        <Header />
        {props.children}
        {/* <Footer /> */}
    </Fragment>
  )
}

export default Layout