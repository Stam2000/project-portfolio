"use client";
import { TypeWritter } from "./typeWritter";
import { z } from "zod";
import { zodSchemaGen } from "@/lib/utils";
import { MyContext } from "./contextProvider";
import { useContext, useEffect } from "react";
import MarkdownTypewriter from "./markdownTyper";
type TranslatedText = z.infer<typeof zodSchemaGen>;

type Props = {
  isInitialContent: boolean;
  translatedText?: TranslatedText | undefined;
  colors: string[] | undefined;
};

export const Display = ({ translatedText, colors }: Props) => {
  const { isTypingCompleted, setIsTypingCompleted } = useContext(MyContext);
  useEffect(() => {
    setIsTypingCompleted(false);
  }, [translatedText]);

  return (
    <>
      {!translatedText ? (
        <>
          <span
            className={`text-[${
              colors ? colors[0] : "#FFFFFF"
            }] lg:pl-16 font-poiret-one -mb-2 font-semibold italic text-xl md:text-2xl self-start`}
          >
            Hello I'm Manuel,
          </span>
          <h1 className="text-3xl md:text-2xl laptop:text-3xl deskB:text-5xl text-gray-900 mb-2 font-yeseva-one font-extrabold">
            <span className="text-[#636363] pr-3">Full Stack</span> AI✨
            Developer.
          </h1>
          <p className="z-50 tet-sm lg:text-md deskB:text-lg mt-6 mb-8 font-light text-gray-800 font-oxygen ">
            Turning daily problems 🧩 into solutions with code 💻, while fueling
            my creativity 🎨 and love for chicken 🍗.
          </p>
          <span className="text-[12px] italic">--人生は風前の灯火-- </span>
        </>
      ) : (
        <div className=" h-68 md:max-h-[300px] lg:min-h-52 max-w-[95%] overflow-y-auto   flex flex-col items-center   ">
          <TypeWritter
            text={translatedText!.translatedText.name}
            component={"span"}
            className={`text-[${
              colors ? "#F5E1A4" : "#98CE00"
            }] lg:pl-16 font-poiret-one  font-semibold italic text-xl md:text-2xl self-start`}
          />
          <h1 className="text-3xl md:text-xl lg:text-[32px] deskB:text-4xl text-gray-900 mb-2 font-yeseva-one font-extrabold">
            <TypeWritter
              text={translatedText!.translatedText.fullStack}
              component={"span"}
              className="text-[#636363]  pr-3"
            />
            <TypeWritter
              text={translatedText!.translatedText.AiDev}
              component={"span"}
            />
          </h1>
          <TypeWritter
            text={translatedText!.translatedText.description}
            component={"p"}
            speed={1}
            onComplete={() => setIsTypingCompleted(true)}
            className="z-50 text-sm lg:text-md deskB:text-lg mt-6 mb-8 font-light text-gray-800 font-oxygen"
          />

          <MarkdownTypewriter 
            content={`--${translatedText!.nameOfLanguage}--`}
            className="text-lg font-oxygen font-extrabold "
          />
          <MarkdownTypewriter
            content={`**region**: ${translatedText!.languageHistory.region} - **spoken period**: ${
              translatedText!.languageHistory.spokenPeriod
            }-**number of speaker**: ${translatedText!.languageHistory.numberOfSpeakers}`}
            className="text-[13px] font-oxygen italic"
          />
        </div>
      )}
    </>
  );
};
