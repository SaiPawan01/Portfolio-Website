import React from 'react'

// components
import SectionWraper from './SectionWraper.jsx'

// assets
import { educationDetails } from '../assets/files/education.js'

function Education() {
  return (
    <SectionWraper title={'education'}>
        <div className='text-[#ABB2BF]'>
            <table className='w-[100%]'>
                <thead>
                    <tr className='text-white'>
                        <th className='border p-4'>Qualification</th>
                        <th className='border p-4'>College</th>
                        <th className='border p-4'>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {educationDetails.map((degree,index)=>{
                        return <tr key={index}>
                            <td className='border p-3 text-center'>{degree.degree}</td>
                            <td className='border p-3 text-center'>{degree.college}</td>
                            <td className='border p-3 text-center'>{degree.percentage}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </SectionWraper>
  )
}

export default Education
