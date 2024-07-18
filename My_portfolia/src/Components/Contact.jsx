import React, { useState } from 'react';

const Contact = () => {
    const [val, setVal] = useState({ name: "", email: "", mo: "", message: "" });

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(val);
    };

    return (
        <>
            <div className='bg-slate-600 p-3'>
                <div className='container max-w-screen-xl mx-auto m-5'>
                    <div className='flex justify-center items-center text-2xl md:text-4xl text-white font-semibold mt-10 mb-8 uppercase'>
                        contact us
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15'>
                        <div className='flex justify-center items-center md:p-5'>
                            <div className='border-slate-700 rounded-tr-3xl rounded-bl-3xl shadow-lg shadow-slate-700 overflow-hidden py-5 w-full border-2'>
                                <img className='h-40 md:h-96 md:w-72 p-5 m-auto' src="src/Files/phone.png" alt="" />
                                <h1 className='px-3 text-center text-xl md:text-3xl text-white'>8085281020</h1>
                                <h1 className='px-3 text-center text-sm md:text-xl text-white'>akshita.524.gupta@gmail.com</h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center p-3'>
                            <form onSubmit={handelSubmit} className="bg-slate-500  shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                                <div className="mb-4 ">
                                    <label className="block text-slate-300 text-sm font-bold mb-2 " htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        onChange={(event) => setVal({ ...val, name: event.target.value })}
                                        className="shadow appearance-none border-b-2 border-slate-700 rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-slate-300  text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        onChange={(event) => setVal({ ...val, email: event.target.value })}
                                        className="shadow appearance-none  border-b-2 border-slate-700 rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block  text-slate-300  text-sm font-bold mb-2" htmlFor="mo">
                                        Mobile Number
                                    </label>
                                    <input
                                        onChange={(event) => setVal({ ...val, mo: event.target.value })}
                                        className="shadow appearance-none  border-b-2 border-slate-700 rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                        id="mo"
                                        type="text"
                                        placeholder="Mobile Number"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block  text-slate-300  text-sm font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        onChange={(event) => setVal({ ...val, message: event.target.value })}
                                        className="shadow appearance-none  border-b-2 border-slate-700 rounded w-full py-2 px-3 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        placeholder="Your message"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
