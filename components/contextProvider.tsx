"use client"
import { create } from "lodash"
import React,{createContext,useState} from "react"

const MyContext = createContext({
    isLoading:false,
    isTypingCompleted:false,
    setIsLoading:(prev:boolean)=>{},
    setIsTypingCompleted:(prev:boolean)=>{}
})

const MyProvider = ({children}) => {

    const [isLoading,setIsLoading] = useState(false)
    const [isTypingCompleted,setIsTypingCompleted] = useState(false)

    return(
        <MyContext.Provider value={{isLoading,isTypingCompleted,setIsLoading,setIsTypingCompleted}} >
            {children}
        </MyContext.Provider>
    )
}

export {MyContext,MyProvider}