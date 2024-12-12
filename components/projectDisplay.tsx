import Dots from "./dots-2";
import { useMediaQuery } from "react-responsive";
import Safari from "@/components/ui/safari";

const Projects = [
  {
    name: "Finance App",
    description:
      "A finance app that allows users to track their expenses and income. The app is built using React, Tailwind CSS, and TypeScript. The app is also deployed on Vercel.",
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
    },
  },
  {
    name: "Finance App",
    description:
      "A finance app that allows users to track their expenses and income. The app is built using React, Tailwind CSS, and TypeScript. The app is also deployed on Vercel.",
    link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
    },
  },
];

export const ProjectDisplay = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  const defaultColors = [
    { backgroundColor: "#D1D5DB" },
    { backgroundColor: "#FFFFFF" },
    { backgroundColor: "black" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "3px", borderColor: "#FFFFFF" },
    { backgroundColor: "rgba(152, 206, 0, 0.4)" },
    { borderWidth: "3px", borderColor: "#98CE00" },
    { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.9)" },
    { borderWidth: "3px", borderColor: "rgba(152, 206, 0, 0.4)" },
  ];

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
          <div className={`relative flex flex-col lg:flex-row  mt-10`}>
            <div
              key={project.name}
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
                  colors={defaultColors}
                  numberOfLine={2}
                  defaultsColors={defaultColors}
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
                  <a>GitHub</a>
                </button>
                <button className="border-2 p-1 w-32 rounded-md text-white font-oxygen">
                  <a>Live Preview</a>
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
