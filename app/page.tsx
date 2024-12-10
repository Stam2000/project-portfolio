"use client"
import OverviewProjects from "../components/overviewProject";
import Dots from "@/components/dots"
import Dots2  from "@/components/dots-2"
import axios from "axios";
import Navbar from "@/components/navbar";
import { Chat } from "@/components/chat";
import {useState,useEffect,useMemo, useContext} from "react"
import { AIMessage,BaseMessage,HumanMessage } from "@langchain/core/messages"
import {zodSchemaGen, generateTailwindClasses} from "@/lib/utils"
import { MySvg,MySvg2,MySvg3,MySvg4,MySvg5,MySvg6,MySvg7 } from "@/components/SVG";
import {z} from "zod"
import React from "react";

import { Display } from "@/components/display";
import {useMediaQuery} from "react-responsive"

import ToolKit from "@/components/toolKit";
import { motion,useInView } from "framer-motion"
import { extractBackgroundColors } from "@/lib/utils";
import { shiftColors } from "@/lib/utils";
import { SelectModels } from "@/components/llmSelect";
import { v4 as uuidv4 } from 'uuid';
import { MyContext } from "@/components/contextProvider";
import {Loader2,Minimize2} from "lucide-react"
import { AnimatePresence } from "framer-motion";
import LayoutImages from "@/components/layoutGrid";
import DesignHeader from "@/components/designHeader";
import { useRef } from "react";
import {format} from 'date-fns'
import { GithubIcon } from "@/components/customIcon";
import { LinkedIcon } from "@/components/customIcon";


  type Role = "ai"|"user"
interface Message {
  id:string,
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

type ResGen = z.infer<typeof zodSchemaGen>

const MagicWand04Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"} {...props}>
    <path d="M10.9381 11.0774L3.41101 18.6045C2.863 19.1525 2.863 20.041 3.41101 20.589C3.95902 21.137 4.84752 21.137 5.39553 20.589L12.9226 13.0619M10.9381 11.0774L12.9226 13.0619M10.9381 11.0774L11.6823 10.3332M12.9226 13.0619L13.6668 12.3177M11.6823 10.3332L11.7248 10.2906C12.1124 9.90313 12.7406 9.90313 13.1281 10.2906L13.7094 10.8719C14.0969 11.2594 14.0969 11.8876 13.7094 12.2751L13.6668 12.3177M11.6823 10.3332L13.6668 12.3177" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M18.2377 3.16707C18.3416 2.94431 18.6584 2.94431 18.7623 3.16707L19.1541 4.00647C19.3266 4.37618 19.6238 4.67336 19.9935 4.84591L20.8329 5.23766C21.0557 5.34162 21.0557 5.65838 20.8329 5.76234L19.9935 6.15409C19.6238 6.32664 19.3266 6.62381 19.1541 6.99353L18.7623 7.83293C18.6584 8.05569 18.3416 8.05569 18.2377 7.83293L17.8459 6.99353C17.6734 6.62381 17.3762 6.32664 17.0065 6.15409L16.1671 5.76234C15.9443 5.65838 15.9443 5.34162 16.1671 5.23766L17.0065 4.84591C17.3762 4.67336 17.6734 4.37618 17.8459 4.00647L18.2377 3.16707Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M18.2377 14.1671C18.3416 13.9443 18.6584 13.9443 18.7623 14.1671L19.1541 15.0065C19.3266 15.3762 19.6238 15.6734 19.9935 15.8459L20.8329 16.2377C21.0557 16.3416 21.0557 16.6584 20.8329 16.7623L19.9935 17.1541C19.6238 17.3266 19.3266 17.6238 19.1541 17.9935L18.7623 18.8329C18.6584 19.0557 18.3416 19.0557 18.2377 18.8329L17.8459 17.9935C17.6734 17.6238 17.3762 17.3266 17.0065 17.1541L16.1671 16.7623C15.9443 16.6584 15.9443 16.3416 16.1671 16.2377L17.0065 15.8459C17.3762 15.6734 17.6734 15.3762 17.8459 15.0065L18.2377 14.1671Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7.23766 3.16707C7.34162 2.94431 7.65838 2.94431 7.76234 3.16707L8.15409 4.00647C8.32664 4.37618 8.62381 4.67336 8.99353 4.84591L9.83293 5.23766C10.0557 5.34162 10.0557 5.65838 9.83293 5.76234L8.99353 6.15409C8.62381 6.32664 8.32664 6.62381 8.15409 6.99353L7.76234 7.83293C7.65838 8.05569 7.34162 8.05569 7.23766 7.83293L6.84591 6.99353C6.67336 6.62381 6.37618 6.32664 6.00647 6.15409L5.16707 5.76234C4.94431 5.65838 4.94431 5.34162 5.16707 5.23766L6.00647 4.84591C6.37618 4.67336 6.67336 4.37618 6.84591 4.00647L7.23766 3.16707Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);


