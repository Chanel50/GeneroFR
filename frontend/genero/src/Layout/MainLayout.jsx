import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const mainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet/>
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
    <Footer />
    </>
  )
}

export default mainLayout
