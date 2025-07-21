"use client";
import React from 'react'

const page = () => {
return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-50">
        {/* Left Animation */}
        <div className="absolute left-10 top-0 h-full flex items-center pointer-events-none">
            <div className="animate-spin-slow w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full opacity-30 blur-lg"></div>
        </div>
        {/* Right Animation */}
        <div className="absolute right-10 top-0 h-full flex items-center pointer-events-none">
            <div className="animate-spin-slow w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full opacity-30 blur-lg"></div>
        </div>
        <div className="z-10 w-full">
            <h2 className="text-3xl font-bold mb-3 text-center text-blue-700">Contact Us</h2>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </div>
        {/* Custom Animations */}
        <style jsx>{`
            .animate-spin-slow {
                animation: spin 8s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg);}
                100% { transform: rotate(360deg);}
            }
        `}</style>
    </div>
)
}



export default page

