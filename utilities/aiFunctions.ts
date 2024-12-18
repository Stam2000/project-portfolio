import { RunnableSequence, RunnableLambda } from "@langchain/core/runnables";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { DynamicStructuredTool } from "langchain/tools";
import { z } from "zod";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { AIMessage, BaseMessage, HumanMessage } from "@langchain/core/messages";
import { AgentExecutor, createToolCallingAgent } from "langchain/agents";
import { zodSchemaGen, zodSchemaChat } from "@/lib/utils";
import { extractJSON } from "@/lib/utils";
import { getModelInstance } from "@/lib/utils";

const parserGenNew = StructuredOutputParser.fromZodSchema(zodSchemaGen);

const parserChatManager = StructuredOutputParser.fromZodSchema(zodSchemaChat);

const parserFollowUp = StructuredOutputParser.fromZodSchema(
  z.object({
    questions: z
      .array(z.string().describe("follow up question"))
      .describe("c'et un array contenant les follow up questions"),
  }),
);

// responsible of generating the langage
/* ----------------------------------------------------------------- */
export const GenNewLg = async (
  modelGen: string,
  langageHistory?: BaseMessage[],
) => {
  const model = getModelInstance(modelGen);
  console.log(modelGen);

  const formatInstructions = `Respond only in valid JSON. don't ask any text around, your response should only conaint the JSON object. The JSON object you return should match the following schema:

const zodSchema = z.object({
  nameOfLanguage: z.string().describe("Name of the language"),
  description: z.string().describe("Informative details about the language, including its origin, date of creation, and extinction if applicable"),
  translatedText: z.object({
      name:z.string().describe("text to be translated : Hello i'm Manuel"),
      fullStack:z.string().describe("text to translate : Full Stack"),
      AiDev:z.string().describe("text to translate: AI Developer"),
      description:z.string().describe("text to translate : Turning daily problems 🧩 into solutions with code 💻, while fueling my creativity 🎨 and love for chicken 🍗.")
  }).describe("The translation of the given hero section text into the language"),
  funFact: z.string().describe("A fun fact about the language, culture, or population using this language"),
  colors: z.array(z.string()).describe("An array of colors in code (example #98CE00) representing the language’s culture, flag, or fictional setting"),
  languageHistory: z.object({
    spokenPeriod: z.string().describe("The time interval during which the language was or is spoken, e.g., '500 BCE - 400 CE' or 'still spoken today'"),
    region: z.string().describe("The region or regions where the language is or was spoken"),
    numberOfSpeakers: z.string().describe("The number of speakers, either currently if the language is still spoken, or historically if extinct"),
    isExtinct: z.boolean().describe("Whether the language is extinct or still in use value Boolean"),
  }).describe("A detailed field containing historical and speaker information about the language"),
});;`;

  const MEMORY_KEY = "chat_history";
  const SystemPrompt = `You are an AI assistant tasked with generating translation for each key of this object ----- 
      name:"text to be translate : Hello i'm Manuel",
      fullStack:"text to translate : Full Stack",
      AiDev:"text to translate: AI Developer",
      description:"text to translate : Turning daily problems 🧩 into solutions with code 💻, while fueling my creativity 🎨 and love for chicken 🍗.
      
     and cultural or fictional information (when fictional languages) for a hero section text. 
    The goal is to immerse users in different languages, sparking curiosity about the language and its background. 
    You will output responses in JSON format, adhering to the schema provided. 
    Some languages will be real and currently spoken, others may be extinct, and some will be inspired by science fiction or fantasy universes.

    you will only generate one language for each request 

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

    `;

  const memoryPrompt = await ChatPromptTemplate.fromMessages([
    ["system", SystemPrompt],
    new MessagesPlaceholder(MEMORY_KEY),
    ["human", "{input}"],
  ]).partial({
    format_instructions: formatInstructions,
  });

  const genLchain = RunnableSequence.from([
    {
      input: (i) => i.input,
      chat_history: (i) => i.chat_history,
    },
    memoryPrompt,
    model,
    (prevRes) => {
      const extracted = extractJSON(prevRes.content);

      const res = {
        ...prevRes,
        content: extracted,
      };

      const aiRes = new AIMessage(res);
      return aiRes;
    },
    parserGenNew,
  ]);

  let response;
  let it: number = 0;
  const maxAttempts = 5;

  while (it < maxAttempts) {
    try {
      response = await genLchain.invoke({
        input: it > 0 
        ? 
        `"your last attempt failed please try again. to be parsed because of an incorrect output structure. please try again strictly follow all the instructions and strictly respect the output structure`
          :
        "let's us discover a new langage please carefuly respect all instructions",
        chat_history: langageHistory ? langageHistory : [],
      });

      return response;
    } catch (err) {
      console.log(err);
      it++;
    }
  }

  throw new Error("Something went wrong. Please try again.");
};

