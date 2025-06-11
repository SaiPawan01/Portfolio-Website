import React from 'react'



function SkillsTable(props) {
    return (
        <div className='flex flex-col gap-1 border p-3 text-center mb-5'>
            <h4 className='text-md font-bold text-white'>{props.skills.title}</h4>
            <hr />
            <ol>
                {props.skills.tools.map((value,index) => <li key={index}>{value}</li>)}
            </ol>
        </div>
    )
}

export default SkillsTable
