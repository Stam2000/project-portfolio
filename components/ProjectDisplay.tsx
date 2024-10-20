import Dots from "./Dots";

export const ProjectDisplay = ()=>{

    const defaultColors=[
        { backgroundColor: "#D1D5DB" },
        { backgroundColor: "#FFFFFF" },
        { backgroundColor: "rgba(152, 206, 0, 0.8)" },
        { borderWidth: "2px", borderColor: "#FFFFFF" },
        { backgroundColor: "rgba(152, 206, 0, 0.2)" },
        { borderWidth: "2px", borderColor: "#98CE00" },
        { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
        { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.2)" }
      ]

      const logoObjects = [
        { name: "blender", displayName: "Blender" },
        { name: "css", displayName: "Css" },
        { name: "git-icon", displayName: "Git" },
        { name: "github-icon", displayName: "Github" },
        { name: "huggingface", displayName: "Huggingface" },
        { name: "javascript", displayName: "Javascript" },
        { name: "langchain", displayName: "Langchain" },
        { name: "logo-javascript", displayName: "Javascript" },
        { name: "mongodb-icon", displayName: "Mongodb" },
        /* { name: "next-js", displayName: "Next Js" },
        { name: "nodejs", displayName: "Nodejs" },
        { name: "openai", displayName: "Openai" },
        { name: "postgresql", displayName: "Postgresql" },
        { name: "prisma", displayName: "Prisma" },
        { name: "python", displayName: "Python" },
        { name: "react", displayName: "React" },
        { name: "sass", displayName: "Sass" },
        { name: "tailwind-css", displayName: "Tailwind Css" },
        { name: "typescript", displayName: "Typescript" },
        { name: "vue", displayName: "Vue" } */]

    return(
        <>
            <div className="flex items-center mt-10">
                <div className="w-[60%] flex flex-col gap-2  px-2 ">
                    <h3 className="text-4xl font-nunito text-white " >
                        Finance App
                    </h3>
                    <div className="grid grid-cols-5 gap-2  w-[75%] mt-6 " >
                    {
                        logoObjects.map((lg,index)=>{
                            return(
                                <div className=" text-slate-800 bg-gray-300 rounded-sm p-1 text-center" >
                                    {lg.displayName}
                                </div>
                            )
                        })
                    }
                    </div>
                    <p className="pt-6 w-2/3 font-oxygen text-white" >
                    I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.
                    </p>
                    <Dots numberOfDotEachLine={18} height={2} width={2} className="mt-4" gapLine={1}  absolute={false} colors={defaultColors} numberOfLine={2} />
                </div>
                <div className="flex-[1] p-4 flex flex-col items-center justify-center gap-3 bg-slate-300 " >
                    <div  className="flex items-center justify-center text-xl text-white font-nunito " >
                        <img className={` rounded-xl object-cover`} src={`/w.jpg`}  alt={"lg.displayName"}/>
                    </div>
                    <div className="flex  gap-2" >
                        <button className="border-2 text-white w-32 p-1 rounded-md font-oxygen ">
                            GitHub
                        </button>
                        <button className="border-2 p-1 w-32 rounded-md text-white font-oxygen" >
                            Live Preview 
                        </button>
                    </div>
                </div> 
            </div>
            
            
        </>
        
    )
}

