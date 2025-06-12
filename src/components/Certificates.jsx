import React from 'react'

import SectionWraper from './SectionWraper'


function Certificates({title, list}) {
  return (
    <SectionWraper title={title}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {list.map((certificate, index) => {
                  return <div key={index} className='border border-[#ABB2BF]'>
                    <img className='w-[100%] m-auto' src={certificate.img} alt="certificate-img" />
                    <div className='text-[#ABB2BF] p-5'>
                        <p className='mb-1'>Title : <span className='text-white'>{certificate.title}</span></p>
                        <p className='mb-3'>Company : <span className='text-white'>{certificate.company}</span></p>
                        <div><a href={certificate.url} target='_blank'><button className='border border-[#ABB2BF] p-1 pl-3 pr-3 text-white text-sm cursor-pointer hover:rounded hover:text-[#ABB2BF]'>Verify</button></a></div>
                       
                    </div>

                  </div>
              })}
        </div>
        
    </SectionWraper>
  )
}

export default Certificates
