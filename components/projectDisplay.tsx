import Dots from "./dots-2";
import { useMediaQuery } from "react-responsive";
import Safari from "@/components/ui/safari";

const Projects = [
  {
    name: "Finance App",
    description:
      "A finance app that allows users to track their expenses and income. The app is built using React, Tailwind CSS, and TypeScript. The app is also deployed on Vercel.",
    link: "https://estate.sopmanuel.com",
    logoObjects: [
      { name: "blender", displayName: "Blender" },
      { name: "css", displayName: "Css" },
      { name: "git-icon", displayName: "Git" },
      { name: "github-icon", displayName: "Github" },
      { name: "huggingface", displayName: "Huggingface" },
      { name: "javascript", displayName: "Javascript" },
      { name: "langchain", displayName: "Langchain" },
      { name: "mongodb-icon", displayName: "Mongodb" },
    ],
    images: {
      src: "finance.jpeg",
      alt: "finance app",
    },startColor:[
      { backgroundColor: "#D1D5DB" },
      { backgroundColor: "#FFFFFF" },
      { backgroundColor: "black" },
      { backgroundColor: "rgba(152, 206, 0, 0.8)" },
      { borderWidth: "3px", borderColor: "#FFFFFF" },
      { backgroundColor: "rgba(152, 206, 0, 0.4)" },
      { borderWidth: "3px", borderColor: "#98CE00" },
      { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.9)" },
      { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.4)" },
    ],
/*     --tw-gradient-from: #4338ca var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(67 56 202 / 0) var(--tw-gradient-to-position); 

    .via-sky-500 {
    --tw-gradient-to: rgb(14 165 233 / 0)  var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), #0ea5e9 var(--tw-gradient-via-position), var(--tw-gradient-to);
}

    .to-emerald-500 {
    --tw-gradient-to: #10b981 var(--tw-gradient-to-position);
}
    
    */
    defaultColors:[
      { backgroundColor: "#4338ca" },
      { backgroundColor: "#10b981" },
      { backgroundColor: "white" },
      { backgroundColor: " rgba(67,56,202,1)" },
      { borderWidth: "3px", borderColor: "#10b981" },
      { backgroundColor: "rgba(14,165,233,1)" },
      { borderWidth: "3px", borderColor: "white" },
      { borderWidth: "3px", borderColor: "rgba(67,56,202,1)" },
      { borderWidth: "3px", borderColor: "white" },
      { borderWidth: "3px", borderColor: "rgba(232, 157, 14, 1)" },
      { backgroundColor: "rgba(232, 157, 14, 1)" },
    ]
  },
  {
    name: "Finance App",
    description:
      "A finance app that allows users to track their expenses and income. The app is built using React, Tailwind CSS, and TypeScript. The app is also deployed on Vercel.",
    link: "https://fimae.sopmanuel.com",
    logoObjects: [
      { name: "blender", displayName: "Blender" },
      { name: "css", displayName: "Css" },
      { name: "git-icon", displayName: "Git" },
      { name: "github-icon", displayName: "Github" },
      { name: "huggingface", displayName: "Huggingface" },
      { name: "javascript", displayName: "Javascript" },
      { name: "langchain", displayName: "Langchain" },
      { name: "mongodb-icon", displayName: "Mongodb" },
    ],
    images: {
      src: "portfolio.jpeg",
      alt: "finance app",
    },startColor:[
      { backgroundColor: "#4338ca" },
      { backgroundColor: "#10b981" },
      { backgroundColor: "white" },
      { backgroundColor: " rgba(67,56,202,1)" },
      { borderWidth: "3px", borderColor: "#10b981" },
      { backgroundColor: "rgba(14,165,233,1)" },
      { borderWidth: "3px", borderColor: "white" },
      { borderWidth: "3px", borderColor: "rgba(67,56,202,1)" },
      { borderWidth: "3px", borderColor: "white" },
      { borderWidth: "3px", borderColor: "rgba(232, 157, 14, 1)" },
      { backgroundColor: "rgba(232, 157, 14, 1)" },
    ],
    defaultColors:[
      { backgroundColor: "#D1D5DB" },
      { backgroundColor: "#FFFFFF" },
      { backgroundColor: "black" },
      { backgroundColor: "rgba(152, 206, 0, 0.8)" },
      { borderWidth: "3px", borderColor: "#FFFFFF" },
      { backgroundColor: "rgba(152, 206, 0, 0.4)" },
      { borderWidth: "3px", borderColor: "#98CE00" },
      { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.9)" },
      { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.4)" },
    ]
  },{
    name: "Finance App",
    description:
      "A finance app that allows users to track their expenses and income. The app is built using React, Tailwind CSS, and TypeScript. The app is also deployed on Vercel.",
    link: "https://www.sopmanuel.com",
    logoObjects: [
      { name: "blender", displayName: "Blender" },
      { name: "css", displayName: "Css" },
      { name: "git-icon", displayName: "Git" },
      { name: "github-icon", displayName: "Github" },
      { name: "huggingface", displayName: "Huggingface" },
      { name: "javascript", displayName: "Javascript" },
      { name: "langchain", displayName: "Langchain" },
      { name: "mongodb-icon", displayName: "Mongodb" },
    ],
    images: {
      src: "estate.png",
      alt: "finance app",
    },
    startColor:[
      { backgroundColor: "#D1D5DB" },
      { backgroundColor: "#FFFFFF" },
      { backgroundColor: "black" },
      { backgroundColor: "rgba(152, 206, 0, 0.8)" },
      { borderWidth: "3px", borderColor: "#FFFFFF" },
      { backgroundColor: "rgba(152, 206, 0, 0.4)" },
      { borderWidth: "3px", borderColor: "#98CE00" },
      { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.9)" },
      { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.4)" },
    ],
    defaultColors:[
      { backgroundColor: "white" },
      { backgroundColor: "white" },
      { backgroundColor: "black" },
      { backgroundColor: "rgba(255, 200, 0, 1)" },
      { borderWidth: "3px", borderColor: "white" },
      { borderWidth: "3px", borderColor: "rgba(255, 242, 197, 1)" },
      { borderWidth: "3px", borderColor: "rgba(255, 200, 0, 1)" },
    ]
  },
];

