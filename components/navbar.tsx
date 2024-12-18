import Dots from "./dots";
import { GithubIcon, LinkedIcon } from "./customIcon";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Mail } from "lucide-react";

const Navbar = ({
  memoizedColors,
  shadowBox,
  borderColor,
  currentLanguage,
}: {
  shadowBox: string[];
  borderColor: string[];
  memoizedColors: React.CSSProperties[];
  currentLanguage:boolean;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const scrollTo = (sectionId:string)=>{
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (isMobile) {
    return (
      <motion.nav
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1}} className="mt-28 flex flex-col font-poiret-one gap-8 items-center justify-center ">
        <div className="w-full flex-col  flex items-center justify-center  ">
          {currentLanguage && <span className="text-white  font-zeyada text-2xl  ">
            Colors by AI
          </span>}
          <Dots
            location={`navbar-dots`}
            numberOfDotEachLine={7}
            width={3}
            height={3}
            absolute={false}
            colors={memoizedColors}
            numberOfLine={3}
          />
        </div>
        <nav className="grid grid-cols-2 gap-4">
          <div className="relative flex items-center justify-center gap-1">
            <button
              className="z-50 text-white  text-2xl font-bold  p-2 rounded-md font-out left-1 text-nowrap"
              onClick={()=>scrollTo("toolkit")}
            >
              My ToolKit
            </button>
          </div>
          <div className="relative flex items-center justify-center gap-1">
            <button
              className="z-50  p-2 rounded-md text-white text-2xl font-bold font-out left-1 text-nowrap"
              onClick={()=>scrollTo("projects")}
            >
              My Projects
            </button>
          </div>
          <div className="relative flex  flex-col gap-2">
            <motion.button
              animate={{
                boxShadow: shadowBox,
                borderColor: borderColor,
              }}
              whileHover={{ scale: 1.05 }}
              initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              transition={{
                boxShadow: {
                  duration: 5,
                  ease: "easeInOut",
                },
                borderColor: {
                  duration: 5, // Set your desired duration for borderColor
                  ease: "easeInOut",
                },
              }}
              className="relative flex items-center border-2 bg-none rounded-md p-2 justify-center gap-1"
            >
              <a
                className="z-50 text-white bg-none text-xl font-bold font-out left-1  flex gap-2 items-center text-nowrap"
                href="mailto:manuel@sopmanuel.com"
                target="_blank"
              >
                Contact Me <Mail size={20} />
              </a>
            </motion.button>
            <div className=" z-10 flex gap-3 text-white items-center justify-center ">
              <a href="https://github.com/Stam2000" target="_blank">
                <GithubIcon
                  width={35}
                  height={35}
                  color="white"
                  className="custom-class"
                />
              </a>
              <a href="https://www.linkedin.com/in/manuel-sop-0905b9207" target="_blank">
                <LinkedIcon
                  width={35}
                  height={35}
                  color="white"
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-1">
            <button
              className="z-50 text-white  p-2 md:p-1 rounded-md  text-2xl font-bold font-out left-1 text-nowrap"
              onClick={()=>scrollTo("about")}
            >
              About Me
            </button>
          </div>
        </nav>
      </motion.nav>
    );
  }

  if (isTablet) {
    return (
      <motion.nav
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1}} className=" mt-20 flex flex-col  font-poiret-one gap-8 items-center justify-center ">
        <div className="w-full  flex items-center justify-center  ">
          <Dots
            location={`navbar-dots`}
            numberOfDotEachLine={7}
            width={3}
            height={3}
            absolute={false}
            colors={memoizedColors}
            numberOfLine={2}
          />
        </div>
        <nav className="flex gap-8">
          <div className="relative flex items-center justify-center gap-1">
            <button
              className="z-50 text-white  text-2xl font-bold  p-2 rounded-md font-out left-1 text-nowrap"
              onClick={()=>scrollTo("toolkit")}
            >
              My ToolKit
            </button>
          </div>
          <div className="relative flex items-center justify-center gap-1">
            <button
              className="z-50  p-2 rounded-md text-white text-2xl font-bold font-out left-1 text-nowrap"
              onClick={()=>scrollTo("projects")}
            >
              My Projects
            </button>
          </div>
          <div className="relative flex  flex-col gap-2">
            <motion.button
              animate={{
                boxShadow: shadowBox,
                borderColor: borderColor,
              }}
              whileHover={{ scale: 1.05 }}
              initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              transition={{
                boxShadow: {
                  duration: 5,
                  ease: "easeInOut",
                },
                borderColor: {
                  duration: 5, // Set your desired duration for borderColor
                  ease: "easeInOut",
                },
              }}
              className="relative flex items-center border-2 bg-none rounded-md p-2 justify-center gap-1"
            >
              <a
                className="z-50 text-white bg-none text-xl font-bold font-out left-1  flex gap-2 items-center text-nowrap"
                href="mailto:manuel@sopmanuel.com"
              >
                Contact Me <Mail size={20} />
              </a>
            </motion.button>
            <div className=" z-10 flex gap-3 text-white items-center justify-center ">
              <a href="https://github.com/Stam2000">
                <GithubIcon
                  width={35}
                  height={35}
                  color="white"
                  className="custom-class"
                />
              </a>
              <a href="https://www.linkedin.com/in/manuel-sop-0905b9207">
                <LinkedIcon
                  width={35}
                  height={35}
                  color="white"
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-1">
            <button
              className="z-50 text-white  p-2 md:p-1 rounded-md  text-2xl font-bold font-out left-1 text-nowrap"
              onClick={()=>scrollTo("about")}
            >
              About Me
            </button>
          </div>
        </nav>
      </motion.nav>
    );
  }

  return (
    <motion.nav
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1,delay:0.7}} className=" absolute left-4 right-4 bottom-8 deskB:bottom-10 flex flex-wrap flex-row  font-poiret-one gap-4 items-center justify-center md:justify-evenly ">
      <div className="w-full lg:w-fit flex items-center justify-center">
        <Dots
          location={`navbar-dots`}
          numberOfDotEachLine={6}
          width={3}
          height={3}
          absolute={false}
          colors={memoizedColors}
          numberOfLine={2}
        />
      </div>

      <div className="relative flex items-center justify-center gap-1">
        <button
          className="z-50 text-white  deskB:text-xl font-bold  p-2 md:p-1 rounded-md font-out left-1 text-nowrap"
          onClick={()=>scrollTo("toolkit")}
        >
          My ToolKit
        </button>
      </div>
      <div className="relative flex items-center justify-center gap-1">
        <button
          className="z-50  p-2 md:p-1 rounded-md text-white deskB:text-xl font-bold font-out left-1 text-nowrap"
          onClick={()=>scrollTo("projects")}
        >
          My Projects
        </button>
      </div>
      <div className="relative flex  flex-col gap-2">
        <motion.button
          animate={{
            boxShadow: shadowBox,
            borderColor: borderColor,
          }}
          whileHover={{ scale: 1.05 }}
          initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
          transition={{
            boxShadow: {
              duration: 5,
              ease: "easeInOut",
            },
            borderColor: {
              duration: 5, // Set your desired duration for borderColor
              ease: "easeInOut",
            },
          }}
          className="relative flex items-center border-2 bg-none rounded-md p-2 justify-center gap-1"
        >
          <a
            className="z-50 text-white bg-none  flex gap-2 items-center  deskB:text-xl font-bold font-out left-1 text-nowrap"
            href="mailto:manuel@sopmanuel.com"
            target="_blank"
          >
            Contact Me <Mail size={20} />
          </a>
        </motion.button>
        <div className=" z-10 flex gap-3 text-white items-center justify-center " >
          <a href="https://github.com/Stam2000" target="_blank">
            <GithubIcon
              width={35}
              height={35}
              color="white"
              className="custom-class"
            />
          </a>
          <a href="https://www.linkedin.com/in/manuel-sop-0905b9207" target="_blank">
            <LinkedIcon
              width={35}
              height={35}
              color="white"
              className="custom-class"
            />
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-1">
        <button
          className="z-50 text-white  p-2 md:p-1 rounded-md  deskB:text-xl font-bold font-out left-1 text-nowrap"
          onClick={()=>scrollTo("about")}
        >
          About Me
        </button>
      </div>
    </motion.nav>
  );
};
export default Navbar;
