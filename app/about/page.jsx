import React from 'react'

const page = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white px-2 sm:px-6">
            {/* Animated Gradient Circles (like Home) */}
            <div className="absolute left-2 sm:left-10 top-24 h-full flex items-center pointer-events-none">
                <div className="animate-spin-slow w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full opacity-30 blur-lg"></div>
            </div>
            <div className="absolute right-2 sm:right-10 top-24 h-full flex items-center pointer-events-none">
                <div className="animate-spin-slow w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full opacity-30 blur-lg"></div>
            </div>
            <div className="z-10 w-full max-w-lg sm:max-w-2xl mb-10 mx-auto mt-10 p-4 sm:p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-blue-600 text-center">About Us</h1>
                <p className="mb-4 text-gray-700 text-center text-sm sm:text-base">
                    Welcome to <span className="font-semibold text-blue-500">BitLinks</span>, your trusted URL shortener! Our mission is to make sharing links simple, fast, and secure.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-800 text-sm sm:text-base">
                    <li>Shorten long URLs for easy sharing</li>
                    <li>Track link analytics and performance</li>
                    <li>Safe and reliable service</li>
                </ul>
                <p className="mb-2 text-gray-700 text-center text-sm sm:text-base">
                    Whether you&apos;re sharing links on social media, emails, or anywhere else, BitLinks helps you keep your URLs neat and manageable.
                </p>
                <p className="text-gray-700 font-medium text-center text-sm sm:text-base">
                    Thank you for choosing <span className="text-blue-500">BitLinks!</span>
                </p>
            </div>
        </div>
    )
}

export default page

