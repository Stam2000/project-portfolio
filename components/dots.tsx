import  dotGeneratorGrid from "@/utilities/dotGenerator"

interface Props {
    numberOfDotEachLine : number;
    numberOfLine : number;
    absolute:boolean
}

const Dots = ({numberOfDotEachLine,numberOfLine,absolute=true}:Props)=>{

    const randomDist1 = dotGeneratorGrid(numberOfDotEachLine,numberOfLine)
    const randomDist2 = dotGeneratorGrid(numberOfDotEachLine,numberOfLine)


    return (
        <div className={` ${absolute ? "absolute" : "null"} flex gap-1`}>
            <div className="flex flex-col gap-1">
            {
                randomDist1.map((line,index) =>{
                    return(
                            <div key={index} className="flex items-center justify-evenly gap-2 ">
                                {line.map(display => <div key={Math.random()*index} className={`${display} w-2 ${Math.floor(Math.random()*3)} h-2 ${Math.floor(Math.random()*3)} rounded-full`}></div> )}
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
                            <div key={Math.random()*index} className="flex items-center justify-evenly gap-2 ">
                                {line.map(display => <div className={`${display} w-2 ${Math.floor(Math.random()*3)} h-2 ${Math.floor(Math.random()*3)} rounded-full`}></div> )}
                            </div>
                        )
                    })
                }
            </div>

       
        </div>
    )
}

export default Dots


/*  <div className="flex flex-col gap-1">
        <div className="flex items-center justify-evenly gap-1 " >
            <div className="bg-[#98CE00] w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00] w-1 h-1 rounded-full"></div>
          </div>
          <div className="flex items-center justify-evenly gap-1 " >
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
          </div>
          <div className="flex items-center justify-evenly gap-1 " >
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
          </div>
          <div className="flex items-center justify-evenly gap-1 " >
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            <div className="w-1 h-1 border-[1px] border-[#98CE00]/60 rounded-full"></div>
            <div className="w-1 h-1 border-[1px] border-[#98CE00] rounded-full"></div>
            <div className="w-1 h-1 border-[1px] border-[#98CE00]/60 rounded-full"></div>
            <div className="w-1 h-1 border-[1px] border-[#98CE00]/60 rounded-full"></div>
            <div className="w-1 h-1 border-[1px] border-[#98CE00] rounded-full"></div>
            <div className="w-1 h-1 border-[1px] border-[#98CE00]/60 rounded-full"></div>
          </div>
        </div> */

        
        /* <div className="flex items-center justify-evenly gap-1 " >
                <div className="bg-[#98CE00] w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            </div>
            <div className="flex items-center justify-evenly gap-1 " >
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/90 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
            </div>
            <div className="flex items-center justify-evenly gap-1 " >
                <div className="bg-[#98CE00]/60  w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60  w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/10  w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60  w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/10  w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00] w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60  w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/10  w-1 h-1 rounded-full"></div>
            </div>
            <div className="flex items-center justify-evenly gap-1 " >
                <div className="bg-[#98CE00]/10 w-1 h-1 rounded-full"></div>
                <div className="bg-[#98CE00]/60 w-1 h-1 rounded-full"></div>
                <div className="w-1 h-1 border-[1px] border-[#98CE00]/10 rounded-full"></div>
                <div className="w-1 h-1 border-[1px] border-[#98CE00] rounded-full"></div>
                <div className="w-1 h-1 border-[1px] border-[#98CE00]/10 rounded-full"></div>
                <div className="w-1 h-1 border-[1px] border-[#98CE00]/60 rounded-full"></div>
                <div className="w-1 h-1 border-[1px] border-[#98CE00]/10 rounded-full"></div>
                <div className="w-1 h-1 border-[1px] border-[#98CE00]/10 rounded-full"></div>
            </div> */