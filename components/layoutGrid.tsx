"use state";
import { motion } from "framer-motion";

const LayoutImages = ({
  setId,
}: {
  setId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const images = [
    { src: "cars.jpeg" },
    { src: "landscape.jpeg" },
    { src: "lion.jpeg" },
    { src: "guitar.jpeg" },
  ];

  const setIdFunc = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const selectedId = e.currentTarget.id;
    setId(selectedId);
  };

  return (
    <>
      <div className=" lg:ml-4 -z-10 h-full  md:h-[65%] deskB:h-[80%] w-[90%] md:w-full py-4 grid grid-rows-4 grid-cols-7  grid-flow-col gap-2 md:gap-4">
        <motion.div
          layoutId={images[0].src}
          id={images[0].src}
          onClick={(e) => {
            setIdFunc(e);
          }}
          className="row-span-2 z-0 grayscale-[90%] flex items-center justify-center overflow-hidden col-span-4  hover:cursor-pointer rounded-xl"
        >
          <motion.img
            className={` object-cover rounded-xl `}
            src={`/${images[0].src}`}
            alt={"26669"}
          />
        </motion.div>
        <motion.div
          layoutId={images[1].src}
          id={images[1].src}
          onClick={(e) => {
            setIdFunc(e);
          }}
          className="col-span-3 grayscale-[90%] z-0 flex items-center justify-center row-span-2 overflow-hidden  hover:cursor-pointer rounded-xl"
        >
          <motion.img
            className={`object-cover rounded-xl `}
            src={`/${images[1].src}`}
            alt={`${images[1].src}`}
          />
        </motion.div>
        <motion.div
          layoutId={images[2].src}
          id={images[2].src}
          onClick={(e) => {
            setIdFunc(e);
          }}
          className="row-span-2 z-0 grayscale-[90%] flex items-center justify-center col-span-4 overflow-hidden  hover:cursor-pointer rounded-xl"
        >
          <motion.img
            className={`object-cover  rounded-xl `}
            src={`/${images[2].src}`}
            alt={`${images[2].src}`}
          />
        </motion.div>
        <motion.div
          layoutId={images[3].src}
          id={images[3].src}
          onClick={(e) => {
            setIdFunc(e);
          }}
          className="row-span-2 grayscale-[90%] z-0 flex items-center justify-center col-span-3 overflow-hidden  hover:cursor-pointer rounded-xl"
        >
          <motion.img
            className={`object-cover rounded-xl `}
            src={`/${images[3].src}`}
            alt={`${images[3].src}`}
          />
        </motion.div>
      </div>
    </>
  );
};

export default LayoutImages;
