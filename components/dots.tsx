import  dotGeneratorGrid from "@/utilities/dotGenerator"
import { useMemo } from "react";

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

const Dots = ({numberOfDotEachLine,
        numberOfLine,
        absolute=true,
        gapBlock=1,
        gapLine=1,
        width,
        height,
        className,
        colors}:Props)=>{

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
        <div className={` ${absolute ? "absolute" : "null"} ${className} flex gap-${gapBlock}`}>
            <div className="flex flex-col gap-1">
            {
                randomDist1.map((line,index) =>{
                    return(
                        
                            <div key={index} className={` flex items-center justify-evenly gap-${gapLine} `}>
                                {line.map(color => <div key={Math.random()*index} className={` 
                                ${ width ? `w-${width}` : `w-${Math.floor(Math.random()*3)}`} 
                                ${ height ? `h-${height}` : `h-${Math.floor(Math.random()*3)}`} rounded-full`}
                                style={color}
                                ></div> )}
                            </div>
                        )
                    })
                }
            </div>

        {/* Part 2 Start */}

        <div className="flex flex-col gap-1">
            {
                randomDist2.map((line,index) =>{
                    return(
                        <div key={index} className={`flex items-center justify-evenly gap-${gapLine} `}>
                            {line.map(color => <div key={Math.random()*index} className={` 
                            ${ width ? `w-${width}` : `w-${Math.floor(Math.random()*3)}`} 
                            ${ height ? `h-${height}` : `h-${Math.floor(Math.random()*3)}`} rounded-full`}
                            style={color}
                            ></div> )}
                        </div>
                        )
                    })
                }
            </div>

       
        </div>
    </>
    )
}

export default Dots
