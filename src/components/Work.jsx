import { EXPERIENCES } from "../constants"

const Work = () => {
  return (
    <section id="experience">
        <div className="mx-auto max-w-6xl ">
            {EXPERIENCES.map((experience, id) =>(

                <div key={id} className="mx-28 mb-10 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-10 ">
                    <h2 className="font-medium lg:text-2xl"> {experience.company}</h2>
                    <div className="flex justify-between">
                        <p className="py-4 tracking-wide lg:text-xl">
                            {experience.role}
                        </p>
                        <p className="py-4 e lg:text-xl">
                            {experience.year}
                        </p>
                    </div>
                    <p className="font-sans text-white">
                        {experience.description}
                    </p>
                </div>
                    

            )
            )}

        </div>
    </section>
  )
}

export default Work
