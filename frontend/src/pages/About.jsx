import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsletterBox'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t"> 
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 text-gray-600">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate et aspernatur dolore assumenda modi neque excepturi, libero itaque?</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, delectus rerum. Assumenda laudantium natus nisi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate et aspernatur dolore assumenda modi neque excepturi, libero itaque?</p>
          <b className='text-gray-800 '>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus exercitationem, officia iure quidem nihil sunt soluta magni hic?</p>

        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem consectetur distinctio, totam corporis quaerat.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem consectetur distinctio, totam corporis quaerat.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem consectetur distinctio, totam corporis quaerat.</p>
        </div>
      </div>
      
      <NewsLetterBox/>
    </div>
  )
}

export default About
