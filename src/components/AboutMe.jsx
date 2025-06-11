import React from 'react'

// assets
import { Images } from '../assets/files/assets'

// components
import SectionWraper from './SectionWraper'

function AboutMe({isLandingPage = false}) {

    let buttonStyles ="w-[10rem] border p-2 md:mt-2 font-light border-[#C778DD]";

    if(isLandingPage == false){
        buttonStyles = "hidden";
    }
    
  return (
    <SectionWraper title={'about-me'}>
        <div className='flex flex-col-reverse md:flex-row gap-10'>
            <div className='md:w-[70%] flex flex-col justify-center gap-10 text-[#ABB2BF]'>
                <p>uae, veritatis odio exercitationem. Iusto suscipit nihil nam accusantium?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores vel non impedit exercitationem quia magni. Saepe ipsum blanditiis, laborum culpa, hic harum perferendis id recusandae deleniti ratione placeat accusantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi reprehenderit nulla, modi nemo quis praesentium repellat, quas maxime ex eaque quasi consequuntur, sunt perferendis dolore eos quo qui natus.</p>
                <a href=""><button className={buttonStyles}>Read More</button></a>
            </div>
            <div>
                <img className='w-[300px] flex m-auto' src={Images.AboutMeImg} alt="developer Img" />
                <hr className='w-[100%] border-[#C778DD]'/>
            </div>
        </div>
    </SectionWraper>
  )
}

export default AboutMe
