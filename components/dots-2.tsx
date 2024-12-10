
import dotGeneratorGrid from "@/utilities/dotGenerator";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  numberOfDotEachLine: number;
  numberOfLine: number;
  absolute?: boolean;
  gapBlock?: number;
  gapLine?: number;
  colors: React.CSSProperties[];
  width?: number;
  height?: number;
  className?: string;
  viewportRoot?: React.RefObject<HTMLElement>;
  location: string;
}

const Dots = ({
  numberOfDotEachLine,
  numberOfLine,
  absolute = true,
  gapBlock = 1,
  gapLine = 1,
  width,
  height,
  className,
  colors,
  viewportRoot,
  location
}: Props) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [colors]);

  const defaultColors = [
    { backgroundColor: "#D1D5DB" },
    { backgroundColor: "#000000" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#181818" },
    { backgroundColor: "rgba(152, 206, 0, 0.8)" },
    { borderWidth: "2px", borderColor: "#98CE00" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
    { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.8)" },
  ];

  /*       const defColors=[
        { backgroundColor: "#D1D5DB" },
        { backgroundColor: "rgba(152, 206, 0, 0.8)" },
        { borderWidth: "2px", borderColor: "#FFFFFF" },
        { backgroundColor: "rgba(152, 206, 0, 0.2)" },
        { borderWidth: "2px", borderColor: "#98CE00" },
        { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.9)" },
        { borderWidth: "2px", borderColor: "rgba(152, 206, 0, 0.2)" }
      ] */

  const defaultwithB = defaultColors.filter((CssProp) => CssProp.borderColor);

  const defautOnlyB = defaultColors.filter(
    (CssProp) => CssProp.backgroundColor,
  );

  const randomDist1 = useMemo(() => {
    return dotGeneratorGrid(numberOfDotEachLine, numberOfLine, colors);
  }, [numberOfDotEachLine, numberOfLine, colors]);

  const randomDist2 = useMemo(() => {
    return dotGeneratorGrid(numberOfDotEachLine, numberOfLine, colors);
  }, [numberOfDotEachLine, numberOfLine, colors]);

  const sizeClasses = [
    "w-0",
    "w-1",
    "w-2",
    "w-3",
    "w-4",
    "w-5",
    "h-0",
    "h-1",
    "h-2",
    "h-3",
    "h-4",
    "shadow-2xl",
  ];
  const AllClasses = () => (
    <>
      <div className="hidden">
        {sizeClasses.map((sizeClass) => (
          <div key={sizeClass} className={sizeClass} />
        ))}
      </div>
    </>
  );

  return (
    <>
      <AllClasses />
      <div
        className={` ${
          absolute ? "absolute" : "null"
        } ${className} flex gap-${gapBlock}`}
      >

          <div key={`randomDist1-${location}`} className="flex flex-col gap-1">
            {randomDist1.map((line, lineIndex) => {
              return (
                <motion.div
                  key={`randomDist1-${lineIndex}-${location}`}
                  className={` flex items-center justify-evenly gap-${gapLine} `}
                >
                  {line.map((color, colorIndex) => {
                    return (
                      <motion.div
                        key={`randomDist1-color-${colorIndex}-${lineIndex}-${location}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileInView={
                          color.color.border || color.color.borderColor
                            ? defaultwithB[
                                Math.floor(Math.random() * defaultwithB.length)
                              ]
                            : defautOnlyB[
                                Math.floor(Math.random() * defautOnlyB.length)
                              ]
                        }
                        viewport={{ root: viewportRoot, amount: 0.5 }}
                        transition={{ delay: Math.random() * 1 }}
                        className={`
                                    ${
                                      width
                                        ? `w-${width}`
                                        : `w-${Math.floor(Math.random() * 3)}`
                                    } 
                                    ${
                                      height
                                        ? `h-${height}`
                                        : `h-${Math.floor(Math.random() * 3)}`
                                    } rounded-full`}
                        style={color.color}
                      ></motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>
        {/* Part 2 Start */}

        <div key={`randomDist2-${location}-${location}`} className="flex flex-col gap-1">
          {randomDist2.map((line, lineIndex) => {
            return (
                <motion.div
                  key={`randomDist2-${lineIndex}-${location}`}
                  className={`flex items-center justify-evenly gap-${gapLine} `}
                >
                  {line.map((color, colorIndex) => (
                    <motion.div
                      key={`randomDist2-color-${colorIndex}-${lineIndex}-${location}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileInView={
                        color.color.border || color.color.borderColor
                          ? defaultwithB[
                              Math.floor(Math.random() * defaultwithB.length)
                            ]
                          : defautOnlyB[
                              Math.floor(Math.random() * defautOnlyB.length)
                            ]
                      }
                      viewport={{ root: viewportRoot, amount: 0.5 }}
                      transition={{ delay: Math.random() * 1 }}
                      className={` 
                                ${
                                  width
                                    ? `w-${width}`
                                    : `w-${Math.floor(Math.random() * 3)}`
                                } 
                                ${
                                  height
                                    ? `h-${height}`
                                    : `h-${Math.floor(Math.random() * 3)}`
                                } rounded-full`}
                      style={color.color}
                    ></motion.div>
                  ))}
                </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dots;
