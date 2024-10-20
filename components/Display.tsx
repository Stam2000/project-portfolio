import { TypeWritter } from "./TypeWritter"
import {z} from "zod"
import { translatedText } from "@/lib/utils"

 

type TranslatedText = z.infer<typeof translatedText>

type Props = {
    isInitialContent:boolean
    translatedText?: TranslatedText | undefined
}

export const Display = ({isInitialContent, translatedText}:Props) => {

    console.log(translatedText)



    return(
        <>
        {
            isInitialContent && !translatedText ? (
                <>
                    <span className="text-[#98CE00] pl-16 font-poiret-one -mb-2 font-semibold italic text-3xl self-start " >
                        Hello I'm Manuel, 
                    </span> 
                    <h1 className="text-5xl text-gray-900 mb-2 font-yeseva-one font-extrabold" >
                        <span className=" text-[#525252]" >
                            Full Stack
                        </span> AI Developer.
                    </h1>
                    <p className="text-lg mb-4 font-light text-gray-800 font-oxygen " >
                    I love exploring and creating 🚀 
                    I'm a lifelong learner 🎓 
                    and I might have a thing for traditional Neapolitan Pizza 🍕
                    </p>
                    <span>--人生は風前の灯火-- </span>
                    
                </>
                
            ):(
                <>
                    <TypeWritter 
                        text={translatedText!.name} 
                        component={"span"} 
                        className="text-[#98CE00] pl-16 font-poiret-one -mb-2 font-semibold italic text-3xl self-start"  
                    />
                    <h1 className="text-5xl text-gray-900 mb-2 font-yeseva-one font-extrabold" >
                        <TypeWritter 
                            text={translatedText!.fullStack} 
                            component={"span"} 
                            className="text-[#636363] pr-3"  
                        />
                        <TypeWritter 
                            text={translatedText!.AiDev} 
                            component={"span"} 
                        />
                    </h1>
                    <TypeWritter 
                        text={translatedText!.description} 
                        component={"p"} 
                        className="text-lg mb-4 text-gray-800 font-oxygen"  
                    />
                    <TypeWritter text="--人生は風前の灯火--" />
                </>
            )
        }
        </>
    )
}