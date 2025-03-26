import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage:"url('/header_img.jpg')"}} id='header'>
        <Navbar/>
        <motion.div 
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white '>
          <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
            Explore Homes that fits your dreams</h2>
          <div className='flex flex-wrap justify-center gap-4 mt-16 lg:px-32'>
            <a className='bg-gray-500  px-8 py-3 rounded ' href="#projects">Projects</a>
            <a className='bg-blue-500 px-8 py-3 rounded' href="#contact">Contast Us</a>
          </div>
        </motion.div>
    </div>
  )
}

export default Header
