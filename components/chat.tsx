"use client"
import { ScrollArea,ScrollBar } from "./ui/scroll-area"
import {useState,useCallback,useMemo,useContext} from "react"
import React from "react"
import axios from "axios"
import {z} from "zod"
import { AIMessage, BaseMessage, HumanMessage } from "@langchain/core/messages"
import { zodSchemaGen } from "@/lib/utils"
import {motion}  from "framer-motion"
import { TypeWritter } from "./typeWritter"
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from "framer-motion"
import { MyContext } from "./contextProvider"



type ResGen = z.infer<typeof zodSchemaGen>
type Props = {
    setLangHistory : React.Dispatch<React.SetStateAction<BaseMessage[]>>,
    setChatMessage : React.Dispatch<React.SetStateAction<Message[]>>,
    chatHistory: BaseMessage[],
    setChatHistory: React.Dispatch<React.SetStateAction<BaseMessage[]>>, 
    langHistory : BaseMessage[],
    chatMessage : Message[],
    setFollowQts:React.Dispatch<React.SetStateAction<{questions:string[]}>>
    setCurrentLanguage:  React.Dispatch<React.SetStateAction<ResGen|undefined>>,
    currentLanguage:ResGen|undefined,
    followQts:{questions:string[]},
    modelChat:string,
    modelGen:string
}

type Role = "ai"|"user"
interface Message {
  id:string,
  role:Role,
  content:string,
  funfact?:string
}

const SentIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.5 12.5L15 9" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));

export const Chat =React.memo(({setLangHistory,langHistory,chatMessage,setChatMessage,chatHistory,setChatHistory,currentLanguage,setCurrentLanguage,setFollowQts,modelChat,modelGen,followQts}:Props)=>{
   
    const [inputValue,setInput] = useState<string>("")
    const {isTypingCompleted,isLoading} = useContext(MyContext)
    console.log(isTypingCompleted)
    console.log(isLoading)

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    }, []);

    

    const sendMessage = useCallback(async (message: string) => {
      setInput("");
      setChatHistory(prev => [...prev, new HumanMessage(message)]);
      
      setChatMessage(prev => [...prev, {
        id: uuidv4(),
        role: "user",
        content: message
      }]);
  
      try {
        const { data: { response, followQts: newFollowQts } } = await axios.post(
          "/api/chat",
          { input: message, chatHistory, langHistory,modelChat,modelGen }
        );
  
        setFollowQts(newFollowQts);
  
        if (response.outputFunctionCall) {

          setCurrentLanguage(response.outputFunctionCall)
          setLangHistory(prev => [
            ...prev,
            new HumanMessage("discover new language"),
            new AIMessage(JSON.stringify(response.outputFunctionCall))
          ]);
  
          setChatHistory(prev => [
            ...prev,
            new AIMessage(JSON.stringify(response.outputFunctionCall))
          ]);
  
          setChatMessage(prev => [...prev, {
            id: uuidv4(),
            role: "ai",
            content: response.outputFunctionCall.description,
            funfact: response.outputFunctionCall.funFact
          }]);
        } else {
          setChatHistory(prev => [...prev, new AIMessage(response.output)]);
          setChatMessage(prev => [...prev, {
            id: uuidv4(),
            role: "ai",
            content: response.output
          }]);
        }
      } catch (error) {
        console.error("Error making POST request:", error);
        setInput("");
      }
    }, [chatHistory, langHistory, setChatHistory, setChatMessage, setFollowQts, setLangHistory]);
  
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      await sendMessage(inputValue);
    }
  }, [inputValue, sendMessage]);

  const handleQuestionClick = useCallback(async (question: string) => {
    await sendMessage(question);
  }, [sendMessage]);

  
  const questionButtons = useMemo(() => 
    followQts.questions.map((question, index) => (
      <button
        key={index}
        type="button"
        onClick={() => handleQuestionClick(question)}
        className="border-[2px] text-[16px] font-medium font-oxygen w-fit border-slate-600 text-slate-700 px-2 rounded-sm"
      >
        {question}
      </button>
    )),
    [followQts.questions, handleQuestionClick]
  );


    const messages = useMemo(() => 
      chatMessage.map(message =>{ 
        return(
               <motion.div
                  key={message.id}
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                
                className={` ${message.role==="ai" ? `bg-gray-900 z-10  p-3 font-nunito font-medium 
                    text-white/90 text-sm txt 
                    border-slate-900 rounded-b-xl rounded-tr-xl` 
                                        :
                    `bg-gray-300 p-1 font-nunito text-sm
                    self-end 
                    font-medium  w-fit text-gray-950 border-slate-900 
                    rounded-b-xl rounded-tl-xl `
                     }`}>
                      <TypeWritter  text={message.content} className="z-10" speed={1} /> 
                    {/* {message.content} */}
                    { message.funfact &&
                      <div className="  bg-gray-200 mt-2 z-10 text-slate-950 p-3 rounded-md" >
                        <span className="font-nunito block mb-1 font-bold text-sm ">Interesting Fact 💡</span>
                        <span className="italic" >
                        <TypeWritter  text={message.funfact} delay={8000} speed={1} />
                        </span>
                      </div>
                    }
                </motion.div>
      )}),
      [chatMessage]
    );
  

    return(
      <div className=" relative w-full z-10 pt-2 h-[400px]  md:h-full " >
        <ScrollArea className="gap-4 h-[calc(100%-95px)] rounded-md w-full  px-2  ">
          <AnimatePresence initial={false} >
            <div className="flex flex-col gap-4 px-1" >
              {messages}
            </div>
          </AnimatePresence>  
        </ScrollArea>
        <div className="absolute w-full px-4 bottom-1" >
                    
                    <form onSubmit={handleSubmit} action="">
                        <ScrollArea className="rounded-md px-1 " >
                      <div className="flex pb-3 gap-1 px-1 whitespace-nowrap" >
                        <button type="button" onClick={()=> handleQuestionClick(`let me discover a new language^!`)} className="border-[2px] text-[16px] font-medium font-oxygen w-fit border-slate-600 text-slate-700 px-2 rounded-sm" >
                            new language
                        </button>
                        {
                          questionButtons
                        }
                        </div>
                            
                            <ScrollBar className="bg-slate-300" orientation="horizontal" />
                        </ScrollArea>
                        <div className="flex border-b-[1px] items-center  border-slate-700" >
                            <input
                                value={inputValue}
                                onChange={handleChange} 
                                className="text-black  font-nunito text-lg font-medium w-full bg-transparent h-8 px-4" 
                                placeholder="Enter text here" 
                                type="text" 
                            />
                            <div className="p-1" >
                            <button type="submit" >
                                <SentIcon className="size-7 text-gray-700" />
                            </button> 
                            </div>
                        </div>           
                    </form>
                  </div>
      </div>
        
    )
})