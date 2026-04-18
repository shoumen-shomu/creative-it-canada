import React from 'react'
import Banner from './components/layouts/home/Banner'
import Achievement from './components/layouts/home/Achievement'
import About from './components/layouts/home/About'
import Service from './components/layouts/home/Service'
import Feedback from './components/layouts/home/Feedback'
import Virtualimg from './components/layouts/home/Virtualimg'
import Companies from './components/layouts/home/Companies'
import Newslatter from './components/layouts/home/Newslatter'

const page = () => {
  return (
    <>
      <Banner/>
      <Achievement/>
      <About/>
      <Service/>
      <Feedback/>
      <Virtualimg/>
      <Companies/>
      <Newslatter/>
    </>
  )
}

export default page