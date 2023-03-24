import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages'
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
      <header className="fixed z-40  w-full flex justify-between items-center bg-teal sm:px-8 px-4 py-4 border-b border-rounded-md  bg-[#c977ff] backdrop-filter backdrop-blur-md bg-opacity-50 " >
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
          className='font-inter font-extrabold border-black border-4 bg-[#41fbb7] text-[#000000]  px-4 py-2 rounded-md hover:bg-[#010707] marker:bg-600 hover:text-white '>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#0f0921] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter >
  )
}

export default App
