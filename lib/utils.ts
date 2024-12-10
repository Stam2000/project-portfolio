import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { ChatOpenAI } from "@langchain/openai";
import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TailwindClassConfig {
  backgroundOpacityLevels?: number[];
  borderOpacityLevels?: number[];
  includeBorder?: boolean;
  includeCircle?: boolean;
}

export const translatedText = z.object({
  name: z.string().describe("text to be translate : Hello i'm Manuel"),
  fullStack: z.string().describe("text to translate : Full Stack"),
  AiDev: z.string().describe("text to translate: AI Developer"),
  description: z
    .string()
    .describe(
      "text to translate : I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕 ",
    ),
});

export const zodSchemaGen = z.object({
  nameOfLanguage: z.string().describe("Name of the language"),
  description: z
    .string()
    .describe(
      "Informative details about the language, including its origin, date of creation, and extinction if applicable",
    ),
  translatedText: z
    .object({
      name: z.string().describe("text to be translated : Hello i'm Manuel"),
      fullStack: z.string().describe("text to translate : Full Stack"),
      AiDev: z.string().describe("text to translate: AI Developer"),
      description: z
        .string()
        .describe(
          "text to translate : Turning daily problems 🧩 into solutions with code 💻, while fueling my creativity 🎨 and love for chicken 🍗.",
        ),
    })
    .describe(
      "The translation of the given hero section text into the language",
    ),
  funFact: z
    .string()
    .describe(
      "A fun fact about the language, culture, or population using this language",
    ),
  colors: z
    .array(z.string())
    .describe(
      "An array of colors in code (example #98CE00) representing the language’s culture, flag, or fictional setting",
    ),
  languageHistory: z
    .object({
      spokenPeriod: z
        .string()
        .describe(
          "The time interval during which the language was or is spoken, e.g., '500 BCE - 400 CE' or 'still spoken today'",
        ),
      region: z
        .string()
        .describe("The region or regions where the language is or was spoken"),
      numberOfSpeakers: z
        .string()
        .describe(
          "The number of speakers, either currently if the language is still spoken, or historically if extinct",
        ),
      isExtinct: z
        .boolean()
        .describe(
          "Whether the language is extinct or still in use value Boolean",
        ),
    })
    .describe(
      "A detailed field containing historical and speaker information about the language",
    ),
});

export const zodSchemaChat = z.object({
  outputFunctionCall: zodSchemaGen
    .nullable()
    .describe(
      "result of the call of the function generating the languages | null if no call occured",
    ),
  output: z.string().describe("your response here"),
});

function hexToRGBA(hex: string, opacity: number): string {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${opacity / 100})`;
}

export function generateTailwindClasses(
  colors: string[],
  config: TailwindClassConfig,
): Array<React.CSSProperties> {
  const styles: Array<React.CSSProperties> = [];
  const {
    backgroundOpacityLevels = [100],
    borderOpacityLevels = [100],
    includeBorder = true,
    includeCircle = false,
  } = config;

  colors.forEach((color) => {
    // Generate styles for backgrounds with specified opacity levels
    if (includeCircle) {
      backgroundOpacityLevels.forEach((opacity) => {
        const style: React.CSSProperties = {
          backgroundColor: hexToRGBA(color, opacity),
        };
        styles.push(style);
      });
    }

    // Generate styles for borders if includeBorder is true
    if (includeBorder) {
      borderOpacityLevels.forEach((opacity) => {
        const style: React.CSSProperties = {
          border: `2px solid ${hexToRGBA(color, opacity)}`,
        };
        // If not including circles, set background to transparent
        if (!includeCircle) {
          style.backgroundColor = "transparent";
        }
        styles.push(style);
      });
    }
  });

  return styles;
}

export function extractBackgroundColors(arr: React.CSSProperties[]) {
  return arr
    .filter((item) => item.backgroundColor) // Only consider items with backgroundColor property
    .map((item) => {
      // Modify the rgba color string to set the opacity to 1
      const rgba = item.backgroundColor;
      const newRgba = rgba!.replace(
        /rgba\((\d+),(\d+),(\d+),[^)]+\)/,
        "rgba($1,$2,$3,1)",
      );
      return newRgba;
    });
}

export const shiftColors = (arr: string[]) => {
  const newArr = [...arr]; // Copy the array to avoid mutating state directly
  const lastColor = newArr.pop(); // Remove the last color
  // Add it to the front
  return lastColor;
};

export function extractJSON(text: string) {
  try {
    // Chercher le début de l'objet JSON (premier '{')
    const startIndex = text.indexOf("{");
    if (startIndex === -1) return null;

    // Chercher la fin de l'objet JSON (dernier '}')
    const endIndex = text.lastIndexOf("}");
    if (endIndex === -1) return null;

    // Extraire le JSON
    const jsonString = text.substring(startIndex, endIndex + 1);

    // Vérifier que c'est un JSON valide

    return jsonString;
  } catch (error) {
    return null;
  }
}

export function getModelInstance(shortName: string) {
  const models: { [key: string]: string } = {
    "gpt-4o": "gpt-4o",
    "gpt-4o-mini": "gpt-4o-mini",
    "gpt-4": "gpt-4",
    "gpt-4-turbo": "gpt-4-turbo",
    "gpt-3.5": "gpt-3.5-turbo",
    "Mixtral-8x7B": "mistralai/Mixtral-8x7B-Instruct-v0.1",
    "Mixtral-8x22B": "mistralai/Mixtral-8x22B-Instruct-v0.1",
    "Llama-3.1-405B": "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
    "Llama-3.1-70B": "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
    "Llama-3.1-8B": "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    "WizardLM-2-8x22B": "microsoft/WizardLM-2-8x22B",
    "Gemma-2-27B": "google/gemma-2-27b-it",
    "Qwen-2.5-7B": "Qwen/Qwen2.5-7B-Instruct-Turbo",
  };

  const modelName = models[shortName];

  if (!modelName) {
    throw new Error(`Unknown model short name: ${shortName}`);
  }

  // Check if the model is an OpenAI model (starts with "gpt")
  if (shortName.startsWith("gpt")) {
    return new ChatOpenAI({
      model: modelName,
    });
  } else {
    return new ChatTogetherAI({
      model: modelName,
    });
  }
}
