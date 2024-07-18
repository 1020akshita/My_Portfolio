import React from 'react'


const Resume_File = 'http://localhost:5173/src/Files/Akshita_Gupta_Resume.pdf'
const About = () => {
    const DownloadResume = (url) => {
        const FileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', FileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }

    const school_Details = [
        { school_name: "sanatan dharam public higher secondary school", city: "jabalpur", class: "10th", board: "MP board", session: "2013-2014" },
        { school_name: "sanatan dharam public higher secondary school", city: "jabalpur", class: "12th", board: "MP board", session: "2014-2015" },
        { school_name: "Mata Gujri Mahila Maha Vidyalay (Mgmm)", city: "jabalpur", class: "BCA", board: "Rani Durgawati Vishwavidyalay", session: "2017-2020" },
        { school_name: "Guru Ramdas khalsa institude of science and technology", city: "jabalpur", class: "mca", board: "rajeev gandhi produogiki vishwavidyalay", session: "2020-2022" }
    ]

    const skills = [
        { skill: "html" },
        { skill: "css" },
        { skill: "javascript" },
        { skill: "java" },
        { skill: "c#" }
    ]

    const frameworks = [
        { framework: "reactjs" },
        { framework: "nodejs" }
    ]

    const tools = [
        { tool: "vs code" },
        { tool: "git hub" },
        { tool: "git" }
    ]
    const databases = [
        { database: "mysql" },
        { database: "mongodb" }
    ]
    return (
        <>
            <div className='bg-slate-600 p-2'>

                <div className='container max-w-screen-xl mx-auto m-5 '>
                    <div className='flex justify-center items-center text-2xl md:text-4xl text-white font-semibold  uppercase m-5'>
                        about me
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20'>
                        <div className=' flex justify-center items-center p-3'>
                            <div className='  border-slate-700 rounded-tr-3xl rounded-bl-3xl shadow-lg shadow-slate-700  overflow-hidden '>
                                <img className='h-64 md:h-96 md:w-72 p-5 hover:scale-125 transition-all duration-500 ' src="src\Files\Profile_Image.png" alt="" />
                            </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center p-3'>
                            <p className='text-white  italic ' > Equipped with a strong foundation in computer science, I am eager to explore emerging technologies and apply innovative solutions to solve intricate problems. Throughout my academic tenure, I actively engaged in various projects and coursework that enhanced my proficiency in programming languages like Python, Java, and JavaScript. Additionally, I have hands-on experience with database management systems, web development frameworks, and fundamental software engineering principles. I thrive in collaborative environments and am enthusiastic about bringing my fresh perspectives and energy to your esteemed organization. With a relentless pursuit of growth and a drive for excellence, I am ready to tackle new challenges and contribute positively to your team.</p>

                            <div className=' container  max-screen-w-xl mx-auto flex justify-between items-center h-fit py-5'>
                                <button onClick={() => { DownloadResume(Resume_File) }} className='bg-slate-500 text-white text-sm md:text-lg rounded-full hover:bg-slate-700 transition-all duration-300 px-4 py-2 '>Download Resume</button>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center items-center text-2xl md:text-4xl text-white font-semibold m-5 mb-8 uppercase'>
                        my education
                    </div>


                    <div className='Education flex flex-wrap justify-center items-center gap-10'>
                        {school_Details.map((elem, index) => (

                            <div className=' bg-slate-400 h-fit w-full md:h-72 md:w-72 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300  text-center '>

                                <div key={index} className=' 46  flex flex-col justify-center items-cente leading-8 uppercase  text-sm md:text-xl'>
                                    <h1>{elem.school_name}</h1>
                                    <h1>{elem.city}</h1>
                                    <h1>{elem.class}</h1>
                                    <h1>{elem.board}</h1>
                                    <h1>{elem.session}</h1>
                                </div>

                            </div>
                        ))}
                    </div>


                    <div className='flex justify-center items-center text-2xl md:text-4xl text-white font-semibold mt-10 mb-8 uppercase'>
                        my skills
                    </div>
                    <div className='flex justify-start items-center text-lg md:text-xl  text-white font-semibold mt-10 mb-8 uppercase'>
                        Programming Language
                    </div>

                    <div className='Education flex flex-wrap justify-start items-center gap-5 md:gap-10'>
                        {skills.map((elem2, index) => (

                            <div key={index} className=' h-fit w-full md:h-14 md:w-40 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300   '>

                                <div className=' text-center text-sm md:text-md flex flex-col justify-center items-cente leading-8 uppercase'>
                                    <h1>{elem2.skill}</h1>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='flex justify-start items-center  text-lg md:text-xl  text-white font-semibold mt-10 mb-8 uppercase'>
                        tools
                    </div>
                    <div className='Education flex flex-wrap justify-start items-center gap-5 md:gap-10'>
                        {tools.map((elem4, index) => (

                            <div key={index} className='  h-fit w-full md:h-14 md:w-40 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300  text-center '>

                                <div className=' text-sm md:text-md  flex flex-col justify-center items-cente leading-8 uppercase'>
                                    <h1>{elem4.tool}</h1>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className='flex justify-start items-center  text-lg md:text-xl text-white font-semibold mt-10 mb-8 uppercase'>
                        frameworks
                    </div>
                    <div className='Education flex flex-wrap justify-start items-center gap-5 md:gap-10'>
                        {frameworks.map((elem3, index) => (

                            <div key={index} className=' h-fit w-full md:h-14 md:w-40 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300  text-center '>

                                <div className=' text-sm md:text-md  flex flex-col justify-center items-cente leading-8 uppercase'>
                                    <h1 >{elem3.framework}</h1>
                                </div>

                            </div>
                        ))}
                    </div>


                    <div className='flex justify-start items-center  text-lg md:text-xl  text-white font-semibold mt-10 mb-8 uppercase'>
                        Database & Platform
                    </div>
                    <div className='Education flex flex-wrap justify-start items-center gap-5 md:gap-10'>
                        {databases.map((elem5, index) => (

                            <div key={index} className=' h-fit w-full md:h-14 md:w-40 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300  text-center '>

                                <div className=' text-sm md:text-md  flex flex-col justify-center items-cente leading-8 uppercase'>
                                    <h1 >{elem5.database}</h1>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </>
    )
}

export default About
