import Container from "@/components/Container";
import heroImage from "../../assets/images/heroimage1.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import donation from "../../assets/images/donation.avif";
const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const Banner = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-2xl lg:text-5xl font-bold text-nowrap mt-16"
            variants={introChildren}
          >
            <span className="text-white">
              {" "}
              Doante Now <span className="text-blue-400">For</span>
            </span>
            <br />
            <span className="text-white">Needy People</span>
          </motion.h1>

          <motion.div variants={introChildren}>
            <Button
              className=" mt-10 w-full px-5 py-2  text-sm font-medium text-white
           capitalize transition-colors duration-300 transform bg-[#E37423] rounded-md
           lg:w-auto hover:bg-[#E37423] focus:outline-none focus:bg-[#E37423]"
            >
              Start Donating
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className="h-[95%] object-contain" src={donation} alt="" />
        </motion.div>
      </Container>
    </div>
    // <div className="overflow-hidden ">
    //   <header>
    //     <div
    //       className="w-full bg-center bg-cover h-[45rem]"
    //       style={{ backgroundImage: `url(${heroImage})` }}
    //     >
    //       <div className="flex items-center justify-center w-full h-full ">
    //         <motion.div variants={intro} initial="hidden" animate="visible"><
    //         <motion.div className="text-center">
    //           <h1 className="text-3xl font-semibold text-white lg:text-4xl">
    //             Doante Now <span className="text-blue-400">For</span> Needy
    //             People
    //           </h1>
    //           <button
    //             className="w-full px-5 py-2 mt-4 text-sm font-medium text-white
    //           capitalize transition-colors duration-300 transform bg-[#E37423] rounded-md
    //           lg:w-auto hover:bg-[#E37423] focus:outline-none focus:bg-[#E37423]"
    //           >
    //             Start Donating
    //           </button>
    //         </motion.div>
    //        </motion.div>
    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
};

export default Banner;