/* ----------------------------------------------------------------- */
export const ChatManager = async ({
  input,
  chatHistory,
  langHistory,
  modelGen,
  modelChat,
}: {
  input: string;
  chatHistory: BaseMessage[];
  langHistory: BaseMessage[];
  modelGen: string;
  modelChat: string;
}) => {
  console.log(modelChat);
  console.log(input);
  const model = getModelInstance(modelChat);
  const MEMORY_KEY = "chat_history";
  const SystemPrompt = `
    You are an AI language assistant designed to help users explore and learn about new languages. Your task is to answer any follow-up questions **(strictly respecting the JSON)** output format  the user might have about a language they are discovering. 
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

      
    `;

  const formatInstructions = `

Respond only in valid JSON following this JSON object schema: 

{
  "outputFunctionCall":  z.object({
  nameOfLanguage: z.string().describe("Name of the language"),
  description: z.string().describe("Informative details about the language, including its origin, date of creation, and extinction if applicable"),
  translatedText: z.object({
      name:z.string().describe("text to be translated : Hello i'm Manuel"),
      fullStack:z.string().describe("text to translate : Full Stack"),
      AiDev:z.string().describe("text to translate: AI Developer"),
      description:z.string().describe("text to translate : Turning daily problems 🧩 into solutions with code 💻, while fueling my creativity 🎨 and love for chicken 🍗.")
  }).describe("The translation of the given hero section text into the language"),
  funFact: z.string().describe("A fun fact about the language, culture, or population using this language"),
  colors: z.array(z.string()).describe("An array of colors in code (example #98CE00) representing the language’s culture, flag, or fictional setting"),
  languageHistory: z.object({
    spokenPeriod: z.string().describe("The time interval during which the language was or is spoken, e.g., '500 BCE - 400 CE' or 'still spoken today'"),
    region: z.string().describe("The region or regions where the language is or was spoken"),
    numberOfSpeakers: z.string().describe("The number of speakers, either currently if the language is still spoken, or historically if extinct"),
    isExtinct: z.boolean().describe("Whether the language is extinct or still in use value Boolean"),
  }).describe("A detailed field containing historical and speaker information about the language  / null if no call occured"),
}) // outputFunctionCall:null if no call occured",

 "output":output:z.string().describe("here you response to the user query")
}

if no call tool occured here is your response struture : 
{"outputFunctionCall":null,output:here you response to the user query}
    `;

  const memoryPrompt = await ChatPromptTemplate.fromMessages([
    ["system", SystemPrompt],
    new MessagesPlaceholder(MEMORY_KEY),
    ["human", "{input}"],
    new MessagesPlaceholder("agent_scratchpad"),
  ]).partial({
    format_instructions: formatInstructions,
  });

  const tools = [
    new DynamicStructuredTool({
      name: "generate_language",
      description:
        "Generates a new language with the given name and returns its details in JSON format.",
      schema: zodSchemaGen,
      func: async () => {
        const result = await GenNewLg(modelGen, langHistory);
        return JSON.stringify(result);
      },
    }),
  ];

  const agent = await createToolCallingAgent({
    llm: model,
    tools,
    prompt: memoryPrompt,
  });
  const agentExecutor = new AgentExecutor({
    agent,
    tools,
  });

  const agentRunnable = new RunnableLambda({
    func: async ({
      chat_history,
      input,
    }: {
      input: string;
      chat_history: BaseMessage[];
    }) => {
      const resp = await agentExecutor.invoke({ chat_history, input });
      return resp.output;
    },
  });

  const chain = RunnableSequence.from([agentRunnable, parserChatManager]);

  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const inpt =
      attempts > 0
        ? `your last attempt to generate a message failed because you have not respeted the output format instruction please try again and strictly format the output as instructed you
    output format instruction : {
  "outputFunctionCall":  z.object({
  nameOfLanguage: z.string().describe("Name of the language"),
  description: z.string().describe("Informative details about the language, including its origin, date of creation, and extinction if applicable"),
  translatedText: z.object({
      name:z.string().describe("text to be translated : Hello i'm Manuel"),
      fullStack:z.string().describe("text to translate : Full Stack"),
      AiDev:z.string().describe("text to translate: AI Developer"),
      description:z.string().describe("text to translate : Turning daily problems 🧩 into solutions with code 💻, while fueling my creativity 🎨 and love for chicken 🍗.")
  }).describe("The translation of the given hero section text into the language"),
  funFact: z.string().describe("A fun fact about the language, culture, or population using this language"),
  colors: z.array(z.string()).describe("An array of colors in code (example #98CE00) representing the language’s culture, flag, or fictional setting"),
  languageHistory: z.object({
    spokenPeriod: z.string().describe("The time interval during which the language was or is spoken, e.g., '500 BCE - 400 CE' or 'still spoken today'"),
    region: z.string().describe("The region or regions where the language is or was spoken"),
    numberOfSpeakers: z.string().describe("The number of speakers, either currently if the language is still spoken, or historically if extinct"),
    isExtinct: z.boolean().describe("Whether the language is extinct or still in use value Boolean"),
  }).describe("A detailed field containing historical and speaker information about the language  / null if no call occured"),
}) // outputFunctionCall:null if no call occured",

 "output":output:z.string().describe("here you response to the user query")
}

user input:${input} `
        : `please your response must respect the output JSON structure ${input}`;

    try {
      const res = await chain.invoke({
        chat_history: chatHistory,
        input: inpt,
      });
      return res;
    } catch (err) {
      console.log(attempts);
      console.log(err);
      attempts++;
    }
  }

  throw new Error("Something went wrong. Please try again.");
};

