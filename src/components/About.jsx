import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
        initial={{opacity:0,x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-24 lg:px-32 w-full overflow-hidden' id='about'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About 
            <span className='underline underline-offset-4 under font-light'>Our Brand</span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>
            Passionate About Properties, Dedicated to Your Vision
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.logo} alt="" className='w-18 sm:w-1/2 max-w-28'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years Of Experience</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-4 max-w-full'>Your trusted destination for buying, selling, and renting properties.
                    Whether you're searching for your dream home, a prime commercial space, or a lucrative investment opportunity, we have got you covered. Explore our extensive listings, connect with experienced agents,
                    and make informed real estate decisions with ease. Let us help you find the perfect property that fits your needs and budget.</p>
                       <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>
    </motion.div >
  )
}

export default About
