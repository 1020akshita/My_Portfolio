import React from 'react'

const Experience = () => {
    const experiences = [
        { company: "HoloLabXR Private LTD",city:"jabalpur",employed:"Internship",position:"Unity Developer",time:"2 Month",session:"march-2023 / june-2023" },
        { company: "SparkVR Private LTD.",city:"jabalpur",employed:"Employed",position:"Unity Developer",time:"2 Month",session:"june-2023 / aug-2023" },
        { company: "Web Developer",city:"Bhopal",employed:"Employed",position:"FrontEnd Developer",time:"3 Month",session:"Feb-2023 / May-2024" },
    ]
    const projects =[
        {title:"", des:"",name:"",framework:"",session:""},
        {title:"", des:"",name:"",framework:"",session:""},
        {title:"", des:"",name:"",framework:"",session:""},
        {title:"", des:"",name:"",framework:"",session:""}
    ]
    return (
        <>
            <div className='container max-w-screen-xl mx-auto p-5'>
                <div className='flex justify-center items-center text-2xl md:text-4xl text-white font-semibold m-5 uppercase'>
                    my experiences
                </div>


                <div className='Education flex flex-wrap justify-center items-center p-2 gap-10'>
                    {experiences.map((elem, index) => (

                        <div className=' bg-slate-400 h-fit w-full md:h-52 md:w-72 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300  text-center '>

                            <div key={index} className=' text-sm md:text-xl flex flex-col justify-center items-cente leading-8 '>
                                <h1>{elem.company}</h1>
                                <h1>{elem.city}</h1>
                                <h1>{elem.employed}</h1>
                                <h1>{elem.position}</h1>
                                <h1>{elem.time}</h1>
                                <h1>{elem.session}</h1>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='flex justify-center items-center text-2xl md:text-4xl text-white font-semibold mt-10 mb-8 uppercase'>
                    my project
                </div>


                <div className='Education flex flex-wrap justify-center items-center p-2 gap-10'>
                    {projects.map((elem2, index) => (

                        <div className=' bg-slate-400 h-fit w-full md:h-52 md:w-72 border-slate-700 rounded-3xl shadow-lg shadow-slate-700 p-3 text-white  italic hover:scale-105 hover:shadow-slate-700 transition-all duration-300  text-center '>

                            <div key={index} className=' text-xl flex flex-col justify-center items-cente leading-8'>
                                <h1>{elem2.title}</h1>
                                <h1>{elem2.des}</h1>
                                <h1>{elem2.name}</h1>
                                <h1>{elem2.framework}</h1>
                                <h1>{elem2.session}</h1>
                                
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Experience
