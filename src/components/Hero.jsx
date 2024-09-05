import { LuImport } from "react-icons/lu"
import zaf from "../assets/zaf.webp"


const Hero = () => {
  return (
    <section>
        <div className="flex flex-row items-center justify-center">

            <div className="mt-8">
            <h1 className="overflow-hidden text-[10vw] font-semibold uppercase leading-none text-yellow-200"> Zafri <br/> Haikal</h1>
            <h2 className="overflow-hidden text-[1vw] ml-2 mt-5"> Hello, I am a fresh developer who explore into this world.</h2>
            <a href="/Benson-Langford.pdf" target="_blank" rel="noopener noreferrer" download
            className="flex items-center rounded-xl bg-yellow-300 p-2 px- m-2 mt-5 uppercase font-medium text-black hover:bg-yellow-400 w-32">
                <LuImport className="mr-2"/>
                <span>My Resume</span>
            </a>
            </div>

            <div className="mt-16">
            <img src={zaf} alt="Benson Langford" className="mt-8 m-8 h-[35em] w-full object-cover rounded-md"/>
            </div>

            

        {/* <div className="mt-8">
            
        <h1 className="mt-16 overflow-hidden text-[10vw] font-semibold uppercase leading-none"> Zafri <br/> Haikal</h1>

            <a href="/Benson-Langford.pdf" target="_blank" rel="noopener noreferrer" download
            className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400 w">
                <LuImport className="mr-2"/>
                <span>My Resume</span>
            </a>
        </div>

        <div className="w-full">
            <img src={benson} alt="Benson Langford" className="mt-8 h-96 w-full object-cover"/>
        </div> */}

        </div>



    </section>
  )
}

export default Hero
