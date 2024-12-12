"use client"
import {
  MySvg,
  MySvg2,
  MySvg3,
  MySvg4,
  MySvg5,
  MySvg6,
  MySvg7,
} from "@/components/SVG";
import { useMediaQuery } from "react-responsive";
import { useState,useEffect } from "react";

const DesignHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const isSmallLaptop = useMediaQuery({ minWidth: 1024 });
  const [isMob,setIsMob] = useState(false)

  useEffect(()=>{
    setIsMob(isSmallLaptop)
  },[isSmallLaptop])


  return (
    <div className="absolute h-full overflow-hidden w-full ">
      {isMobile ? null : <MySvg7 className=" absolute  h-72" />}
      {/* Right */}
      {/* <MySvg className="absolute h-8 top-[10%] left-1/2 " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg4 className="absolute h-16 top-[29%] opacity-75 right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
      <MySvg
        className="z-0 absolute h-8 top-[15%] -left-[10%] md:top-[10%] md:left-1/2 "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg4
        className="z-0 absolute h-16 top-[29%] opacity-75 right-[30%] "
        primaryColor="white"
          secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      {/* Group 1*/}
      {/* <MySvg5 className="absolute h-16 top-[7%]  -right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg6 className="absolute h-5 top-[30%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg className="absolute h-3 top-[38%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg2 className="absolute h-2 top-[28%]  right-[1%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg5 className="absolute h-3 top-[30%]  right-[10%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
      <MySvg5
        className="z-0 absolute h-16 top-[7%]  -right-[5%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      {isMob && <MySvg6
        className="z-10 opacity-20 absolute h-7 top-[30%]  right-[18%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />}
      <MySvg
        className="z-0 absolute h-3 top-[46%]  left-[15%] md:top-[46%]  md:right-[23%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      {isMob &&  <MySvg2
        className="z-10 opacity-40 absolute h-2 top-[28%]  right-[10%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />}
      {isMob && <MySvg5
        className="z-0 absolute h-5 top-[10%]  right-[20%] "
        primaryColor="white"
        secondaryColor="#dcdcdc"
        tertiaryColor="#bcbcbc"
      />}
      {/*Group 1 end*/}
      {/* <MySvg className="absolute h-8  bottom-[40%]  right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg3 className="absolute h-20  bottom-[7%]  right-[5%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
      <MySvg
        className="z-0 absolute h-8  bottom-[45%]  right-[5%] md:bottom-[40%]  md:right-[5%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg3
        className="z-0 absolute md:h-20 h-16  bottom-[7%]  right-[5%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      {/*Group 2 */}
      {/* <MySvg5 className="absolute h-12  bottom-[30%] opacity-80  right-[25%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="white" />
          <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg6 className="absolute h-8  bottom-[18%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg2 className="absolute h-3  bottom-[38%] opacity-80  right-[35%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg3 className="absolute h-5  bottom-[28%] opacity-80  right-[40%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" /> */}
      <MySvg5
        className="z-0 absolute h-12  bottom-[30%] opacity-80  right-[25%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg6
        className="z-0 absolute h-8  bottom-[18%] opacity-80  right-[45%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg4
        className="z-0 absolute h-8  bottom-[36%] opacity-80  left-[0%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg2
        className="z-0 absolute h-3  bottom-[38%] opacity-80  right-[40%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg3
        className="z-0 absolute h-5 bottom-[25%] left-[20%] md:bottom-[28%] opacity-80  md:right-[40%] "
        primaryColor="whitek"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      {/*Group 3 */}
      {/* <MySvg2 className="absolute h-8  top-[1%]  right-[20%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg className="absolute h-4  top-[20%]  right-[16%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <MySvg4 className="absolute h-6  bottom-[1%]  right-[30%] " primaryColor="white" secondaryColor="#bcbcbc" tertiaryColor="#bcbcbc" />
          <div className="absolute top-[32%] right-[20%] rounded-full bg-gray-100 h-[20px] w-[20px] " /> */}
      <MySvg2
        className="z-0 absolute h-8 top-[1%]  left-[20%] md:top-[1%]  md:right-[20%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg
        className="z-0 absolute h-4 top-[20%]  right-[58%]  md:top-[20%]  md:right-[16%] "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <MySvg4
        className="z-0 absolute h-6  bottom-[1%] right-[30%] opacity-50  "
        primaryColor="white"
        secondaryColor="#bcbcbc"
        tertiaryColor="#f7f7f7"
      />
      <div className="z-0 absolute top-[32%] right-[20%] rounded-full bg-white h-[20px] w-[20px] " />
      {/* Right end */}

      {/*CARREE gris tout en haut du cercle Input */}
      { isSmallLaptop ? <div
        className={`absolute top-[20%] left-[38%]  md:top-[14%] md:left-[36%] rounded-2xl rotate-[35deg] border-[10px] border-white md:border-[#bcbcbc] h-[60px] w-[60px]`}
      />:null}
      {/*Cercle*/}

      {/* TODO modify z-index */}
      <div
        className={`absolute bottom-[50%] left-[50%] rounded-full bg-white h-[40px] w-[40px]`}
      />
      {/*Cercle*/}
      {/* <div className={`absolute top-[8%] left-[54%] rounded-full bg-red-500 h-[20px] w-[20px]`} /> */}
      { isSmallLaptop ? <div
        className={`absolute top-[11%] left-[7%] md:top-[8%] md:left-[54%] rounded-full bg-white h-[20px] w-[20px]`}
      />:null}
      {/*CARREE*/}
      {/* <div className={`absolute bottom-[40%] left-[37%] md:bottom-[44%] md:left-[24%] rounded-lg -rotate-[15deg] border-[7px] border-[#ffffff] h-[35px] w-[35px]`} /> */}
      {isSmallLaptop ? <div
        className={`absolute bottom-[40%] left-[37%] md:bottom-[44%] md:left-[24%] rounded-lg -rotate-[15deg] border-[7px] border-[#ffffff] h-[35px] w-[35px]`}
      /> : null }
      {/*Cercle*/}
      {/* <div className={`absolute bottom-[45%] left-[20%] md:bottom-[51%] md:left-[42%] rounded-full bg-slate-700 h-[10px] w-[10px]`} /> */}
      <div
        className={`absolute bottom-[45%] left-[20%] md:bottom-[51%] md:left-[42%] rounded-full bg-white h-[10px] w-[10px]`}
      />
      {/*Cercle*/}
      {/* <div className={`absolute bottom-[25%] right-[20%] md:left-[56%] rounded-full bg-slate-500 h-[7px] w-[7px]`} /> */}
      <div
        className={`absolute bottom-[25%] right-[20%] md:left-[56%] rounded-full bg-slate-50 h-[7px] w-[7px]`}
      />
      {/*Cercle*/}
      {/* <div className={`absolute bottom-[18%] left-[20%]  md:bottom-[29%] md:left-[40%] rounded-full bg-slate-300 h-[28px] w-[28px]`} /> */}
      <div
        className={`absolute bottom-[12%] left-[10%]  md:bottom-[29%] md:left-[40%] rounded-full bg-white/20 h-[28px] w-[28px]`}
      />
      {/*Cercle bottom input*/}
      {/* <div className={`z-0 absolute -bottom-[20%] md:-bottom-[35%] left-[20%] border-[50px] md:border-[60px] border-[#dcdcdc] rounded-full h-[200px] w-[200px]`} /> */}
      <div
        className={`z-0 absolute -bottom-[20%] md:-bottom-[35%] left-[20%] border-[50px] md:border-[60px] border-[#dcdcdc] rounded-full h-[200px] w-[200px]`}
      />
    </div>
  );
};

export default DesignHeader;
