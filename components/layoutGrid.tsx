"use state"
import { motion,AnimatePresence } from "framer-motion";
import { useState,useEffect, Dispatch } from "react";
import { shuffle,take } from "lodash";
import { Minimize2 } from "lucide-react";

const LayoutImages = ({setId}:{setId:React.Dispatch<React.SetStateAction<string|null>>})=>{


    const images = [
        {src:"26669"},
        {src:"bg"},
        {src:"bg2"},
        {src:"bg3"},
    ]

    const setIdFunc = (e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        const selectedId = e.currentTarget.id
        setId(selectedId)
    }

    return(
        <>
            <div className=" lg:ml-4 z-50 h-full  md:h-[70%] w-[90%] md:w-full py-4 grid grid-rows-4 grid-cols-7  grid-flow-col gap-2 md:gap-4">
                <motion.div layoutId={images[0].src} id={images[0].src}onClick={(e)=>{setIdFunc(e)}} className="row-span-2 overflow-hidden col-span-4 bg-slate-200 hover:cursor-pointer rounded-xl">{/* <motion.img className={` w-full h-full `} src={`/${images[0].src}.jpg`}  alt={"26669"}/> */}</motion.div>
                <motion.div layoutId={images[1].src} id={images[1].src} onClick={(e)=>{setIdFunc(e) }} className="col-span-3 row-span-2 overflow-hidden bg-slate-200 hover:cursor-pointer rounded-xl">{/* <motion.img className={`w-full h-full `} src={`/${images[1].src}.jpg`}  alt={`${images[1].src}`}/> */}</motion.div>
                <motion.div layoutId={images[2].src} id={images[2].src} onClick={(e)=>{setIdFunc(e) }}  className="row-span-2 col-span-4 overflow-hidden bg-slate-200 hover:cursor-pointer rounded-xl">{/* <motion.img className={`w-full  h-full `} src={`/${images[2].src}.jpg`}  alt={`${images[2].src}`}/> */}</motion.div>
                <motion.div layoutId={images[3].src} id={images[3].src} onClick={(e)=>{setIdFunc(e) }} className="row-span-2 col-span-3 overflow-hidden bg-slate-200 hover:cursor-pointer rounded-xl">{/* <motion.img  className={`w-full h-full `} src={`/${images[3].src}.jpg`}  alt={`${images[3].src}`}/> */}</motion.div>
            </div> 
        </>
        
        )
}

export default LayoutImages;