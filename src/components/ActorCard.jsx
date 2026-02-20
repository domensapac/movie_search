import React, { useState } from 'react';
import DefaultPfp from '../assets/default_pfp.jpg'; 

const ActorCard = ({name, character, picPath}) => {

  return (
    <div className="bg-neutral-primary-soft p-6 border-1 border-white/10 rounded-2xl shadow-xl/20 hover:scale-105 transition-transform">
      <div className="flex flex-col items-center">
        <div className="flex aspect-square justify-center">
        <img 
          className="w-48 h-48 object-[center_20%] sm:h-22 sm:w-22 md:h-24 md:w-24 lg:w-25 lg:h-25 mb-4 object-cover rounded-full" 
          src={`${picPath ? `https://image.tmdb.org/t/p/w500/${picPath}` : DefaultPfp}`} 
          alt="actor_image" 
          draggable="false"
        ></img>
        </div>
        <h5 className="mb-0.5 text-xl text-center font-semibold tracking-tight text-heading">{name}</h5>
        <span className="text-sm text-center text-gray-400 text-body">"{character}"</span>
      </div>
    </div>
  );
};

export default ActorCard;