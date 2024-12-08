"use media"
import Dots from "./dots-2"
import LogoDisplay from "./logoDisplay"
import { useRef } from "react"
import {motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"



/* const defaultColors=[
    { backgroundColor: "#D1D5DB" },
    { backgroundColor: "#000000" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#181818" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#98CE00" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.8)" }
  ]

  const defColors=[
    { backgroundColor: "#D1D5DB" },
    { backgroundColor: "#FFFFFF" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#FFFFFF" },
    { backgroundColor: "rgba(152, 206, 0, 0.2)" },
    { borderWidth: "2px", borderColor: "#98CE00" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.2)" }
  ]
 */
  

const ToolKit =({colors}:{colors:React.CSSProperties[]})=>{
    const ref = useRef(null);
    const isMobile = useMediaQuery({ maxWidth:500 })

    const mainStack = [
        { name: "next-js", displayName: "Next Js" },
        { name: "react", displayName: "React" },
        { name: "postgresql", displayName: "Postgresql" },
        { name: "javascript", displayName: "Javascript" },
        { name: "typescript", displayName: "Typescript" },
        { name: "html-5", displayName: "HTML" },
        { name: "css", displayName: "Css" },
        { name: "tailwind-css", displayName: "Tailwind Css" }, 
        { name: "langchain", displayName: "Langchain" },
        { name: "huggingface", displayName: "Huggingface" },
        { name: "openai", displayName: "Openai API" },
        { name: "mistral-color", displayName: "Mistral API" },
        {name:"together-ai", displayName:"Together AI"},
        { name: "python", displayName: "Python" },   
        { name: "drizzle", displayName: "drizzle" },
        { name: "axios-purple", displayName: "Axios" },
        { name: "shadcn-ui", displayName: "Shadcn UI" },
        { name: "github-icon", displayName: "Github" },
        { name: "nodejs", displayName: "Nodejs" },
        {name:"hono", displayName:"Hono"},   
    ]

    const logoObjects = [ 
        { name: "mongodb-icon", displayName: "Mongodb" },
        { name: "expressjs", displayName: "Express Js" },   
        { name: "prisma", displayName: "Prisma" },
        { name: "sass", displayName: "Sass" },
        { name: "vue", displayName: "Vue" },
        { name: "blender", displayName: "Blender" },
        { name: "claude-color", displayName: "Claude API" },
      ];


    return(   
        <div ref={ref} className=" pt-20 flex justify-center" > 

            <div   className="flex flex-col z-50 rounded-xl shadow-sm shadow-white bg-gradient-to-b w-[80%] md:w-3/4 desk:2/3 from-white from-60% to-[#fdfff6] overflow-hidden to-90% pt-12 max-h-[80%] lg:px-12 desk:px-48 px-4 md:px-6 text-black" >
            
                <motion.h2 
                
                className="text-slate-950 relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-extrabold  md:p-2 round" >
                    <span className="z-20" >
                        ToolKits
                    </span>
                    <Dots numberOfDotEachLine={isMobile ? 4 : 7} 
                        width={4} height={4}   gapLine={1} className=" -bottom-4 z-0" absolute={false} viewportRoot={ref} colors={colors} numberOfLine={2} />
                </motion.h2>

                <p className="md:mt-6 mt-8 text-md text-justify font-nunito text-gray-700 " >
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>

                <div className="mt-12 self-center w-[90%]  font-nunito text-gray-700 md:w-full mb-16" >
                    <div >
                        <div className="text-xl font-bold mb-4">Main stack:</div>
                        <LogoDisplay logoObjects={mainStack} />
                    </div>
                    <div className="mt-8 " >
                        <div className="text-xl font-bold mb-4">Also confident with:</div>
                        <LogoDisplay logoObjects={logoObjects} />
                    </div>

                </div> 
            </div>

        </div>
    )
}

export default ToolKit