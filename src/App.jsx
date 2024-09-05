import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content';

const App = () => {
  return (
    <main className="font-light text-white antialiased selection:bg-yellow-300 selection:text-black bg-gradient-to-b from-purple-950 to-yellow-500">
      <div className="min-h-screen flex flex-col">
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row flex-1">
          
          {/* Sticky Sidebar */}
          <aside className="md:w-2/4 lg:w-1/4 md:sticky top-0 h-auto md:h-screen p-4">
            <Sidebar />
          </aside>

          {/* Content Section */}
          <main className="w-full lg:w-3/4 p-4">
            <Content />
          </main>
        </div>

        {/* Footer (Contact Section) */}
        <footer className=" text-white p-4">
          <Contact />
        </footer>
      </div>
    </main>
  );
};

export default App;
