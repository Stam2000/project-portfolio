"use client"
import { LayoutGrid } from "@/components/ui/layout-grid";
import OverviewProjects from "../components/OverviewProject";
import Dots from "@/components/Dots"
import axios from "axios";
import { Chat } from "@/components/Chat";
import {useState} from "react"
import { AIMessage,BaseMessage,HumanMessage } from "@langchain/core/messages"
import {zodSchemaGen,zodSchemaChat, generateTailwindClasses} from "@/lib/utils"
import { MySvg,MySvg2,MySvg3,MySvg4,MySvg5,MySvg6,MySvg7 } from "@/components/SVG";
import {z} from "zod"
import React from "react";
import { Display } from "@/components/Display";
import DiagonalLines from "@/components/LineComponent";
import ToolKit from "@/components/ToolKit";





  type Role = "ai"|"user"
interface Message {
  role:Role,
  content:string,
  funfact?:string
}
interface TailwindClassConfig {
  backgroundOpacityLevels?: number[]; // Par exemple, [20, 50, 80]
  borderOpacityLevels?: number[];     // Par exemple, [10, 90]
  includeBorder?: boolean;            // Par défaut : true
  includeCircle?: boolean;            // Par défaut : false
}

type ResChat = z.infer<typeof zodSchemaChat>
type ResGen = z.infer<typeof zodSchemaGen>

const MagicWand04Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} {...props}>
    <path d="M10.9381 11.0774L3.41101 18.6045C2.863 19.1525 2.863 20.041 3.41101 20.589C3.95902 21.137 4.84752 21.137 5.39553 20.589L12.9226 13.0619M10.9381 11.0774L12.9226 13.0619M10.9381 11.0774L11.6823 10.3332M12.9226 13.0619L13.6668 12.3177M11.6823 10.3332L11.7248 10.2906C12.1124 9.90313 12.7406 9.90313 13.1281 10.2906L13.7094 10.8719C14.0969 11.2594 14.0969 11.8876 13.7094 12.2751L13.6668 12.3177M11.6823 10.3332L13.6668 12.3177" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M18.2377 3.16707C18.3416 2.94431 18.6584 2.94431 18.7623 3.16707L19.1541 4.00647C19.3266 4.37618 19.6238 4.67336 19.9935 4.84591L20.8329 5.23766C21.0557 5.34162 21.0557 5.65838 20.8329 5.76234L19.9935 6.15409C19.6238 6.32664 19.3266 6.62381 19.1541 6.99353L18.7623 7.83293C18.6584 8.05569 18.3416 8.05569 18.2377 7.83293L17.8459 6.99353C17.6734 6.62381 17.3762 6.32664 17.0065 6.15409L16.1671 5.76234C15.9443 5.65838 15.9443 5.34162 16.1671 5.23766L17.0065 4.84591C17.3762 4.67336 17.6734 4.37618 17.8459 4.00647L18.2377 3.16707Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M18.2377 14.1671C18.3416 13.9443 18.6584 13.9443 18.7623 14.1671L19.1541 15.0065C19.3266 15.3762 19.6238 15.6734 19.9935 15.8459L20.8329 16.2377C21.0557 16.3416 21.0557 16.6584 20.8329 16.7623L19.9935 17.1541C19.6238 17.3266 19.3266 17.6238 19.1541 17.9935L18.7623 18.8329C18.6584 19.0557 18.3416 19.0557 18.2377 18.8329L17.8459 17.9935C17.6734 17.6238 17.3762 17.3266 17.0065 17.1541L16.1671 16.7623C15.9443 16.6584 15.9443 16.3416 16.1671 16.2377L17.0065 15.8459C17.3762 15.6734 17.6734 15.3762 17.8459 15.0065L18.2377 14.1671Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7.23766 3.16707C7.34162 2.94431 7.65838 2.94431 7.76234 3.16707L8.15409 4.00647C8.32664 4.37618 8.62381 4.67336 8.99353 4.84591L9.83293 5.23766C10.0557 5.34162 10.0557 5.65838 9.83293 5.76234L8.99353 6.15409C8.62381 6.32664 8.32664 6.62381 8.15409 6.99353L7.76234 7.83293C7.65838 8.05569 7.34162 8.05569 7.23766 7.83293L6.84591 6.99353C6.67336 6.62381 6.37618 6.32664 6.00647 6.15409L5.16707 5.76234C4.94431 5.65838 4.94431 5.34162 5.16707 5.23766L6.00647 4.84591C6.37618 4.67336 6.67336 4.37618 6.84591 4.00647L7.23766 3.16707Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);



