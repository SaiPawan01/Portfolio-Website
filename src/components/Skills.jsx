import React from 'react'


// assets
import { skillSet } from '../assets/files/skillSet'


// components
import SectionWraper from './SectionWraper'
import SkillsTable from './SkillsTable'

function Skills() {
  return (
    <SectionWraper title='skills'>
        <div className='md:grid grid-cols-3 gap-3 text-[#ABB2BF]'>
                <SkillsTable skills = {skillSet.Languages} />
                <SkillsTable skills = {skillSet['Python Libraries']} />
                <SkillsTable skills = {skillSet['WEB Technologies']} />
                <SkillsTable skills = {skillSet['Other Tools']} />
                <SkillsTable skills = {skillSet['Communication Languages']} />
            </div>
    </SectionWraper>
  )
}

export default Skills
