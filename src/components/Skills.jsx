import React from 'react'

function Skills() {
  return (
    <div className='md:w-[70%] m-auto pl-5 pr-5 mt-24 mb-12'>
      <div className='flex items-center justify-between md:mb-10 mb-5'>
            <div className='flex items-center gap-5'>
                <h1 className='text-2xl md:text-4xl'>#Skills</h1>
                <hr className='md:w-[300px]  mt-3'/>
            </div>
            <a href="#">View All</a>
        </div>

        
            <div className='md:grid grid-cols-3 gap-3'>

                <div className='flex flex-col gap-1 border p-3 text-center mb-5'>
                    <h4 class='text-md font-bold'>Languages</h4>
                    <hr />
                    <ol>
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>JAVA</li>
                        <li>SQL</li>
                        <li>C</li>
                    </ol>
                </div>

                <div className='flex flex-col gap-1 border p-3 text-center mb-5'>
                    <h4 class='text-md font-bold'>Python Libraries</h4>
                    <hr />
                    <ol>
                        <li>Numpy</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>Scikit-learn</li>
                        <li>PyTorch</li>
                    </ol>
                </div>

                <div className='flex flex-col gap-1 border p-3 text-center mb-5'>
                    <h4 class='text-md font-bold'>Web Technologies</h4>
                    <hr />
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind CSS</li>
                        <li>React.Js</li>
                    </ol>
                </div>

                <div className='flex flex-col gap-1 border p-3 text-center mb-5'>
                    <h4 class='text-md font-bold'>Other Tools</h4>
                    <hr />
                    <ol>
                        <li>Git, GitHub</li>
                        <li>Postman</li>
                        <li>Visual Studio Code</li>
                    </ol>
                </div>

                <div className='flex flex-col gap-1 border p-3 text-center mb-5'>
                    <h4 class='text-md font-bold'>Languages</h4>
                    <hr />
                    <ol>
                        <li>Telugu (Native)</li>
                        <li>English</li>
                    </ol>
                </div>
                
            </div>
    </div>
  )
}

export default Skills
