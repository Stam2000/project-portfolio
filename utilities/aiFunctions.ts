import { RunnableSequence,RunnableLambda} from "@langchain/core/runnables"
import {ChatOpenAI} from "@langchain/openai"
import {ChatPromptTemplate,MessagesPlaceholder} from "@langchain/core/prompts"
import { DynamicStructuredTool } from "langchain/tools"
import { z } from "zod"
import { PromptTemplate } from "@langchain/core/prompts"
import { ChatMessageHistory } from "langchain/memory"
import { StringOutputParser ,StructuredOutputParser } from "@langchain/core/output_parsers"
import { AIMessage,BaseMessage,HumanMessage } from "@langchain/core/messages"
import { AgentExecutor, createToolCallingAgent } from "langchain/agents"
import {zodSchemaGen,zodSchemaChat} from "@/lib/utils"



const parserGenNew = StructuredOutputParser.fromZodSchema(zodSchemaGen)

const parserChatManager = StructuredOutputParser.fromZodSchema(zodSchemaChat)

const model = new ChatOpenAI({
    model:"gpt-4o-mini",
    apiKey:"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"
})




// responsible of generating the langage
/* ----------------------------------------------------------------- */
export const GenNewLg = async (langageHistory?:BaseMessage[])=>{

    const formatInstructions = `Respond only in valid JSON. The JSON object you return should match the following schema:

const zodSchema = z.object({
  nameOfLanguage: z.string().describe("Name of the language"),
  description: z.string().describe("Informative details about the language, including its origin, date of creation, and extinction if applicable"),
  translatedText: z.object({
      name:z.string().describe("text to be translated : Hello i'm Manuel"),
      fullStack:z.string().describe("text to translate : Full Stack"),
      AiDev:z.string().describe("text to translate: AI Developer"),
      description:z.string().describe("text to translate : I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕 ")
  }).describe("The translation of the given hero section text into the language"),
  funFact: z.string().describe("A fun fact about the language, culture, or population using this language"),
  colors: z.array(z.string()).describe("An array of colors in code (example #98CE00) representing the language’s culture, flag, or fictional setting"),
  languageHistory: z.object({
    spokenPeriod: z.string().describe("The time interval during which the language was or is spoken, e.g., '500 BCE - 400 CE' or 'still spoken today'"),
    region: z.string().describe("The region or regions where the language is or was spoken"),
    numberOfSpeakers: z.string().describe("The number of speakers, either currently if the language is still spoken, or historically if extinct"),
    isExtinct: z.boolean().describe("Whether the language is extinct or still in use"),
  }).describe("A detailed field containing historical and speaker information about the language"),
});;`

    const MEMORY_KEY = "chat_history"
    const SystemPrompt=
    `You are an AI assistant tasked with generating translation for each key of this object ----- 
      name:"text to be translate : Hello i'm Manuel",
      fullStack:"text to translate : Full Stack",
      AiDev:"text to translate: AI Developer",
      description:"text to translate : I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕 "----
      
     and cultural or fictional information (when fictional languages) for a hero section text. 
    The goal is to immerse users in different languages, sparking curiosity about the language and its background. 
    You will output responses in JSON format, adhering to the schema provided. 
    Some languages will be real and currently spoken, others may be extinct, and some will be inspired by science fiction or fantasy universes.

    
    For each language, you must:
    1. Provide a detailed description, including:
    - Origin date, the cultural or historical background, and if applicable, the date of extinction.
    - Provide an engaging description, focusing on what makes the language unique or interesting.
    2. Translate the hero section text into the chosen language. If certain words do not exist in the language, you may leave them in English.
    3. Add a or fun or amusing fact that gives users a deeper understanding or curiosity about the language, culture, or people who speak it.
    4. Generate an array of colors that best represent the language. These could relate to the flag, cultural symbolism,natural landscape, or even the fictional world the language comes from.
    5. Include a unified field that captures:
    - The period during which the language was or is spoken.
    - The region(s) where the language is or was spoken.
    - The number of speakers, either current or historical. If extinct, include the number at its peak or at the time of extinction.
    - Whether the language is extinct or still in use.


    The format of the JSON should be:
tags\n{format_instructions}

    `


    const memoryPrompt =await  ChatPromptTemplate.fromMessages([
        ["system",SystemPrompt],
        new MessagesPlaceholder(MEMORY_KEY),
        ["human","{input}"],
    ]).partial({
        format_instructions: formatInstructions,
      })
    
    const genLchain = RunnableSequence.from([
        {
            input : (i) => i.input,
            chat_history : (i) => i.chat_history 
        },
        memoryPrompt,
        model,
        parserGenNew
    ])

    const response = await genLchain.invoke({
        input:"let's us discover a new langage",
        chat_history : langageHistory ? langageHistory : []
    })
    
    console.log(response)

    return response
} 

