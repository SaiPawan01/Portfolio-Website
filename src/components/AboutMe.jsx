import React from 'react'

// assets
import { Images } from '../assets/files/assets'

// components
import SectionWraper from './SectionWraper'
import { useNavigate } from 'react-router-dom';

function AboutMe({isLandingPage = false}) {

    const buttonStyles = isLandingPage ? "w-[10rem] border p-2 md:mt-2 font-light border-[#C778DD]  text-white hover:text-[#ABB2BF] hover:rounded" : "hidden";
    
    const navigate = useNavigate();
    function navigateToAbout(){
        navigate('/about');
    }

  return (
    <SectionWraper title={'about-me'}>
        <div className='flex flex-col-reverse md:flex-row gap-10'>
            <div className='md:w-[70%] flex flex-col justify-center gap-8 text-[#ABB2BF] '>
                <p>I'm a final-year Computer Science(AI & ML) student at Anil Neerukonda Institute of Technology and Sciences(ANITS).</p>
                <p>I have completed internships at Infosys Springboard, Edunet Foundation, and Kalam Dream Labs. During these, I worked on diverse projects including an ANPR & ATCC-based Smart Traffic Management System, a Crop Recommendation System using machine learning, and core web development fundamentals. These experiences strengthened my skills in real-world problem solving, web development, and AI applications.
</p>
                <p>I practice coding on LeetCode and GeeksforGeeks to improve my problem-solving and logical thinking. I'm also focused on becoming adaptable and continuously learning to thrive in any environment.</p>
                <button onClick={navigateToAbout} className={buttonStyles}>Read More...</button>
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
