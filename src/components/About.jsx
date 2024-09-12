import React from 'react'
import { ABOUT } from '../constants'

const About = () => {
  return (
    <section id="about">
        <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden my-4 max-w-4xl h-64 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <p className="m-8 max-w-4xl text-md lg:text-2xl text-justify">{ABOUT}</p>
        </div>

    </section>
  )
}

export default About
