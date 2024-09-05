import React from 'react'
import { ABOUT } from '../constants'

const About = () => {
  return (
    <section id="about">
        <div className="flex items-center justify-center ">
            <p className="m-8 max-w-4xl text-3xl lg:text-2xl text-justify">{ABOUT}</p>
        </div>

    </section>
  )
}

export default About
