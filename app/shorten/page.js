"use client";
import React from 'react'
import { useState } from 'react';

const page = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [generated, setgenerated] = useState("")
  const handlechange = (e) => {
    if (e.target.placeholder === 'Enter Your URL') {
      setUrl(e.target.value);
    } else {
      setShortUrl(e.target.value);
    }
  }

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortUrl}`);
        setUrl('')
        setShortUrl('')
        
        console.log(result)
        alert(JSON.parse(result).message)
      
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg my-16 p-8 rounded-lg shadow-lg h-screen'
      style={{
        background: 'linear-gradient(135deg, #f3e7fe 0%, #fff 100%)',
        animation: 'bgMove 8s ease-in-out infinite alternate'
      }}
    >
      <style>
        {`
          @keyframes bgMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          div[style] {
            background-size: 200% 200%;
          }
        `}
      </style>
      <h1 className='text-xl font-bold text-center mb-6'> 
        Shorten Your URL Here
      </h1>
      <div className='flex flex-col gap-4 '>
        <input value={url} className='p-2 border focus:outline-purple-600 rounded-lg' type="text" placeholder='Enter Your URL' onChange={handlechange} />
        <input value={shortUrl} className='p-2 border focus:outline-purple-600 rounded-lg' type="text" placeholder='Enter Your prefered short URL name' onChange={handlechange} />
        <button onClick={generate} className='bg-purple-700 rounded-lg p-2 text-white mt-3'>generate</button>
      </div>
      {
        generated && (
          <div className='mt-4 p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold'>Generated Short URL:</h2>
            <a href={generated} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
              {generated}
            </a>
          </div>
        )
      }
    </div>
  )
}

export default page
export const metadata = {
  title: "Shorten URL - Bitlinks",
  description: "Shorten your URLs easily with Bitlinks, your trusted URL shortener service.",
};
