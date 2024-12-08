import  dotGeneratorGrid from "@/utilities/dotGenerator"
import { useMemo } from "react";
import { motion } from "framer-motion";
import React,{ useEffect,useState } from "react";


interface Props {
    numberOfDotEachLine : number;
    numberOfLine : number;
    absolute?:boolean;
    gapBlock?:number;
    gapLine?:number;
    colors:React.CSSProperties[];
    width?:number;
    height?:number;
    className?:string;
}  
/* const dotVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    hover: { scale: 0.8, transition: { duration: 0.2 } }
  }; */
const Dots = ({numberOfDotEachLine,
        numberOfLine,
        absolute=true,
        gapBlock=1,
        gapLine=1,
        width,
        height,
        className,
        colors}:Props)=>{
    const [count,setCount]  = useState(1)
            useEffect(() => {
                  setCount( prev => prev + 1 )
              }, [colors]);
    console.log(count)
    console.log(colors)
    
    const randomDist1 = useMemo(() => {
        return dotGeneratorGrid(numberOfDotEachLine, numberOfLine, colors);
      }, [numberOfDotEachLine, numberOfLine, colors]);
   
      const randomDist2 = useMemo(() => {
        return dotGeneratorGrid(numberOfDotEachLine, numberOfLine, colors);
      }, [numberOfDotEachLine, numberOfLine, colors]);
      
    const sizeClasses = ['w-0', 'w-1', 'w-2', 'w-3',"w-4","w-5", 'h-0', 'h-1', 'h-2', 'h-3',"h-4","shadow-2xl"];
    const AllClasses = () => (
        <>
            <div className="hidden">
            {sizeClasses.map((sizeClass) => (
                <div key={sizeClass} className={sizeClass} />
            ))}
            </div>
            
        </>
        
      );

    return (
        <>
        <AllClasses />
        <div  className={` ${absolute ? "absolute" : "null"} ${className} flex gap-${gapBlock}`}>
            
            <motion.div  layout key={count} className="flex flex-col gap-1">
            {
                randomDist1.map((line,index) =>{
                    return(
                        
                             <motion.div
                                 className={` flex items-center justify-evenly gap-${gapLine} `}>       
                                {line.map((color,colorIndex) => <motion.div
                                    key={`${color.id}+${color.colorValue}`}
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{delay:Math.random()*3,duration:1}}
                                    className={`
                                    ${ width ? `w-${width}` : `w-${Math.floor(Math.random()*3)}`} 
                                    ${ height ? `h-${height}` : `h-${Math.floor(Math.random()*3)}`} rounded-full`}
                                    style={color.color}
                                ></motion.div> 
                                )}                          
                            </motion.div>
                         
                        )
                    })
                }
            </motion.div>

        {/* Part 2 Start */}

        <motion.div layout key={count+1} className="flex flex-col gap-1">
            {
                randomDist2.map((line,index) =>{
                    return(
            
                        <motion.div
                         className={`flex items-center justify-evenly gap-${gapLine} `}>          
                            {line.map((color,colorIndex) => 
                                <motion.div
                                key={`${color.id}+${color.colorValue}`} 
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{delay:Math.random()*3,duration:1}}
                                className={` 
                                ${ width ? `w-${width}` : `w-${Math.floor(Math.random()*3)}`} 
                                ${ height ? `h-${height}` : `h-${Math.floor(Math.random()*3)}`} rounded-full`}
                                style={color.color}
                        ></motion.div> )}            
                        </motion.div>
         
                        )
                    })
                }
            </motion.div>

       
        </div>
    </>
    )
}


export default Dots
