import React, { useEffect, useState } from 'react'
import { assets, projectData } from '../assets/assets'
import { motion } from "framer-motion"

const Projects = () => {

  const [currentIndex,setCurrentIndex] = useState(0);
  const [cardsToShow,setCardsToShow] = useState(1);

  useEffect(()=>{
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
         setCardsToShow(projectData.length);
      }else {
        setCardsToShow(1)
      };
    }
      updateCardsToShow();

      window.addEventListener('resize',updateCardsToShow);
      return()=>  window.removeEventListener('resize',updateCardsToShow);
  },[])

  const nextProject =() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length)
  }
  const prevProject =() => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectData.length - 1 : prevIndex -1)
  }

  return (
    <motion.div 
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='projects'>
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
      <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      {/* Slider Buttons */}
      <div className='flex justify-end items-center mb-8 '>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-level='Previous Project'>
          <img className='w-5' src={assets.left_arrow} alt="previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-level='Next Project'>
          <img className='w-5' src={assets.right_arrow} alt="next" />
        </button>
      </div>
      {/* Project Slider Controler */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
        style={{transform:`translateX(-${(currentIndex * 100) / cardsToShow }%)` }}>
          {projectData.map((project,index)=>(
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/3'>
              <img src={project.Image} alt={project.title} className='w-full h-auto mb-14'/>
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/6 px-2 shadow-md rounded-2xl'>
                  <h2 className='text-xl font-semibold text-gray-800 text-center'>{project.title}</h2>
                  <p className='text-gray-500 text-sm text-center'>
                    {project.Price} <span className='px-1'>|</span> {project.Location}
                  </p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div >
  )
}

export default Projects
