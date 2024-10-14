import Image from "next/image";
import OverviewProjects from "../components/overviewProject";
import Dots from "@/components/dots";
import axios from "axios";




export default function Home() {

  async function postToDynamicRoute() {
    try {
        // Make sure to include the specific route segment
        const response = await axios.post('http://localhost:3000/api/ai', {
            newChat: true,  // Replace with your actual data
            question: 'What is the meaning of life?'  // Replace with your actual data
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error making POST request:', error);
    }
}



  return (
  <main>
    <div className="bg-gradient-to-tr from-black from-10%  to-[#0f0f0f] to-90% flex  flex-col h-lvh">
      <header className="flex px-2 py-5 items-center justify-between">
        <div className="flex text-white items-center gap-2">
          <button className="" >
            LOGO
          </button>
          <button>
            advaible
          </button>
        </div> 

        <a className="text-white" href="
        ">
          blog
        </a>
      </header>
      <div className="flex items-center  h-3/4 ">
      {/*----------------------------------------------------------------------------*/}
        <div className=" flex flex-[2] flex-col  justify-center h-full shadow-lg " >
        
        <span className="text-[#98CE00] font-poiret-one text-3xl self-end" >
          Hello I'm Manuel 
        </span> 
          <div className="bg-gradient-to-l from-white from-10%  to-[#e5e5e5] flex rounded-r-2xl h-2/3 justify-end py-4" >
            <div className="  h-full text-xs flex items-center font-extralight text-slate-700   self-center border-y-[1px] border-slate-300 " >
              <p>
                Latin was a classical language originally spoken by the ancient Romans.
                It emerged around the 7th century BCE and was widely used in literature, law, and scholarly work throughout the Roman Empire. 
              </p>
            </div>
          
            <div className=" self-center mr-10  text-center ">
            <Dots numberOfDotEachLine={7} absolute={false} numberOfLine={2} />
              <h1 className="text-5xl mb-2 font-roboto font-extrabold" >
                  Full Stack AI Developer
              </h1>
              <p className="text-2xl" >
                I love exploring and creating 🚀 
                I'm a lifelong learner 🎓 
                and I might have a thing for traditional Neapolitan Pizza 🍕
              </p>
              
            </div>
          </div>
        </div>
        {/*----------------------------------------------------------------------------*/}
        <div className="relative flex items-center  justify-center flex-1">          
          <Dots numberOfDotEachLine={10} absolute={true} numberOfLine={36} />
        </div>
      </div>
      <nav className=" flex flex-wrap mt-8 font-poiret-one items-center justify-evenly " >
      <Dots numberOfDotEachLine={8} absolute={false} numberOfLine={2} />
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white  text-xl font-bold font-out left-1 text-nowrap" href="">
              My ToolKits        
          </a>
          {/* <Dots numberOfDotEachLine={8} numberOfLine={4} /> */}
        </div>  
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white text-xl font-bold font-out left-1 text-nowrap" href="">
              My Project        
          </a>
          {/* <Dots numberOfDotEachLine={8} numberOfLine={4} /> */}
        </div>
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white text-xl font-bold font-out left-1 text-nowrap" href="">
            Contact Me      
          </a>
          {/* <Dots numberOfDotEachLine={8} numberOfLine={4} /> */}
        </div>
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white text-xl font-bold font-out left-1 text-nowrap" href="">
            About Me      
          </a>
          {/* <Dots numberOfDotEachLine={8} numberOfLine={4} /> */}
        </div>
      </nav>
    </div>
    
    <div className="bg-white px-48  space-y-4 text-black" >
      
        <h2 className="text-4xl pt-6" >
          ToolKits
        </h2>
        <p>
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
        desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
        </p>
        <p>
          DISPLAY LOGOS
        </p>
    </div>
    <div className="bg-slate-100 px-48 text-black " >
      <h2 className="text-4xl pt-6" >
          My Project
      </h2>
      <OverviewProjects />
    </div>
    <div className="bg-amber-100 px-48 text-black">
      <h2 className="text-4xl pt-6" >
          About
      </h2>
    </div>
    <div className="px-48 text-white">
      <h2 className="text-4xl pt-6" >
          Contact
      </h2>
    </div>
  </main>
  );
}
