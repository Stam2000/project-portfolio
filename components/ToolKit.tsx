import Dots from "./Dots"
import LogoDisplay from "./LogoDisplay"

const defaultColors=[
    { backgroundColor: "#D1D5DB" },
    { backgroundColor: "#000000" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#181818" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#98CE00" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.8)" }
  ]

const ToolKit =()=>{

    return(   
        <section className="bg-gradient-to-t from-black from-10% pt-16 to-[#0f0f0f] to-90% flex justify-center" > 

            <div className="flex flex-col z-50 rounded-xl shadow-sm shadow-white bg-gradient-to-b w-2/3 from-white from-60% to-[#f8fde8] overflow-hidden to-90% pt-12 max-h-[80%] max-w-auto px-48  text-black" >
            
                <h2 className="text-slate-950 relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-extrabold p-2 round" >
                    <span className="z-20" >
                        ToolKits
                    </span>
                    <Dots numberOfDotEachLine={7} 
                        width={4} height={4}  gapLine={1} className=" -bottom-4 z-0" absolute={false} colors={defaultColors} numberOfLine={2} />
                </h2>

                <p className="mt-6 text-md  font-oxygen text-gray-700 " >
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>

                <div className="mt-16 self-center w-3/4 mb-16" >
                    <LogoDisplay />
                </div> 
            </div>

        </section>
    )
}

export default ToolKit