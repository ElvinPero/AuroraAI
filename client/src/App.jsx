import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages'
import './App.css'
// bg-[#0f0921]

// className='font-inter font-extrabold border-black border-4 bg-[#41fbb7] text-[#000000]  px-4 py-2 rounded-md hover:bg-[#010707] marker:bg-600 hover:text-white '>
const headStyle = {


  textShadow:
    "2px 2px 10px #fff",

  fontWeight: "900",
  fontSize: "25px",
  color: "white",


}

const App = () => {
  return (
    <BrowserRouter>
      <header className="fixed z-40  w-full flex justify-between items-center bg-teal border-b border-[#392a40] border-opacity-25 sm:px-8 px-4 py-4  bg-[#2b0d4e] backdrop-filter backdrop-blur-md bg-opacity-10 " >
        <Link to="/"> <button type="button" style={headStyle}  >
          Aurora AI
        </button>
        </Link>
        <div className='font-bold'>
          Powered by
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="logo"
            className='w-24 object-contain'
          />
        </div>
        <Link to="/create-post"
          className='custom-btn btn-16 font-inter font-extrabold'>
          Create
        </Link>
      </header>
      <main className='bodyb sm:p-8 px-4 py-8 w-full  min-h-[calc(100vh-73px)] '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter >
  )
}

export default App
