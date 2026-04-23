import React from 'react'
import Container from '../../Container'
import Image from 'next/image'

const Virtualimg = () => {
  return (
    <section>
        <div className='px-2 lg:px-0 py-25 bg-[#FBFBFB]'>
            <Container>
                <Image src="/images/virtualimg.png" alt='virtualimg.png' width={1320} height={720}/>
            </Container>
        </div>
    </section>
  )
}

export default Virtualimg