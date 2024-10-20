import Image from "next/image"

const LogoDisplay = () =>{
    const size = "10"
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
        { name: "next-js", displayName: "Next Js" },
        { name: "nodejs", displayName: "Nodejs" },
        { name: "openai", displayName: "Openai" },
        { name: "postgresql", displayName: "Postgresql" },
        { name: "prisma", displayName: "Prisma" },
        { name: "python", displayName: "Python" },
        { name: "react", displayName: "React" },
        { name: "sass", displayName: "Sass" },
        { name: "tailwind-css", displayName: "Tailwind Css" },
        { name: "typescript", displayName: "Typescript" },
        { name: "vue", displayName: "Vue" }
      ];
        const logos = logoObjects.map(lg=>({
            component : <img className={`h-6`} src={`/TechLogo/${lg.name}.svg`}  alt={lg.displayName}/>,
            name:lg.displayName
        }))
        
         
    return(
        <div  className="grid gap-4 grid-cols-5" >
            {
                logos.map((logo,index)=>(
                    <div key={index} className="flex gap-2  shadow-sm py-4 rounded-lg items-center border-2 flex-col" >
                        {logo.component}
                        <div className="font-oxygen" >
                            {logo.name}
                        </div>        
                    </div>
                ))
            }
        </div>
    )
}

export default LogoDisplay