/* ----------------------------------------------------------------- */
export const ChatManager = async ( {input,chatHistory,langHistory}: {input:string,chatHistory:BaseMessage[],langHistory:BaseMessage[]}) => {

  console.log(input)
    const MEMORY_KEY = "chat_history"
    const SystemPrompt=`
    You are an AI language assistant designed to help users explore and learn about new languages. Your primary function is to answer any follow-up questions the user might have about a language they are discovering. 
    You also have the ability to call a tool called "generate_language" to generate a new language for the user to explore.
    -**Immersion and Engagement:** Aim to immerse the user in the language experience. 
    Provide translations and cultural or fictional context to spark curiosity and deepen their connection with the language.
    - **Generating New Languages:** If the user requests a new language or if it becomes appropriate to introduce one, use the "generate_language" tool to generate and present a new language.
    - **Types of Languages:** Be prepared to discuss a variety of languages, including:
    - Real and currently spoken languages.
    - Extinct languages.
    - Fictional languages inspired by science fiction or fantasy universes.
    -**Note:** Ensure all information is accurate and enriches the user's exploration of the language.
    -**Response Format:** Always present your responses in JSON format, adhering strictly to the following format instructions:
      The format of the JSON should be:
      tags\n{format_instructions}

      
    `

const formatInstructions =`

Respond only in valid JSON following this JSON object schema: 

{
  outputFunctionCall:  z.object({
  nameOfLanguage: z.string().describe("Name of the language"),
  description: z.string().describe("Informative details about the language, including its origin, date of creation, and extinction if applicable"),
  translatedText: z.string().describe("The translation of the given hero section text into the language"),
  funFact: z.string().describe("A fun fact about the language, culture, or population using this language"),
  colors: z.array(z.string()).describe("An array of colors representing the language’s culture, flag, or fictional setting"),
  languageHistory: z.object({
    spokenPeriod: z.string().describe("The time interval during which the language was or is spoken, e.g., '500 BCE - 400 CE' or 'still spoken today'"),
    region: z.string().describe("The region or regions where the language is or was spoken"),
    numberOfSpeakers: z.string().describe("The number of speakers, either currently if the language is still spoken, or historically if extinct"),
    isExtinct: z.boolean().describe("Whether the language is extinct or still in use"),
  }).describe("A detailed field containing historical and speaker information about the language"),
}).nullable().describe("result of the call of the function generating the languages | null if no call occured"),


  output:output:z.string().describe("your response here")
}
    `


    const memoryPrompt = await  ChatPromptTemplate.fromMessages([
        ["system",SystemPrompt],
        new MessagesPlaceholder(MEMORY_KEY),
        ["human","{input}"],
        new MessagesPlaceholder("agent_scratchpad")
      ]).partial({
        format_instructions: formatInstructions,
    })

    const tools = [
        new DynamicStructuredTool({
            name: "generate_language",
            description: "Generates a new programming language with the given name and returns its details in JSON format.",
            schema: zodSchemaGen,
            func: async () =>{ const result = await GenNewLg(langHistory)
            return JSON.stringify(result);}
      }),
    ]

    const agent = await createToolCallingAgent({llm:model,tools,prompt:memoryPrompt})
    const agentExecutor  = new AgentExecutor({
        agent,
        tools,
    })

    const agentRunnable = new RunnableLambda({
        func: async ({ chat_history, input }:{
            input:string,
            chat_history:BaseMessage[]
        }) => {
          const resp = await agentExecutor.invoke({ chat_history, input });
          return resp.output;
        }
    });
      
    const chain = RunnableSequence.from([
        agentRunnable,
        parserChatManager
    ])
    
   const res = await chain.invoke({
        chat_history: chatHistory,
        input}
      );

      console.log(res)

    return res
}