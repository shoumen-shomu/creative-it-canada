import React from 'react'
import Banner from './components/layouts/home/Banner'
import Achievement from './components/layouts/home/Achievement'
import About from './components/layouts/home/About'
import Service from './components/layouts/home/Service'

const page = () => {
  return (
    <main>
      <Banner/>
      <Achievement/>
      <About/>
      <Service/>
    </main>
  )
}

export default page