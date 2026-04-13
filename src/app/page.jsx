import React from 'react'
import Banner from './components/layouts/home/Banner'
import Achievement from './components/layouts/home/Achievement'
import About from './components/layouts/home/About'
import Service from './components/layouts/home/Service'
import Feedback from './components/layouts/home/Feedback'

const page = () => {
  return (
    <>
      <Banner/>
      <Achievement/>
      <About/>
      <Service/>
      <Feedback/>
    </>
  )
}

export default page