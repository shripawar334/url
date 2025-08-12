"use client";
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setgenerated] = useState("")
  const handlechange = (e) => {
    if (e.target.placeholder === 'Enter Your URL') {
      setUrl(e.target.value);
    } else {
      setShortUrl(e.target.value);
    }
  }
  const handlemousemove=(a) => {
   
    a.target.style.transform = 'scale(1.05)';
    
  }
  const handlemouseleave=(a) => {
    a
    a.target.style.transform = 'scale(1)';
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
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortUrl}`);
        setUrl('')
        setShortUrl('')
        
        console.log(result)
        alert(result.message)
      
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg my-16 p-8 rounded-lg shadow-lg min-h-screen'
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
        <button onClick={generate} onMouseMove={handlemousemove} onMouseLeave={handlemouseleave} className='bg-purple-700 rounded-lg p-2 text-white mt-3'>generate</button>
      </div>
      {
        generated && (
          <div className='mt-4 p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-lg font-semibold'>Generated Short URL:</h2>
            <Link href={generated} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
              {generated}
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Page