const defaultConfig: TailwindClassConfig = {
  backgroundOpacityLevels: [30,50,100],
  borderOpacityLevels: [20, 100],
  includeBorder: true,
  includeCircle:true,
};


const defC=[
  { backgroundColor: "#D1D5DB" },
  { backgroundColor: "#000000" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#181818" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.8)" }
]



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
  { backgroundColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.2)" },
  { borderWidth: "2px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.2)" }
]

export default function Home() { 

  
  const [modelGen,setModelGen] = useState<string>("gpt-4o-mini")
  const [modelFollow,setModelFollow] = useState<string>("gpt-4o-mini")
  const [modelChat,setModelChat] = useState<string>("gpt-4o-mini")
  const [idImg,setIdImg]=useState<string|null>(null)
  const [langHistory,setLangHistory] = useState<BaseMessage[]>([])
  const [isInitialContent,setIsInitialContent] = useState(true)
  const [currentLanguage,setCurrentLanguage]  = useState<ResGen>()
  const [chatMessage,setChatMessage] = useState<Message[]>([])
  const [borderColor,setBorderColor] = useState(["rgba(152,206,0,1)"])
  const [btnColor,setBtnColor] = useState([`rgba(152,206,0,1)`])
  const [btnShadow,setBtnShadow] = useState([`rgba(152,206,0,1)`])
  const [chatHistory,setChatHistory] = useState<BaseMessage[]>([])
  const [followQts,setFollowQts] = useState<{questions:string[]}>({questions:[]})
  const {isLoading,setIsLoading} = useContext(MyContext)

  const useRe = useRef(null)
  const isInView = useInView(useRe)

  const ca = useMemo(() => {
    return generateTailwindClasses(
      currentLanguage ? [...currentLanguage.colors] : ["#98CE00"],
      defaultConfig
    );
  }, [currentLanguage?.colors]);


  const handleReset = () =>{
    setChatHistory([])
    setChatMessage([])
    setLangHistory([])
    setFollowQts({questions:[]})
    setCurrentLanguage(undefined)
    setIsInitialContent(false)
  }

  const memoizedColors = useMemo(() => {
    return currentLanguage ? [...ca] : [...defColors];
  }, [ca]);

  const [shadowBox, setShadowBox] = useState([ '0px 0px 0px rgba(152,206,0,1)']);


const isMobile = useMediaQuery({ maxWidth:500 })
const isTablet = useMediaQuery({ maxWidth:768 })
const isSmallLaptop = useMediaQuery({ maxWidth:1024 })
const isLaptop = useMediaQuery({maxWidth:1280})
const isBigScreen = useMediaQuery({minWidth:1440})

useEffect(() => {
  const newBgColors = extractBackgroundColors(ca);
  const lastColor = shiftColors(shadowBox);
  const lastBg = shiftColors(borderColor);
  const lastBtColor = shiftColors(btnColor)



  setBorderColor([
    lastBg!,
    `${newBgColors[Math.floor(Math.random() * newBgColors.length)]}`,
  ])

  setBtnColor(
    [
      lastBtColor!,
      `${newBgColors[Math.floor(Math.random() * newBgColors.length)]}`,
    ]
  )
  setBtnShadow(
    [
      lastColor!,
      `0px 5px 10px ${newBgColors[Math.floor(Math.random() * newBgColors.length)]}`,
    ]
  ) 

  setShadowBox([
    lastColor!,
    `10px 15px 45px ${newBgColors[Math.floor(Math.random() * newBgColors.length)]}`,
  ]);



}, [ca]);


  async function handleSubmit() {
    setIsLoading(true)
    try {

        const {data:{message,followQts}} = await axios.post('/api/ai',
          {
            langHistory,
            chatHistory,
            modelGen,
            modelFollow
          }
        );
        setLangHistory(prev => [...prev,new HumanMessage("new"),new AIMessage(JSON.stringify(message))])
        setIsInitialContent(false)
        setCurrentLanguage(message)
        setFollowQts(followQts)
        
        setChatMessage(prev => {
          const newMessage: Message = {
            id: uuidv4(),
            role:"ai",
            content: message.description,
            funfact:message.funFact
          }
          
          return [...prev,newMessage]
        })

        setIsLoading(false)
    } catch (error) {
      
        console.error('Error making POST request:', error);

    }
    setIsLoading(false)
}

 
/*pt-24 md:pt-28 desk:pt-20 deskB:pt-24 */

return (
  <main>
      <AnimatePresence>
        {idImg && <motion.div         
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        onClick={()=>{setIdImg(null)}} className="top-5 bottom-5 left-5 right-5  md:top-10 md:bottom-10 md:left-10 bg-black overflow-hidden  md:right-10 z-[100] rounded-2xl fixed flex items-center justify-center" >
            <motion.div layoutId={idImg} >
                <span className="absolute right-4 top-4 hover:cursor-pointer text-white"><Minimize2/></span>
                <motion.img className={` object-cover `} src={`/${idImg}`}  alt={idImg}/>
            </motion.div>
        </motion.div>}
      </AnimatePresence> 
    <div className="relative md:h-lvh deskB:flex deskB:flex-col  deskB:justify-start ">
      <div className="py-8 " > 
        <div className="flex lg:ml-40 lg:gap-24  md:ml-10 md:gap-16 flex-col md:flex-row items-center justify-center md:w-fit" >
          <div className="text-white" >
            logo
          </div>
            <motion.button animate={{ 
                          borderColor:  borderColor ,
                          }}
                          whileHover={{scale:1.05}}
                          transition={{
                          boxShadow: {
                              duration: 5,
                              ease: "easeInOut",
                          },
                          borderColor: {
                              duration: 5, // Set your desired duration for borderColor
                              ease: "easeInOut",
                          },
                          }} className="relative flex items-center border bg-none rounded-full px-2 p-1 justify-center gap-1">
                      <a  className="z-50 font-nunito text-white bg-none text-[10px] md:text-sm font-light font-out left-1 text-nowrap" href="">
                          Advaible for work  | <span className="font-bold" >{format(new Date(),'MMMM yyyy')} - [Your Date Here]</span>
                      </a>   
                  </motion.button>
            </div>
      </div>
          
      <div className="flex items-center deskB:mt-12  md:max-h-[500px] md:h-[60%] flex-col md:flex-row  deskB:max-h-full ">
        <div className="flex w-full  justify-center md:w-[72%] lg:w-[70%] deskB:w-[70%] flex-col h-full ">  
          <motion.div 
            initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
            animate={{ 
              boxShadow:   shadowBox  , 
              borderColor:  borderColor ,
            }}
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
          
          className={`   md:overflow-x-hidden items-stretch flex-col-reverse relative 
              bg-gradient-to-l border-r-[10px] border-b-[10px]  border-[#98CE00]  
                from-white from-10%  to-[#efefef] flex  
              md:flex-row w-[90%]  md:w-full rounded-r-2xl md:h-[95%] desk:h-[80%] justify-stretch 
              gap-2
              `} >
              <DesignHeader /> 
              <div className="flex items-stretch justify-center w-full md:w-1/2 " > 
              <AnimatePresence mode="wait">
                  { currentLanguage ?
                  <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className="z-10 py-1 w-full"
                  >
                    <Chat
                      setFollowQts={setFollowQts}
                      followQts={followQts} 
                      langHistory={langHistory}
                      setCurrentLanguage={setCurrentLanguage} 
                      currentLanguage={currentLanguage} 
                      chatHistory={chatHistory} 
                      setChatHistory={setChatHistory} 
                      chatMessage={chatMessage} 
                      setChatMessage={setChatMessage} 
                      setLangHistory={setLangHistory} 
                      modelChat={modelChat}
                      modelGen={modelGen}
                      />
                  </motion.div>  : 
                  <motion.div
                    key={"layout-images"}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}

                    className=" flex flex-col   justify-center items-center"
                  > 
                    <span className="h-[5%] italic mt-2 font-zeyada text-lg font-bold" >because i love art 💚</span>
                    <LayoutImages setId={setIdImg} />
                  </motion.div> 
                }
              </AnimatePresence>   
              </div>  

          
            <div className="flex md:w-1/2 flex-col mix-blend-multiply gap-1 items-center text-center justify-center py-3  p-2 lg:mr-10 ">
            
              <Display isInitialContent={isInitialContent} colors={currentLanguage?.colors} translatedText={currentLanguage ? currentLanguage : undefined} />
            
              <div className=" flex flex-col  items-center justify-center" >
              <motion.button 
                animate={{
                  backgroundColor:  btnColor ,
                  boxShadow: btnShadow ,
                }}
                transition={{
                  duration:4
                }}
                disabled={isLoading}
                onClick={handleSubmit} className="w-44  bg-[#98CE00] p-1 flex items-center justify-center border-[1px] shadow-lg shadow-[#dcff7d] border-slate-500 rounded-md" >
                  <AnimatePresence mode="wait" >
                    {isLoading ? 
                    <motion.div
                      key={"Loader2"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{  opacity: 0 }} 
                    ><Loader2 className={`text-white animate-spin`} /></motion.div> : 
                    <motion.div
                    key={"magic"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{exit:{duration:0.1}}}
                      exit={{ opacity:0 }} 
                      className="flex items-center justify-center text-[12px] text-white gap-2"
                    >Click Me<MagicWand04Icon height={20} /></motion.div> }
                  </AnimatePresence>
                </motion.button>
                <div className="flex items-center  max-w-44 justify-center gap-2 mt-2" >
                  <button className="border p-[2px] h-8 rounded text-sm bg-white shadow-md w-full " onClick={handleReset} >
                    Reset
                  </button>
                  <SelectModels  setModelChat={setModelChat} setModelFollow={setModelFollow} setModelGen={setModelGen} />
                </div>
                
                <AnimatePresence mode="wait" >
              </AnimatePresence>
              </div>

            </div>  
          </motion.div>
        </div>
        <div className="relative flex items-center  justify-center flex-1">          
          {isMobile ? null:<Dots 
          
          numberOfDotEachLine={ isTablet ? 3 
                                            : isLaptop ? 5 
                                                            : 7}
          width={3}
          height={3}   
          gapBlock={1}
          gapLine={1}
          colors={ memoizedColors }  absolute={false}  
          numberOfLine={isTablet ? 24 
                                      : isSmallLaptop ? 28  
                                                        : isBigScreen ? 32 : 20 } />}
        </div>
      </div>
      <Navbar memoizedColors={memoizedColors} shadowBox={shadowBox} borderColor={borderColor} />
    </div>
    <ToolKit colors={ currentLanguage ? [...ca] : defaultColors} />
    <OverviewProjects />
    <section className="  flex flex-col px-8 lg:px-48 overflow-hidden  pt-4 md:pt-16 pb-28 md:pb-20  ">
      
      <div className="relative overflow-hidden bg-gradient-to-l border-r-[10px] border-b-[10px]  border-[#98CE00]   from-white from-10%  to-[#efefef]   flex rounded-2xl h-3/5 justify-end " >
          <div className="absolute h-full overflow-hidden w-full " >
            <MySvg7 className=" absolute  h-72" />
            
              <MySvg className="absolute h-8 top-[10%] left-1/2 " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg4 className="absolute h-16 top-[29%] opacity-75 right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg5 className="absolute h-16 top-[7%]  -right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg6 className="absolute h-5 top-[30%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-3 top-[38%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-2 top-[28%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg5 className="absolute h-3 top-[30%]  right-[10%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-8  bottom-[40%]  right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg3 className="absolute h-20  bottom-[7%]  right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg5 className="absolute h-12  bottom-[30%] opacity-80  right-[25%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="white" />
              <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-3  bottom-[38%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg3 className="absolute h-5  bottom-[28%] opacity-80  right-[40%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg2 className="absolute h-8  top-[1%]  right-[20%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg className="absolute h-4  top-[20%]  right-[16%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <MySvg4 className="absolute h-6  bottom-[1%]  right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
              <div className="absolute top-[32%] right-[20%] rounded-full bg-gray-100 h-[20px] w-[20px] " />
              <div className="absolute top-[14%] left-[36%] rounded-2xl rotate-[35deg] border-[10px] border-[#bcbcbc] h-[60px] w-[60px] " />
              <div className="absolute bottom-[50%] left-[50%] rounded-full bg-white h-[40px] w-[40px] " />
              <div className="absolute top-[8%] left-[54%] rounded-full bg-white h-[20px] w-[20px] " />     
              <div className="absolute bottom-[44%] left-[24%] rounded-lg -rotate-[15deg] border-[7px] border-[#ffffff] h-[35px] w-[35px] " />
              <div className="absolute bottom-[51%] left-[42%] rounded-full bg-white h-[10px] w-[10px] " />
              <div className="absolute bottom-[25%] left-[56%] rounded-full bg-white h-[7px] w-[7px] " />
              <div className="absolute bottom-[29%] left-[40%] rounded-full bg-white h-[28px] w-[28px] " />
              <div className="absolute -bottom-[35%] left-[20%] border-[60px]  border-[#e5e5e5]  rounded-full  h-[200px] w-[200px] " />
          </div>
            <div className=" py-8 flex flex-col mix-blend-multiply flex-1 gap-2  items-center text-center justify-center">
            <motion.h2
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{root:useRe,amount:0.5}}
            className="text-black relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-medium md:p-2 gap-1" >
            <span className="z-20" >
                About Me
            </span>
            <Dots2 numberOfDotEachLine={7} 
                width={4} height={4}  gapLine={1} className=" -bottom-4 z-0" absolute={false} colors={isInView ? [...defC]:defC} numberOfLine={2} />
        </motion.h2>
              <article className="mt-8 w-[90%] z-1000 font-nunito  text-gray-700 self-center text-md  text-justify" >
              <p className="mb-4 ">Hi there! 👋 I’m Manuel, a full-stack developer and AI engineer based in Berlin, currently studying Computer Engineering at TU Berlin. My journey into coding began with a passion for gaming and the realization that coding felt like wielding a superpower 🦸. </p>
                
                <p  className="mb-4" > The true turning point came when I decided to create apps that cater to my needs or solve everyday problems, even though I had no idea where to begin or what tools to use. This sparked my curiosity and led me to dive into coding, starting with Python, progressing to JavaScript, and eventually pursuing a career in AI engineering. Along the way, I’ve turned my ideas into reality and tackled meaningful challenges.</p>

              <p>Fast forward to today, I’ve come a long way! 🚀 I love blending creativity with technical skills to craft unique solutions. There’s still so much to learn, but every step forward is an adventure. If you’re up for collaborating or brainstorming cool ideas, let’s make something awesome together! 💡</p>
              </article>
              <div className="flex flex-col gap-2 items-center justify-center" >
                <button onClick={handleSubmit} className="w-44 mt-6 gap-2 bg-[#98CE00] p-3 flex items-center justify-center border-[1px] shadow-lg shadow-[#dcff7d] border-slate-500 rounded-md" >
                  <a className=" font-nunito font-bold text-white" href="mailto:manuel@sopmanuel.com" >
                    Contact Me
                  </a> 
                  <MagicWand04Icon />    
                </button>
                <div  className="grid grid-cols-2 gap-2" >
                  <a  href="https://github.com/Stam2000" ><GithubIcon width={35} height={35} color="black" className="custom-class" /></a>
                  <a  href="https://www.linkedin.com/in/manuel-sop-0905b9207" ><LinkedIcon width={35} height={35} color="black" className="custom-class" /></a>
                </div> 
              </div>
              
            </div>  
          </div>
    </section>
  </main>
  );
}