export default function Home() { 



const config: TailwindClassConfig = {
  backgroundOpacityLevels: [20, 50, 80],
  borderOpacityLevels: [20, 90],
  includeBorder: true,
  includeCircle: true,
};

  const [langHistory,setLangHistory] = useState<BaseMessage[]>([])
  const [isInitialContent,setIsInitialContent] = useState(true)
  const [currentLanguage,setCurrentLanguage]  = useState<ResGen>()
  const [chatMessage,setChatMessage] = useState<Message[]>([])
  const defaultColors=[
  { backgroundColor: "#D1D5DB" },
  { backgroundColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.2)" },
  { borderWidth: "1px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "1px", borderColor: "rgba(152, 206, 0, 0.2)" }
]

const defColors=[
  { backgroundColor: "#D1D5DB" },
  { backgroundColor: "#000000" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#181818" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.8)" }
]
  console.log(currentLanguage) 

  const ca =  generateTailwindClasses(
    currentLanguage ? [...currentLanguage.colors] : ["#98CE00"],
    config
  );


  async function handleSubmit() {

    try {

        const {data:{message}} = await axios.post('http://localhost:3000/api/ai',
          {
            langHistory
          }
        );
        setLangHistory(prev => [...prev,new HumanMessage("new"),new AIMessage(JSON.stringify(message))])
        setIsInitialContent(false)
        setCurrentLanguage(message)
        setChatMessage(prev => {
          const newMessage: Message = {
            role:"ai",
            content: message.description,
            funfact:message.funfact
          }
          return [...prev,newMessage]
        })
        console.log(message)

    } catch (error) {

        console.error('Error making POST request:', error);

    }
}
 

return (
  <main> 
    <div className="relative overflow-x-clip bg-gradient-to-b  from-black from-10% pt-16 to-[#0f0f0f] to-90% flex  flex-col h-lvh">
    <div className="absolute -bottom-[225px] -right-[225px] border-[80px]  border-[#2b2b2b]  rounded-full  size-[400px] " />
    <div className="absolute -top-[250px] -right-[240px] border-[20px]  border-[#131313]  rounded-full  size-[400px] " />
    <DiagonalLines 
  width={150} 
  height={400} 
  lineSpacing={25}
  className=" rounded-lg opacity-5 shadow-md" 
/>
<div className="absolute top-[0%] left-[1%] rounded-[200px] rotate-[35deg] border-[100px] border-[#0d0d0d] size-[700px] " />
<div className="absolute top-[34%] left-[40%] shadow-lg shadow-slate-black rounded-[150px] rotate-[35deg] border-[100px] border-[#1c1c1c]/20 size-[700px] " />
      {/* <div className="flex h-8" >
            <MySvg primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
            <MySvg2 primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="white" opacity={0.5} />
            <MySvg3 primaryColor="#ffcc00" secondaryColor="#00ffcc" tertiaryColor="#ffffff" opacity={0.5} />
            <MySvg4 primaryColor="#ffcc00" secondaryColor="#00ffcc" tertiaryColor="#ffffff" opacity={0.5} />
            <MySvg5 primaryColor="#ffcc00" secondaryColor="#00ffcc" tertiaryColor="#ffffff" opacity={0.5} />
            <MySvg6 primaryColor="#ffcc00" secondaryColor="#00ffcc" tertiaryColor="#ffffff" opacity={0.5} />
      </div> */}

      <div className="flex items-center  h-3/4 ">
      {/*----------------------------------------------------------------------------*/}
        <div className=" flex flex-[2] flex-col   h-full " >
        
        <header className="flex px-2  w-2/5 mb-10 rounded-2xl py-5 items-center justify-between">
        <div className="flex  text-white items-center gap-2">
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

        <span className="text-[#98CE00]  font-extralight text-sm self-end" >
            <div>人生は風前の灯火</div> 
            
        </span> 
          <div className="relative bg-gradient-to-l border-r-[10px] border-b-[10px]  border-[#98CE00] shadow-2xl shadow-[#98CE00]  from-white from-10%  to-[#efefef]   flex rounded-r-2xl h-3/5 justify-end pl-4" >
          <div className="absolute h-full overflow-hidden w-full " >
            <MySvg7 className=" absolute  h-72" />
            {/* Right */}
              <MySvg className="absolute h-8 top-[10%] left-1/2 " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg4 className="absolute h-16 top-[29%] opacity-75 right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              {/* <MySvg className="absolute h-8 top-[10%] left-1/2 " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg4 className="absolute h-16 top-[29%] opacity-75 right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
              {/* Group 1*/}
              <MySvg5 className="absolute h-16 top-[7%]  -right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg6 className="absolute h-5 top-[30%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-3 top-[38%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-2 top-[28%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg5 className="absolute h-3 top-[30%]  right-[10%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              {/* <MySvg5 className="absolute h-16 top-[7%]  -right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg6 className="absolute h-5 top-[30%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-3 top-[38%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-2 top-[28%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg5 className="absolute h-3 top-[30%]  right-[10%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
              {/*Group 1 end*/}
              <MySvg className="absolute h-8  bottom-[40%]  right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg3 className="absolute h-20  bottom-[7%]  right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              {/* <MySvg className="absolute h-8  bottom-[40%]  right-[5%] " primaryColor="white" secondaryColor="yellow" tertiaryColor="#bcbcbc" />
              <MySvg3 className="absolute h-20  bottom-[7%]  right-[5%] " primaryColor="white" secondaryColor="red" tertiaryColor="#bcbcbc" /> */}
              {/*Group 2 */}
              <MySvg5 className="absolute h-12  bottom-[30%] opacity-80  right-[25%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="white" />
              <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-3  bottom-[38%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg3 className="absolute h-5  bottom-[28%] opacity-80  right-[40%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              {/* <MySvg5 className="absolute h-12  bottom-[30%] opacity-80  right-[25%] " primaryColor="white" secondaryColor="green" tertiaryColor="white" />
              <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-3  bottom-[38%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg3 className="absolute h-5  bottom-[28%] opacity-80  right-[40%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
              {/*Group 3 */}
              <MySvg2 className="absolute h-8  top-[1%]  right-[20%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-4  top-[20%]  right-[16%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg4 className="absolute h-6  bottom-[1%]  right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <div className="absolute top-[32%] right-[20%] rounded-full bg-gray-100 h-[20px] w-[20px] " />
              {/* <MySvg2 className="absolute h-8  top-[1%]  right-[20%] " primaryColor="white" secondaryColor="brown" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-4  top-[20%]  right-[16%] " primaryColor="white" secondaryColor="brown" tertiaryColor="#bcbcbc" />
              <MySvg4 className="absolute h-6  bottom-[1%]  right-[30%] " primaryColor="white" secondaryColor="brown" tertiaryColor="#bcbcbc" />
              <div className="absolute top-[32%] right-[20%] rounded-full bg-gray-100 h-[20px] w-[20px] " /> */}
            {/* Right end */}  

              {/*CARREE gris tout en haut du cercle Input */}
              
              <div className="absolute top-[14%] left-[36%] rounded-2xl rotate-[35deg] border-[10px] border-[#bcbcbc] h-[60px] w-[60px] " />
              {/*Cercle*/}
              {/* TODO modify z-index */}
              <div className="absolute bottom-[50%] left-[50%] rounded-full bg-white h-[40px] w-[40px] " />
              {/*Cercle*/}

              <div className="absolute top-[8%] left-[54%] rounded-full bg-white h-[20px] w-[20px] " />
              {/*CARREE */}

              <div className="absolute bottom-[44%] left-[24%] rounded-lg -rotate-[15deg] border-[7px] border-[#ffffff] h-[35px] w-[35px] " />
              {/*Cercle*/}
              
              <div className="absolute bottom-[51%] left-[42%] rounded-full bg-white h-[10px] w-[10px] " />
              {/*Cercle*/}
              
              <div className="absolute bottom-[25%] left-[56%] rounded-full bg-white h-[7px] w-[7px] " />
              {/*Cercle  */}
              <div className="absolute bottom-[29%] left-[40%] rounded-full bg-white h-[28px] w-[28px] " />
              {/*Cercle bottom input*/}
              <div className="absolute -bottom-[35%] left-[20%] border-[60px]  border-[#e5e5e5]  rounded-full  h-[200px] w-[200px] " />
          </div>
            <div className=" px-2  h-full text-xs flex flex-1 items-center font-extralight  self-center " >
              <div className="h-full  w-full" > 
                <Chat langHistory={langHistory} chatMessage={chatMessage} setChatMessage={setChatMessage} setLangHistory={setLangHistory} />
                  {/* <LayoutGrid cards={cards} /> */}
              </div>
            
            </div>
          
            <div className=" flex flex-col mix-blend-multiply flex-1 gap-2 items-center text-center justify-center mr-10 ">
              <Display isInitialContent={isInitialContent} translatedText={currentLanguage ? currentLanguage!.translatedText : undefined} />
              <button onClick={handleSubmit} className="w-44 mt-2 bg-[#98CE00] p-1 flex items-center justify-center border-[1px] shadow-lg shadow-[#dcff7d] border-slate-500 rounded-md" >
                <MagicWand04Icon />
                
              </button>
            </div>  
          </div>
        </div>
        {/*----------------------------------------------------------------------------*/}
        <div className="relative flex items-center  justify-center flex-1">          
          {<Dots 
          key={JSON.stringify(currentLanguage?.colors)} 
          numberOfDotEachLine={8}
          width={3}
          height={3}   
          gapBlock={1}
          gapLine={1}
          colors={ currentLanguage ? [...ca] : defaultColors}  absolute={false}  numberOfLine={36} />}
        </div>
      </div>
      <nav className=" flex flex-wrap mt-16 font-poiret-one items-center justify-evenly " >
        <div className="" >
          <Dots numberOfDotEachLine={6} 
                width={3} height={3}     absolute={false} colors={ currentLanguage ? [...ca] : defaultColors} numberOfLine={2} />
        </div>
      
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white  text-2xl font-bold border-[1px] p-1 rounded-md font-out left-1 text-nowrap" href="">
              My ToolKits        
          </a>
        </div>  
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 border-[1px] p-1 rounded-md text-white text-2xl font-bold font-out left-1 text-nowrap" href="">
              My Project        
          </a>
          {/* <Dots numberOfDotEachLine={8} numberOfLine={4} /> */}
        </div>
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white border-[1px] p-1 rounded-md text-2xl font-bold font-out left-1 text-nowrap" href="">
            Contact Me      
          </a>
        </div>
        <div className="relative flex items-center justify-center gap-1">
          <a className="z-50 text-white border-[1px] p-1 rounded-md  text-2xl font-bold font-out left-1 text-nowrap" href="">
            About Me      
          </a>
          {/* <Dots numberOfDotEachLine={8} numberOfLine={4} /> */}
        </div>
      </nav>
      
    </div>
    <ToolKit />
    <OverviewProjects />
    <section className="flex flex-col px-48  bg-[#0f0f0f]  overflow-hidden  pt-16 pb-20  ">
      <h2 className="text-white relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-medium p-2 gap-1" >
          <span className="z-20" >
              About
          </span>
          <Dots numberOfDotEachLine={7} 
                width={4} height={4}  gapLine={1} className=" -bottom-4 z-0" absolute={false} colors={defColors} numberOfLine={2} />
      </h2>
      <p className="mt-8 w-2/3 text-white self-center text-xl  text-center" >
        I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.
      </p>
      
    </section>
  </main>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* bg-gradient-to-l from-white from-10%  to-[#e7e7e7] bg-[url('/26669.jpg')] bg-repeat bg-[url('/26669.jpg')] bg-cover*/