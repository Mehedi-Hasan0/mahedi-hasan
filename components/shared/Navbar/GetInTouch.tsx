import { motion } from "framer-motion";
import Link from "next/link";

const getInTouch = () => {
  return (
    <div className="md:col-span-5 lg:col-span-6 2xl:col-start-2 content-end">
      <div className="flex flex-col gap-3">
        <motion.p
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              opacity: {
                duration: 1.2,
              },
              y: {
                duration: 1,
              },
              delay: 0.3,
              ease: [0.215, 0.61, 0.355, 1],
            },
          }}
          exit={{
            y: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
          }}
          transition={{ ease: [0.76, 0, 0.24, 1] }}
          className="text-purple text-[10px] sm:text-xs md:text-[8px] 2xl:text-sm font-bold uppercase"
        >
          Get in touch
        </motion.p>

        {/* contact info */}
        <motion.div
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              opacity: {
                duration: 1.2,
                delay: 0.3,
              },
              y: {
                duration: 1,
              },
              delay: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            },
          }}
          transition={{ ease: [0.76, 0, 0.24, 1] }}
          exit={{
            y: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
          }}
          className="text-textBlack"
        >
          <Link
            href="mailto:dev.mahedihasan@gmail.com"
            className="text-xl md:text-lg xl:text-2xl 2xl:text-3xl tracking-[-.05em] leading-[20px]"
          >
            dev.mahedihasan@gmail.com
          </Link>
          <p className="text-xl md:text-lg xl:text-2xl 2xl:text-3xl tracking-[-.05em] leading-[20px]">
            (+880)1575333921
          </p>
        </motion.div>
        <motion.span
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              opacity: {
                duration: 1.2,
                delay: 0.6,
              },
              y: {
                duration: 1,
              },
              delay: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            },
          }}
          transition={{ ease: [0.76, 0, 0.24, 1] }}
          exit={{
            y: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
          }}
          className="text-xs 2xl:text-sm text-textBlack font-medium tracking-[-.05em] leading-[15px]"
        >
          Dhaka Udddan 01/36 <br />
          Mohammadpur, Dhaka
        </motion.span>
      </div>
    </div>
  );
};

export default getInTouch;