export const followUpQuestion = async ({
  input,
  modelFollow,
  chatHistory,
  AIMsg,
}: {
  input: string;
  chatHistory: BaseMessage[];
  AIMsg: string;
  modelFollow: string;
}) => {
  const model = getModelInstance(modelFollow);

  const updatedChatMessage = [
    ...chatHistory,
    new HumanMessage(input),
    new AIMessage(JSON.stringify(AIMsg)),
  ];
  const formatInstructions = `Respond only in valid JSON. The JSON object you return should match the following schema:

  const zodSchema = z.object({{
    questions:z.array({{z.string().describe("follow up question")}}).describe("c'et un array contenant les follow up questions")
}});;`;

  const SystemPrompt = `Given the following chat history, generate a list of potential follow-up questions that build on the previous responses.
      The follow-up questions should maintain the conversation’s context, encourage deeper discussion, and explore any unanswered or implied ideas. 
      Ensure the questions are open-ended, engaging, and relevant to the topics discussed.

      Instructions:

1.Analyze the Chat History: Carefully read the entire conversation to understand the context, topics discussed, and any unresolved queries or points of interest.

2.Identify Potential Areas for Further Inquiry: Look for hints in the user's messages that suggest curiosity, confusion, or a desire for more information.

3. IMPORTANT keep the question short and concise : max 80 characters.

    Generate Relevant Follow-Up Questions:

1.Produce a list of 3-5 possible questions the user might ask next.
Ensure the questions are open-ended, clear, and directly related to the conversation.
Maintain the same tone and style as the user's previous messages.
Avoid:

2.Introducing completely new topics unrelated to the chat history.
Repeating questions that have already been answered.
        
 
      You will output responses in JSON format, adhering to this schema  z.object({{
      questions:z.array(z.string().describe("follow up question")).describe("c'et un array contenant les follow up questions")
}}).

  
      The format of the JSON should be:
  tags\n{format_instructions}
      `;

  const memoryPrompt = await ChatPromptTemplate.fromMessages([
    ["system", SystemPrompt],
    ["human", "{input}"],
  ]).partial({
    format_instructions: formatInstructions,
  });

  const genLchain = RunnableSequence.from([
    memoryPrompt,
    model,
    parserFollowUp,
  ]);

  const maxAttempts = 5;
  let attempts = 0;

  while (attempts < maxAttempts) {
    try {
      const res = await genLchain.invoke({
        input: attempts > 0 ? "your last attempt failed please try again. to be parsed because of an incorrect output structure. please try again strictly respect the output structure" : updatedChatMessage,
      });
      return res;
    } catch (err) {
      console.log(err);
      attempts++;
    }
  }

  throw new Error("Something went wrong. Please try again.");
};
