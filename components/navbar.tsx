import Dots from "./dots"
import { GithubIcon, LinkedIcon } from "./customIcon"
import { motion } from "framer-motion"
import {useMediaQuery} from "react-responsive"

const Navbar = ({memoizedColors,shadowBox,borderColor}:{shadowBox:string[],borderColor:string[],memoizedColors:React.CSSProperties[]}) => {

const isMobile = useMediaQuery({ maxWidth:500 })
const isTablet = useMediaQuery({ maxWidth:768 })
const isLaptop = useMediaQuery({maxWidth:1280})

if(isMobile){
  return(
    <div className="mt-32 flex flex-col font-poiret-one gap-8 items-center justify-center " >

        <div className="w-full  flex items-center justify-center  " >
          <Dots numberOfDotEachLine={7} 
                width={3} height={3}     absolute={false} colors={memoizedColors} numberOfLine={3} />
        </div>
        <nav className="grid grid-cols-2 gap-4" >
            <div className="relative flex items-center justify-center gap-1">
                <a className="z-50 text-white  text-2xl font-bold  p-2 rounded-md font-out left-1 text-nowrap" href="">
                    My ToolKits        
                </a>
            </div>  
            <div className="relative flex items-center justify-center gap-1">
                <a className="z-50  p-2 rounded-md text-white text-2xl font-bold font-out left-1 text-nowrap" href="">
                    My Project        
                </a>
            </div>
            <div className="relative flex  flex-col gap-2" >
                <motion.button animate={{ 
                        boxShadow:   shadowBox  , 
                        borderColor:  borderColor ,
                        }}
                        whileHover={{scale:1.05}}
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
                        }} className="relative flex items-center border-2 bg-none rounded-md p-2 justify-center gap-1">
                    <a  className="z-50 text-white bg-none text-2xl font-bold font-out left-1 text-nowrap" href="">
                        Contact Me      
                    </a>   
                </motion.button>
                    <div className=" z-10 flex gap-3 text-white items-center justify-center " >
                        <GithubIcon width={35} height={35} color="white" className="custom-class" />
                        <LinkedIcon width={35} height={35} color="white" className="custom-class" />
                    </div>
            </div>
            
            <div className="relative flex items-center justify-center gap-1">
                <a className="z-50 text-white  p-2 md:p-1 rounded-md  text-2xl font-bold font-out left-1 text-nowrap" href="">
                    About Me      
                </a>
            </div>
        </nav>

      </div>
  )
}

if(isTablet){
    return(
        <div className=" mt-20 flex flex-col  font-poiret-one gap-8 items-center justify-center " >
            <div className="w-full  flex items-center justify-center  " >
              <Dots numberOfDotEachLine={7} width={3} height={3}     absolute={false} colors={memoizedColors} numberOfLine={2} />
            </div>
            <nav className="flex gap-8" >
                <div className="relative flex items-center justify-center gap-1">
                    <a className="z-50 text-white  text-2xl font-bold  p-2 rounded-md font-out left-1 text-nowrap" href="">
                        My ToolKits        
                    </a>
                </div>  
                <div className="relative flex items-center justify-center gap-1">
                    <a className="z-50  p-2 rounded-md text-white text-2xl font-bold font-out left-1 text-nowrap" href="">
                        My Project        
                    </a>
                </div>
                <div className="relative flex  flex-col gap-2" >
                    <motion.button animate={{ 
                            boxShadow:   shadowBox  , 
                            borderColor:  borderColor ,
                            }}
                            whileHover={{scale:1.05}}
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
                            }} className="relative flex items-center border-2 bg-none rounded-md p-2 justify-center gap-1">
                        <a  className="z-50 text-white bg-none text-2xl font-bold font-out left-1 text-nowrap" href="">
                            Contact Me      
                        </a>   
                    </motion.button>
                        <div className=" z-10 flex gap-3 text-white items-center justify-center " >
                            <GithubIcon width={35} height={35} color="white" className="custom-class" />
                            <LinkedIcon width={35} height={35} color="white" className="custom-class" />
                        </div>
                </div>
                
                <div className="relative flex items-center justify-center gap-1">
                    <a className="z-50 text-white  p-2 md:p-1 rounded-md  text-2xl font-bold font-out left-1 text-nowrap" href="">
                        About Me      
                    </a>
                </div>
            </nav>
    
          </div>
      )
}

    return (
        <nav className=" absolute left-4 right-4 bottom-8 deskB:bottom-10 flex flex-wrap flex-row  font-poiret-one gap-4 items-center justify-center md:justify-evenly " >
        <div className="w-full lg:w-fit flex items-center justify-center" >
          <Dots numberOfDotEachLine={6} 
                width={3} height={3}     absolute={false} colors={memoizedColors} numberOfLine={2} />
        </div>
      
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white  text-xl font-bold  p-2 md:p-1 rounded-md font-out left-1 text-nowrap" href="">
              My ToolKits        
          </a>
        </div>  
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50  p-2 md:p-1 rounded-md text-white text-xl font-bold font-out left-1 text-nowrap" href="">
              My Project        
          </a>
        </div>
        <div className="relative flex  flex-col gap-2" >
          <motion.button animate={{ 
              boxShadow:   shadowBox  , 
              borderColor:  borderColor ,
            }}
            whileHover={{scale:1.05}}
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
            }} className="relative flex items-center border-2 bg-none rounded-md p-2 justify-center gap-1">
          <a  className="z-50 text-white bg-none    text-xl font-bold font-out left-1 text-nowrap" href="">
            Contact Me      
          </a>
          
        </motion.button>
          <div className=" z-10 flex gap-3 text-white items-center justify-center " >
          <GithubIcon width={35} height={35} color="white" className="custom-class" />
          <LinkedIcon width={35} height={35} color="white" className="custom-class" />
          </div>
        </div>
        
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white  p-2 md:p-1 rounded-md  text-xl font-bold font-out left-1 text-nowrap" href="">
            About Me      
          </a>
        </div>
      </nav>
    )
}
export default Navbar