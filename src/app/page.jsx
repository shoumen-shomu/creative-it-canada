import React from 'react'
import Banner from './components/layouts/home/Banner'
import Achievement from './components/layouts/home/Achievement'
import About from './components/layouts/home/About'

const page = () => {
  return (
    <main>
      <Banner/>
      <Achievement/>
      <About/>
    </main>
  )
}

export default page