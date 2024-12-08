import Dots from "./dots-2";
import { ProjectDisplay } from "./projectDisplay";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";


const OverviewProjects = ()=>{
    const useRe = useRef(null)
    const isInView = useInView(useRe)
    const defaultColors=[
        { backgroundColor: "#D1D5DB" },
        { backgroundColor: "#FFFFFF" },
        { backgroundColor: "rgba(152, 206, 0, 0.8)" },
        { borderWidth: "3px", borderColor: "#FFFFFF" },
        { backgroundColor: "rgba(152, 206, 0, 0.2)" },
        { borderWidth: "3px", borderColor: "#98CE00" },
        { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.9)" },
        { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.2)" }
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
        <section ref={useRe} className="flex  flex-col lg:px-14 desk:px-40  pt-16 pb-10 md:pb-20  " >
            <motion.h2
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{root:useRe,amount:0.5}}
            className="text-white relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-medium p-2 gap-1" >
            <span className="z-20" >
                Projects
            </span>
            <Dots numberOfDotEachLine={7} 
                width={4} height={4}  gapLine={1} className=" -bottom-4 z-0" absolute={false} colors={isInView ? [...defaultColors]:defaultColors} numberOfLine={2} />
        </motion.h2>
        <ProjectDisplay />
        </section>
    )
}

export default OverviewProjects