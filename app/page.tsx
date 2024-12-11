"use client";
import OverviewProjects from "../components/overviewProject";
import Dots from "@/components/dots";
import Dots2 from "@/components/dots-2";
import axios from "axios";
import Navbar from "@/components/navbar";
import { Chat } from "@/components/chat";
import { useState, useEffect, useMemo, useContext } from "react";
import { AIMessage, BaseMessage, HumanMessage } from "@langchain/core/messages";
import { zodSchemaGen, generateTailwindClasses } from "@/lib/utils";
import {
  MySvg,
  MySvg2,
  MySvg3,
  MySvg4,
  MySvg5,
  MySvg6,
  MySvg7,
  LogoSvg
} from "@/components/SVG";
import { z } from "zod";
import React from "react";

import { Display } from "@/components/display";
import { useMediaQuery } from "react-responsive";

import ToolKit from "@/components/toolKit";
import { motion, useInView } from "framer-motion";
import { extractBackgroundColors } from "@/lib/utils";
import { shiftColors } from "@/lib/utils";
import { SelectModels } from "@/components/llmSelect";
import { v4 as uuidv4 } from "uuid";
import { MyContext } from "@/components/contextProvider";
import { Loader2, Minimize2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import LayoutImages from "@/components/layoutGrid";
import DesignHeader from "@/components/designHeader";
import { useRef } from "react";
import { format } from "date-fns";
import { GithubIcon } from "@/components/customIcon";
import { LinkedIcon } from "@/components/customIcon";
import { MagicWand04Icon } from "@/components/SVG";

type Role = "ai" | "user";
interface Message {
  id: string;
  role: Role;
  content: string;
  funfact?: string;
}
interface TailwindClassConfig {
  backgroundOpacityLevels?: number[];
  borderOpacityLevels?: number[];
  includeBorder?: boolean;
  includeCircle?: boolean;
}

type ResGen = z.infer<typeof zodSchemaGen>;

const defaultConfig: TailwindClassConfig = {
  backgroundOpacityLevels: [30, 50, 100],
  borderOpacityLevels: [20, 100],
  includeBorder: true,
  includeCircle: true,
};

const defC = [
  { backgroundColor: "#D1D5DB" },
  { backgroundColor: "#000000" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#181818" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.8)" },
];

const defaultColors = [
  { backgroundColor: "#D1D5DB" },
  { backgroundColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.2)" },
  { borderWidth: "1px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "1px", borderColor: "rgba(152, 206, 0, 0.2)" },
];

const defColors = [
  { backgroundColor: "#D1D5DB" },
  { backgroundColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.8)" },
  { borderWidth: "2px", borderColor: "#FFFFFF" },
  { backgroundColor: "rgba(152, 206, 0, 0.2)" },
  { borderWidth: "2px", borderColor: "#98CE00" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
  { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.2)" },
];

export default function Home() {
  const [modelGen, setModelGen] = useState<string>("gpt-4o");
  const [modelFollow, setModelFollow] = useState<string>("gpt-4o");
  const [modelChat, setModelChat] = useState<string>("gpt-4o");
  const [idImg, setIdImg] = useState<string | null>(null);
  const [langHistory, setLangHistory] = useState<BaseMessage[]>([]);
  const [isInitialContent, setIsInitialContent] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<ResGen>();
  const [chatMessage, setChatMessage] = useState<Message[]>([]);
  const [borderColor, setBorderColor] = useState(["rgba(152,206,0,1)"]);
  const [btnColor, setBtnColor] = useState([`rgba(152,206,0,1)`]);
  const [btnShadow, setBtnShadow] = useState([`rgba(152,206,0,1)`]);
  const [chatHistory, setChatHistory] = useState<BaseMessage[]>([]);
  const [followQts, setFollowQts] = useState<{ questions: string[] }>({
    questions: [],
  });
  const [error, setError] = useState<string>("");
  const { isLoading, setIsLoading } = useContext(MyContext);

  const useRe = useRef(null);
  const isInView = useInView(useRe);

  const ca = useMemo(() => {
    return generateTailwindClasses(
      currentLanguage ? [...currentLanguage.colors] : ["#98CE00"],
      defaultConfig,
    );
  }, [currentLanguage?.colors]);

  const handleReset = () => {
    setChatHistory([]);
    setChatMessage([]);
    setLangHistory([]);
    setFollowQts({ questions: [] });
    setCurrentLanguage(undefined);
    setIsInitialContent(false);
  };

  const memoizedColors = useMemo(() => {
    return currentLanguage ? [...ca] : [...defColors];
  }, [ca]);

  const [shadowBox, setShadowBox] = useState(["0px 0px 0px rgba(152,206,0,1)"]);

  const isMobile = useMediaQuery({ maxWidth: 500 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const isSmallLaptop = useMediaQuery({ maxWidth: 1024 });
  const isLaptop = useMediaQuery({ maxWidth: 1280 });
  const isBigScreen = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    const newBgColors = extractBackgroundColors(ca);
    const lastColor = shiftColors(shadowBox);
    const lastBg = shiftColors(borderColor);
    const lastBtColor = shiftColors(btnColor);

    setBorderColor([
      lastBg!,
      `${newBgColors[Math.floor(Math.random() * newBgColors.length)]}`,
    ]);

    setBtnColor([
      lastBtColor!,
      `${newBgColors[Math.floor(Math.random() * newBgColors.length)]}`,
    ]);
    setBtnShadow([
      lastColor!,
      `0px 5px 10px ${
        newBgColors[Math.floor(Math.random() * newBgColors.length)]
      }`,
    ]);

    setShadowBox([
      lastColor!,
      `10px 15px 45px ${
        newBgColors[Math.floor(Math.random() * newBgColors.length)]
      }`,
    ]);
  }, [ca]);

  async function handleSubmit() {
    setError("");
    setIsLoading(true);
    try {
      const {
        data: { message, followQts },
      } = await axios.post("/api/ai", {
        langHistory,
        chatHistory,
        modelGen,
        modelFollow,
      });
      setLangHistory((prev) => [
        ...prev,
        new HumanMessage("new"),
        new AIMessage(JSON.stringify(message)),
      ]);
      setIsInitialContent(false);
      setCurrentLanguage(message);
      setFollowQts(followQts);

      setChatMessage((prev) => {
        const newMessage: Message = {
          id: uuidv4(),
          role: "ai",
          content: message.description,
          funfact: message.funFact,
        };

        return [...prev, newMessage];
      });

      setIsLoading(false);
    } catch (error) {
      setError("Something went wrong, please try again later");
      console.error("Error making POST request:", error);
    }
    setIsLoading(false);
  }

  const [computedValues, setComputedValues] = useState({ lines: 20, dotsEachLine: 7 });

  useEffect(() => {
    const dotsEachLine = isTablet ? 3 : isLaptop ? 5 : 7;
    const lines = isTablet ? 24 : isSmallLaptop ? 28 : isBigScreen ? 32 : 20;
    setComputedValues({ lines, dotsEachLine });
  }, [isTablet, isLaptop, isSmallLaptop, isBigScreen]);

  const colorLogo = useMemo(()=>{
      if(currentLanguage){
        return currentLanguage.colors[Math.floor(Math.random()*currentLanguage.colors.length-1)]
      }else{
        return `#fdf0d5`
      }
  },[currentLanguage])
  
  return (
    <main>
      <AnimatePresence>
        {idImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            style={{ pointerEvents: "auto" }}
            onClick={() => {
              setIdImg(null);
            }}
            className="top-5 bottom-5 left-5 right-5  md:top-10 md:bottom-10 md:left-10 bg-black overflow-hidden  md:right-10 z-[100] rounded-2xl fixed flex items-center justify-center"
          >
            <motion.div layoutId={idImg}>
              <span className="absolute right-4 top-4 hover:cursor-pointer text-white">
                <Minimize2 />
              </span>
              <motion.img
                className={` object-cover `}
                src={`/${idImg}`}
                alt={idImg}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative md:h-lvh deskB:flex deskB:flex-col  deskB:justify-start ">
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
        className="py-8">
          <div className="flex lg:ml-40 lg:gap-24  md:ml-10 md:gap-16 flex-col md:flex-row items-center justify-center md:w-fit">
          <LogoSvg className="w-28 h-28" primaryColor="#fff" secondaryColor={colorLogo} />

            <motion.button
              animate={{
                borderColor: borderColor,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{
                boxShadow: {
                  duration: 5,
                  ease: "easeInOut",
                },
                borderColor: {
                  duration: 5, // Set your desired duration for borderColor
                  ease: "easeInOut",
                },
              }}
              className="relative flex items-center border bg-none rounded-full px-2 p-1 justify-center gap-1"
            >
              <a
                className="z-50 font-nunito text-white bg-none text-[10px] md:text-sm font-light font-out left-1 text-nowrap"
                href=""
              >
                Advaible for work |{" "}
                <span className="font-bold">
                  {format(new Date(), "MMMM yyyy")} - [Your Date Here]
                </span>
              </a>
            </motion.button>
          </div>
        </motion.div>

        <div className="flex items-center deskB:mt-12   md:max-h-[500px] md:h-[60%] flex-col md:flex-row  deskB:max-h-full ">
          <motion.div
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1,delay:0.5}}
           key={`main-container`}
            className="flex w-full justify-center md:w-[72%] lg:w-[70%] deskB:w-[70%] flex-col h-full "
          >
            <motion.div
              initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              animate={{
                boxShadow: shadowBox,
                borderColor: borderColor,
              }}
              transition={{
                boxShadow: {
                  duration: 5,
                  ease: "easeInOut",
                },
                borderColor: {
                  duration: 5, // Set your desired duration for borderColor
                  ease: "easeInOut",
                },
              }}
              className={`   md:overflow-x-hidden items-stretch flex-col-reverse relative 
              bg-gradient-to-l border-r-[10px] border-b-[10px]  border-[#98CE00]  
                from-white from-10%  to-[#efefef] flex  
              md:flex-row w-[90%]  md:w-full rounded-r-2xl md:h-[95%] desk:h-[80%] justify-stretch 
              gap-2
              `}
            >
              <DesignHeader />
              <div className="flex items-stretch justify-center w-full md:w-1/2 ">
                <AnimatePresence mode="wait">
                  {currentLanguage ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{exit:isMobile ? { duration: 0.1,
                        type: "spring",
                        stiffness: 230,
                        damping: 40 } : null}}
                      exit={isMobile ? {opacity:0,height:0}:{ opacity: 0 }}
                      className="z-10 py-1 w-full"
                    >
                      <Chat
                        setFollowQts={setFollowQts}
                        followQts={followQts}
                        langHistory={langHistory}
                        setCurrentLanguage={setCurrentLanguage}
                        currentLanguage={currentLanguage}
                        chatHistory={chatHistory}
                        setChatHistory={setChatHistory}
                        chatMessage={chatMessage}
                        setChatMessage={setChatMessage}
                        setLangHistory={setLangHistory}
                        modelChat={modelChat}
                        modelGen={modelGen}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={"layout-images"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className=" flex flex-col   justify-center items-center"
                    >
                      <span className="h-[5%] italic mt-2 font-zeyada text-lg md:text-xl ">
                        because i love art 💚
                      </span>
                      <LayoutImages setId={setIdImg} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex md:w-1/2 flex-col mix-blend-multiply gap-1 items-center text-center justify-center py-3  p-2 lg:mr-10 ">
                <Display
                  isInitialContent={isInitialContent}
                  colors={currentLanguage?.colors}
                  translatedText={currentLanguage ? currentLanguage : undefined}
                />

                <div className=" flex flex-col my-4 items-center justify-center">
                  <motion.button
                    animate={{
                      backgroundColor: btnColor,
                      boxShadow: btnShadow,
                    }}
                    transition={{
                      duration: 4,
                    }}
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="w-44  bg-[#98CE00] p-1 flex items-center justify-center border-[1px] shadow-lg h-8 shadow-[#dcff7d] border-slate-500 rounded-md"
                  >
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key={"Loader2"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Loader2 className={`text-white animate-spin`} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key={"magic"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ exit: { duration: 0.1 } }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center text-[12px]  text-white gap-2"
                        >
                          Click Me
                          <MagicWand04Icon height={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                  <div className="flex items-center  max-w-44 justify-center gap-2 mt-2">
                    <button
                      className="border p-[2px] h-8 rounded text-sm bg-white shadow-md w-full "
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                    <SelectModels
                      setModelChat={setModelChat}
                      currentModelChat={modelChat}
                      setModelFollow={setModelFollow}
                      currentModelFollow={modelFollow}
                      setModelGen={setModelGen}
                      currentModelGen={modelGen}
                    />
                  </div>
                  {error && <span className="text-red-600">{error}</span>}
                  <AnimatePresence mode="wait"></AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div
            className="relative flex flex-col items-center  justify-center flex-1"
            suppressHydrationWarning={true}
          >
            {currentLanguage && !isTablet &&  (
              <span className="text-white  font-zeyada text-2xl  ">
                Colors by AI
              </span>
            )}
            {isMobile ? null : (
                <Dots
                key={"main-dots"}
                  location={`main-dots`}
                  numberOfDotEachLine={computedValues.dotsEachLine}
                  width={3}
                  height={3}
                  gapBlock={1}
                  gapLine={1}
                  colors={memoizedColors}
                  absolute={false}
                  numberOfLine={computedValues.lines} 
                />
            )}
          </div>
        </div>
        <Navbar
          currentLanguage={currentLanguage ? true : false }
          memoizedColors={memoizedColors}
          shadowBox={shadowBox}
          borderColor={borderColor}
        />
      </div>
      <ToolKit colors={currentLanguage ? [...ca] : defaultColors} />
      <OverviewProjects />
      <section className="  flex flex-col px-8 lg:px-48 overflow-hidden  pt-4 md:pt-16 pb-28 md:pb-20  ">
        <div className="relative overflow-hidden bg-gradient-to-l border-r-[10px] border-b-[10px]  border-[#98CE00]   from-white from-10%  to-[#efefef]   flex rounded-2xl h-3/5 justify-end ">
          <div className="absolute h-full overflow-hidden w-full ">
            <MySvg7 className=" absolute  h-72" />

            <MySvg
              className="absolute h-8 top-[10%] left-1/2 "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg4
              className="absolute h-16 top-[29%] opacity-75 right-[30%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg5
              className="absolute h-16 top-[7%]  -right-[5%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg6
              className="absolute h-5 top-[30%]  right-[1%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg
              className="absolute h-3 top-[38%]  right-[1%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg2
              className="absolute h-2 top-[28%]  right-[1%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg5
              className="absolute h-3 top-[30%]  right-[10%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg
              className="absolute h-8  bottom-[40%]  right-[5%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg3
              className="absolute h-20  bottom-[7%]  right-[5%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg5
              className="absolute h-12  bottom-[30%] opacity-80  right-[25%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="white"
            />
            <MySvg6
              className="absolute h-8  bottom-[18%] opacity-80  right-[35%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg6
              className="absolute h-8  bottom-[18%] opacity-80  right-[35%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg2
              className="absolute h-3  bottom-[38%] opacity-80  right-[35%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg3
              className="absolute h-5  bottom-[28%] opacity-80  right-[40%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg2
              className="absolute h-8  top-[1%]  right-[20%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg
              className="absolute h-4  top-[20%]  right-[16%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <MySvg4
              className="absolute h-6  bottom-[1%]  right-[30%] "
              primaryColor="white"
              secondaryColor="#bcbcbc"
              tertiaryColor="#bcbcbc"
            />
            <div className="absolute top-[32%] right-[20%] rounded-full bg-gray-100 h-[20px] w-[20px] " />
            <div className="absolute top-[14%] left-[36%] rounded-2xl rotate-[35deg] border-[10px] border-[#bcbcbc] h-[60px] w-[60px] " />
            <div className="absolute bottom-[50%] left-[50%] rounded-full bg-white h-[40px] w-[40px] " />
            <div className="absolute top-[8%] left-[54%] rounded-full bg-white h-[20px] w-[20px] " />
            <div className="absolute bottom-[44%] left-[24%] rounded-lg -rotate-[15deg] border-[7px] border-[#ffffff] h-[35px] w-[35px] " />
            <div className="absolute bottom-[51%] left-[42%] rounded-full bg-white h-[10px] w-[10px] " />
            <div className="absolute bottom-[25%] left-[56%] rounded-full bg-white h-[7px] w-[7px] " />
            <div className="absolute bottom-[29%] left-[40%] rounded-full bg-white h-[28px] w-[28px] " />
            <div className="absolute -bottom-[35%] left-[20%] border-[60px]  border-[#e5e5e5]  rounded-full  h-[200px] w-[200px] " />
          </div>
          <div className=" py-8 flex flex-col mix-blend-multiply flex-1 gap-2  items-center text-center justify-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: useRe, amount: 0.5 }}
              className="text-black relative text-4xl self-center flex flex-col items-center mt-15 font-yeseva-one w-fit font-medium md:p-2 gap-1"
            >
              <span className="z-20">About Me</span>
              <Dots2
                location={`about-dots`}
                numberOfDotEachLine={7}
                width={4}
                height={4}
                gapLine={1}
                className=" -bottom-4 z-0"
                absolute={false}
                colors={isInView ? [...defC] : defC}
                numberOfLine={2}
              />
            </motion.h2>
            <article className="mt-8 w-[90%] z-1000 font-nunito  text-gray-700 self-center text-md  text-justify">
              <p className="mb-4 ">
                Hi there! 👋 I’m Manuel, a full-stack developer and AI engineer
                based in Berlin, currently studying Computer Engineering at TU
                Berlin. My journey into coding began with a passion for gaming
                and the realization that coding felt like wielding a superpower
                🦸.{" "}
              </p>

              <p className="mb-4">
                {" "}
                The true turning point came when I decided to create apps that
                cater to my needs or solve everyday problems, even though I had
                no idea where to begin or what tools to use. This sparked my
                curiosity and led me to dive into coding, starting with Python,
                progressing to JavaScript, and eventually pursuing a career in
                AI engineering. Along the way, I’ve turned my ideas into reality
                and tackled meaningful challenges.
              </p>

              <p>
                Fast forward to today, I’ve come a long way! 🚀 I love blending
                creativity with technical skills to craft unique solutions.
                There’s still so much to learn, but every step forward is an
                adventure. If you’re up for collaborating or brainstorming cool
                ideas, let’s make something awesome together! 💡
              </p>
            </article>
            <div className="flex flex-col gap-2 items-center justify-center">
              <button
                onClick={handleSubmit}
                className="w-44 mt-6 gap-2 bg-[#98CE00] p-3 flex items-center justify-center border-[1px] shadow-lg shadow-[#dcff7d] border-slate-500 rounded-md"
              >
                <a
                  className=" font-nunito font-bold text-white"
                  href="mailto:manuel@sopmanuel.com"
                >
                  Contact Me
                </a>
                <MagicWand04Icon />
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a href="https://github.com/Stam2000">
                  <GithubIcon
                    width={35}
                    height={35}
                    color="black"
                    className="custom-class"
                  />
                </a>
                <a href="https://www.linkedin.com/in/manuel-sop-0905b9207">
                  <LinkedIcon
                    width={35}
                    height={35}
                    color="black"
                    className="custom-class"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
