import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => (
   <section id='Home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 px-6 sm:px-16`}>
            <div className={`flex flex-row items-center py-[6px] px-4 mb-2 rounded-[10px] bg-discount-gradient`}>
                <img src={ discount } alt="discount" className={`w-[32px] h-[32px]`} />
                <p className={`${styles.paragraph} ml-2`}>
                <span className={` text-white `}>20% </span>
                    Discount for {"  "}
                    <span className={` text-white `}>One Month </span>
                    Account
                </p>
            </div>

            <div className=' flex flex-row justify-between items-center w-full'>
              <h1 className='flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                  The Next  <br className='sm:block hidden' /> {"  "}
                  <span className=' text-gradient'>Generation</span> {"  "}
                  Payment Method 
              </h1>
              <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted />
              </div>
            </div>
        </div>
   </section>
)

export default Hero