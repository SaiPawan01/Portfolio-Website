import React from 'react'

// components
import SectionWraper from './SectionWraper'

// assets
import { Facts } from '../assets/files/assets'

function FunFacts() {
  return (
    <SectionWraper title='my-fun-facts'>
        <div className='a'>
            {Facts.map((fact,index) => <div key={index} className='p-2 border text-[#ABB2BF] inline-block mb-5 mr-5'>{fact}</div>)}
        </div>
    </SectionWraper>
  )
}

export default FunFacts
