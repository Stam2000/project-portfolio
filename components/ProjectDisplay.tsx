import Dots from "./dots-2";
import {useMediaQuery} from "react-responsive"

export const ProjectDisplay = ()=>{

    const isMobile = useMediaQuery({ maxWidth:500 })


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
        ]

    return(
        <>
            <div className="relative flex flex-col lg:flex-row items-center mt-10">
                
                <div className="md:w-[80%] w-[90%] lg:w-1/2  flex flex-col gap-2  px-2 ">
                    <h3 className="text-4xl font-nunito text-white " >
                        Finance App
                    </h3>
                    <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2   mt-6 " >
                    {
                        logoObjects.map((lg,index)=>{
                            return(
                                <div className=" text-slate-800 text-sm lg:text-lg bg-gray-300 rounded-sm p-1 text-center" >
                                    {lg.displayName}
                                </div>
                            )
                        })
                    }
                    </div>
                    <p className="pt-6 w-full  font-oxygen text-white text-justify" >
                    I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.
                    </p>
                    <div className="flex items-center justify-center " >
                        <Dots numberOfDotEachLine={isMobile?10:18} height={2} width={2} className="mt-4" gapLine={1}  absolute={false} colors={defaultColors} numberOfLine={2} />
                    </div>
                </div>
                <div className="flex-[1] p-8 flex flex-col items-center justify-center gap-3 " >
                    <div  className="flex items-center md:w-[90%] 2xl:w-[75%]  justify-center text-xl text-white font-nunito " >
                        <img className={` rounded-xl object-cover `} src={`/w.jpg`}  alt={"lg.displayName"}/>
                    </div>
                    <div className="flex mt-6 gap-6" >
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

