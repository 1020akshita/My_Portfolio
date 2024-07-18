import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold">My Portfolio</h1>
                            <p className="mt-2">© 2024 Akshita Gupta</p>
                        </div>

                        <div className="w-full md:w-1/3 text-center md:text-right">
                            <div className="flex justify-center md:justify-end space-x-4">
                                <Link to="https://www.facebook.com/profile.php?id=100079158240278" className="hover:text-gray-400">Facebook</Link>
                                <Link to="https://github.com/1020akshita" className="hover:text-gray-400">Github</Link>
                                <Link to="https://www.instagram.com/akshita_gupta__/?hl=en" className="hover:text-gray-400">Instagram</Link>
                                <Link to="https://www.linkedin.com/in/akshita-gupta25/n" className="hover:text-gray-400">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
