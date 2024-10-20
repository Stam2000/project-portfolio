import Dots from "./Dots";
import { ProjectDisplay } from "./ProjectDisplay";

const OverviewProjects = ()=>{
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
        <section className="flex flex-col bg-gradient-to-b px-40 from-black from-10% to-[#0b0b0b] pt-16 pb-20 to-90% " >
            <h2 className="text-white relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-medium p-2 gap-1" >
            <span className="z-20" >
                Projects
            </span>
            <Dots numberOfDotEachLine={7} 
                width={4} height={4}  gapLine={1} className=" -bottom-4 z-0" absolute={false} colors={defaultColors} numberOfLine={2} />
        </h2>
        <ProjectDisplay />
        </section>
    )
}

export default OverviewProjects