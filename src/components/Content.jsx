import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Work from './Work';

const Content = () => {
  return (
    <div className="w-full p-4 mt-10">

      <section id="about" className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-center">About Me</h1>
        <About/>
      </section>

      <section id="projects" className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-center">Projects</h1>
        <Projects/>
      </section>

      <section id="work" className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-center">Work</h1>
        <Work/>
      </section>
    </div>
  );
};

export default Content;
