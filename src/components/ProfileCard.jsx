// src/components/ProfileCard.jsx
import React from 'react';
import zaf from '../assets/zaf.webp'
import { SOCIAL_MEDIA_LINKS } from '../constants';

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6 mt-10 h-full backdrop-filter backdrop-blur-sm bg-opacity-20">
      <img
        src= {zaf}
        alt="Profile"
        className="h-80 rounded-full mx-auto"
      />
      <h2 className="text-4xl font-semibold text-center mt-4 text-yellow-400">ZAFRI HAIKAL</h2>
      <p className="text-center text-white">Fresh Graduate</p>

      <p className="mt-5 flex items-center justify-center gap-2">
                {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
        </p>
        
      <div className="mt-6">
     
        <ul className="space-y-4">
          <li>
            <a href="#about" className="text-white hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
