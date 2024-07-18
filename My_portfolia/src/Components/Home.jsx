import React from 'react'
import { Link } from 'react-router-dom'



const Resume_File = 'http://localhost:5173/src/Files/Akshita_Gupta_Resume.pdf'
const Home = () => {

    const DownloadResume = (url) => {
        const FileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', FileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();

    }
    return (

        <>
            <div className='bg-slate-600  text-white'>
                <div className=' container  max-screen-w-xl mx-auto flex justify-between items-center h-fit p-5'>
                    <h1 className='text-xl md:text-3xl lg:text-4xl'>Akshita Gupta</h1>
                    <button onClick={() => { DownloadResume(Resume_File) }} className='bg-slate-500 text-sm md:text-lg rounded-full hover:bg-slate-700 transition-all duration-300 px-4 py-2'>Download Resume</button>
                </div>
            </div>


            <div className=' container  max-screen-w-xl mx-auto m-5 p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20'>
                    <div className=' col-span-1 flex flex-col justify-start p-3'>
                       
                        <h1 className='text-2xl md:text-4xl font-semibold text-green-300 mb-5'>Akshita Gupta</h1>
                        <h1 className='text-xl md:text-2xl font-semibold text-white uppercase'>I'm a </h1>
                        <h1 className='text-xl md:text-2xl font-semibold text-white uppercase'>web developer</h1>
                        <h1 className='text-xl md:text-2xl font-semibold text-white uppercase'>Frontend developer</h1>
                        <h1 className='text-xl md:text-2xl font-semibold text-white uppercase'>Unity developer</h1>
                            

                        <p className='text-white  italic  mt-5' >I am a motivated and flexible professional, continually seeking opportunities to grow and take on new challenges. My commitment to learning and delivering superior results is unwavering. With an optimistic perspective and a growth-oriented mindset, I am ready to make meaningful contributions and achieve significant milestones.</p>

                        <div className='flex flex-wrap justify-start items-center text-3xl gap-5  text-slate-300  mt-5 py-3'>

                            <Link className='hover:scale-90 transition-all duration-200' to='https://www.linkedin.com/in/akshita-gupta25/'> <i class="ri-linkedin-box-fill bg-slate-700 rounded-full  p-2 h-12 w-12"></i></Link>

                            <Link className='hover:scale-90 transition-all duration-200' to='https://github.com/1020akshita'>
                                <i class="ri-github-fill  bg-slate-700  rounded-full p-2 h-12 w-12"></i></Link>
                            <Link className='hover:scale-90 transition-all duration-200' to='https://www.facebook.com/'>
                                <i class="ri-facebook-box-fill  bg-slate-700 rounded-full  p-2 h-12 w-12"></i></Link>
                            <Link className='hover:scale-90 transition-all duration-200' to='https://www.instagram.com/akshita_gupta__/?hl=en'>
                                <i class="ri-instagram-fill  bg-slate-700 rounded-full  p-2 h-12 w-12"></i></Link>
                        </div>

                    </div>

                    <div className='col-span-1 flex justify-center items-center '>
                        <div className='  border-slate-700 rounded-tr-3xl rounded-bl-3xl shadow-lg shadow-slate-700 opacity-75 mix-blend-overlay overflow-hidden'>

                            <img className='h-64 md:h-96 md:w-72 p-5 hover:scale-125 transition-all duration-500 ' src="src\Files\Profile_Image.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