export const ProjectDisplay = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });


  const logoObjects = [
    { name: "blender", displayName: "Blender" },
    { name: "css", displayName: "Css" },
    { name: "git-icon", displayName: "Git" },
    { name: "github-icon", displayName: "Github" },
    { name: "huggingface", displayName: "Huggingface" },
    { name: "javascript", displayName: "Javascript" },
    { name: "langchain", displayName: "Langchain" },
    { name: "mongodb-icon", displayName: "Mongodb" },
  ];

  return (
    <>
      {Projects.map((project, index) => {
        return (
          <div key={project.name} className={`relative flex flex-col lg:flex-row  mt-10 md:mb-10 `}>
            <div
              className="md:w-[80%] w-[90%] lg:w-1/2 lg:pt-8   flex flex-col gap-2  px-2 "
            >
              <h3 className="text-4xl font-nunito text-white ">
                {project.name}
              </h3>
              <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2   mt-6 ">
                {project.logoObjects.map((lg, index) => {
                  return (
                    <div
                      key={lg.displayName}
                      className=" text-slate-800 text-sm lg:text-lg bg-gray-300 rounded-sm p-1 text-center"
                    >
                      {lg.displayName}
                    </div>
                  );
                })}
              </div>
              <p className="pt-6 w-full  font-oxygen text-white text-justify">
                {project.description}
              </p>
              <div className="flex flex-1   items-center justify-center ">
                <Dots
                  key={`projects-dots`}
                  numberOfDotEachLine={isMobile ? 10 : 18}
                  height={2}
                  width={2}
                  className="mt-4"
                  gapLine={1}
                  absolute={false}
                  colors={project.startColor}
                  numberOfLine={2}
                  defaultColors={project.defaultColors}
                  location={"project"}
                />
              </div>
            </div>
            <div className="flex-[1] p-8 flex flex-col items-center justify-center gap-3 ">
              <div className="relative flex items-center md:w-[90%] 2xl:w-[75%]  justify-center text-xl text-white font-nunito ">
                <Safari
                  url="magicui.design"
                  className="size-full "
                  src={`/${project.images.src}`}
                />
              </div>
              <div className="flex mt-6 gap-6">
                <button className="border-2 text-white w-32 p-1 rounded-md font-oxygen ">
                  <a target="_blank">GitHub</a>
                </button>
                <button className="border-2 p-1 w-32 rounded-md text-white font-oxygen">
                  <a href={project.link} target="_blank" >Live Preview</a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
{
  /*             <img
              className={` rounded-xl object-cover `}
              src={`/cars.jpeg`}
              alt={"lg.displayName"}
            /> */
}
