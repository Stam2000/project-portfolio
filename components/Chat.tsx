"use client"
import { ScrollArea,ScrollBar } from "./ui/scroll-area"
import {useState} from "react"
import React from "react"
import axios from "axios"
import { AIMessage, BaseMessage, HumanMessage } from "@langchain/core/messages"


type Props = {
    setLangHistory : React.Dispatch<React.SetStateAction<BaseMessage[]>>,
    setChatMessage : React.Dispatch<React.SetStateAction<Message[]>>,
    langHistory : BaseMessage[],
    chatMessage : Message[],  
}

type Role = "ai"|"user"
interface Message {
  role:Role,
  content:string,
  funfact?:string
}

const SentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11.5 12.5L15 9" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Chat = ({setLangHistory,langHistory,chatMessage,setChatMessage}:Props)=>{
   


    const [inputValue,setInput] = useState<string>("")
    const [chatHistory,setChatHistory] = useState<BaseMessage[]>([])
    console.log(chatMessage)
    console.log(chatHistory)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setInput(e.target.value)
  }

  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setInput("")

    const i = inputValue

    setChatHistory(
        prev => [...prev, new HumanMessage(i)]
    )

    setChatMessage(prev => {
      const newMessage: Message = {
        role:"user",
        content: i
      }
      return [...prev,newMessage]
    })

    try {

        
        const {data:{response}} = await axios.post('http://localhost:3000/api/chat', {     
            input:i,
            chatHistory,
            langHistory
        });

          if(response.outputFunctionCall){
            //call Text updater

            setLangHistory(prev => [...prev,new HumanMessage("new"),new AIMessage(JSON.stringify(response.outputFunctionCall))])

            setChatHistory(
                prev => [...prev, new AIMessage(JSON.stringify(response.outputFunctionCall))]
            )
            setChatMessage(prev => {
              const newMessage: Message = {
                role:"ai",
                content: response.output,
                funfact:response.outputFunctionCall.funfact
              }
              return [...prev,newMessage]
            })
          }else{

            setChatHistory(
                prev => [...prev, new AIMessage(response.output)]
            )
            setChatMessage(prev => {
            const newMessage: Message = {
              role:"ai",
              content: response.output
            }
          return [...prev,newMessage]
          })
        }
          
          console.log(response)

        

        
    } catch (error) {
        console.error('Error making POST request:', error);
        setInput("")
    }
}

    const ChatMessage = ({message}:{message:Message})=>{

 
            return(
                <div className={` ${message.role==="ai" ? `bg-gray-900 mb-4 p-2 w-fit font-nunito font-medium 
                    text-white/90 text-sm txt 
                    border-slate-900 rounded-b-xl rounded-tr-xl` 
                                        :
                    `bg-gray-300 mb-4 p-1 font-nunito text-sm 
                    font-medium  self-center w-fit text-gray-950 border-slate-900 
                    rounded-b-xl rounded-tl-xl `
                     }`}>
                    {message.content}
                </div>
            )
    }

    return(
      <div className=" relative w-full pt-2 h-full " >
        <ScrollArea className=" relative flex flex-col h-[calc(100%-95px)] rounded-md w-full  px-2  ">
               {
                chatMessage.map((message,idx) =>( <ChatMessage key={idx} message={message} /> ))
               }
                  
        </ScrollArea>
        <div className="absolute w-full px-4 bottom-1" >
                    
                    <form onSubmit={handleSubmit} action="">
                        <ScrollArea className="rounded-md px-1 " >
                      <div className="flex pb-3 gap-1 px-1 whitespace-nowrap" >
                            <button className="border-[2px] text-sm font-medium font-oxygen w-fit border-slate-600 text-slate-700 px-1 rounded-sm" >
                                  New Language
                              </button>
                              <button className="border-[2px] text-sm font-medium font-oxygen w-fit border-slate-600 text-slate-700 px-1 rounded-sm" >
                                  Latin was a classical language originally spoken by the ancient Romans.
                              </button>
                        </div>
                            
                            <ScrollBar className="bg-slate-300" orientation="horizontal" />
                        </ScrollArea>
                        <div className="flex border-b-[1px] items-center border-slate-700" >
                            <input
                                value={inputValue}
                                onChange={handleChange} 
                                className="text-black font-nunito text-lg font-medium w-full bg-transparent h-8 px-4" 
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
}