import React from 'react'
import { Link } from 'react-router-link'
// import {footer} from '../data'
import {
    FaYoutube,
    FaFacebook,
    FaGithub,
    FaInstagramSquare,
      
    } from "react-icons/fa";
import logos from '../assets/img/logos.png'
const Footer = () => {
  return (
    <footer className='section bg-primary text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
                 <a className='mb-6 lg:mb-0' href='#'>
                    <img src={logos} alt=''/>
                </a>
                {/* <div className='flex gap-x-4'>
                    
             <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center
                            items-center transition'
                            >
                               
                            </div>
                        
                    
                </div> */}
            
            <div>
                <h4>our company information shares different kinds social media </h4>
                
            </div>
            <div>
                <div>
                   <FaFacebook/>
                    <FaYoutube/>
                    <FaGithub/>
                    <FaInstagramSquare/>
                    

                </div>
            </div>
        
            </div>
            <p className='text-center'>
                &copy:FurniShop 2022-All rights reserved.

            </p>


        </div>
      
    </footer>
  )
}

export default Footer
