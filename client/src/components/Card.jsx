import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';
import './card.css'
//  hover: shadow-cardhover card scale-110

const Card = ({ _id, name, prompt, photo }) => (
    <div className=" rounded-xl group relative  transform 
         transition duration-200   hover:scale-110   shadow-cardhover card hover:z-30">
        <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] backdrop-filter backdrop-blur-md bg-opacity-50  m-2 p-4 rounded-md">
            <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full object-cover bg-black flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
                    <p className="text-white text-sm">{name}</p>
                </div>
                <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
                    <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
                </button>
            </div>
        </div>
    </div>
);

export default Card;