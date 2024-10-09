import Image from "next/image";
import OverviewProjects from "../components/overviewProject";

export default function Home() {
  return (
  <main>
    <div className=" h-lvh">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="" >
            LOGO
          </button>
          <button>
            advaible
          </button>
        </div> 

        <a href="
        ">
          blog
        </a>
      </header>
      <div className="bg-white mx-auto px-64 mr-64 rounded-r-2xl py-10 text-black mt-40" >
          I,m Manuel a Full Stack Web Dev
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
          desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
          No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. 
          Fue popularizado en los 60s con la
      </div>

      <nav className="flex mt-20  items-center justify-center gap-32" >
        <a href="">
          My ToolKits
        </a>
        <a href="">
          My Project
        </a>
        <a href="">
          Contact Me
        </a>
        <a href="">
          About Me
        </a>
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
