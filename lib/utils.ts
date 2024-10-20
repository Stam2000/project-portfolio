import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface TailwindClassConfig {
  backgroundOpacityLevels?: number[]; // Par exemple, [20, 50, 80]
  borderOpacityLevels?: number[];     // Par exemple, [10, 90]
  includeBorder?: boolean;            // Par défaut : true
  includeCircle?: boolean;            // Par défaut : false
}

export const translatedText =  z.object({
  name:z.string().describe("text to be translate : Hello i'm Manuel"),
  fullStack:z.string().describe("text to translate : Full Stack"),
  AiDev:z.string().describe("text to translate: AI Developer"),
  description:z.string().describe("text to translate : I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕 ")
})

export const zodSchemaGen = z.object({
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
});

export const zodSchemaChat = z.object({
  outputFunctionCall:zodSchemaGen.nullable().describe("result of the call of the function generating the languages | null if no call occured"),
  output:z.string().describe("your response here")
})


function hexToRGBA(hex: string, opacity: number): string {
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h.split('').map((c) => c + c).join('');
  }
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${opacity / 100})`;
}

export function generateTailwindClasses(
  colors: string[],
  config: TailwindClassConfig
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
          border: `1px solid ${hexToRGBA(color, opacity)}`,
        };
        // If not including circles, set background to transparent
        if (!includeCircle) {
          style.backgroundColor = 'transparent';
        }
        styles.push(style);
      });
    }
  });

  return styles;
}
/* // Exemple d'utilisation
const colors = ['#C6C6C3', '#E11010', '#000000', '#F5D03D'];
const config: TailwindClassConfig = {
  backgroundOpacityLevels: [20, 50, 80],
  borderOpacityLevels: [20, 90],
  includeBorder: true,
  includeCircle: true,

 */