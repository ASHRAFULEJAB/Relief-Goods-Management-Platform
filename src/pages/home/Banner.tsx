import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bannerHero from "../../assets/images/bannerhero.png";
import heroImage from "../../assets/images/heroimage1.png";
import logo from "../../assets/images/logo.png";
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
  const [showLogo, setShowLogo] = useState(true);

  // Hide the logo after a delay or after loading is done
  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "580px",
      }}
    >
      <div
        className="  w-full max-w-[1230px]  px-[20px] mx-auto
      grid grid-cols-1 lg:grid-cols-2 place-content-center"
      >
        <div className="lg:flex">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="mt-48"
          >
            <motion.h1
              className="text-2xl lg:text-5xl font-semibold text-nowrap mt-0"
              variants={introChildren}
            >
              <span className="text-white">
                {" "}
                Empowering hope <span className="text-blue-400">futures</span>
              </span>
              <br />
              <span className="text-white">lives through giving</span>
            </motion.h1>
            <motion.p className="text-white text-wrap">
              Join us in a collective journey of compassion and impact as we
              work hand in hand, transforming lives and nurturing hope around
              the world.
            </motion.p>

            <motion.div variants={introChildren}>
              <Button
                className=" mt-3 w-full px-5 py-2  text-sm font-medium text-white
           capitalize transition-colors duration-300 transform bg-[#E37423] rounded-md
           lg:w-auto hover:bg-[#E37423] focus:outline-none focus:bg-[#E37423]"
              >
                Make Donation
              </Button>
            </motion.div>
          </motion.div>
          <motion.img
            src={bannerHero}
            alt=""
            className=" w-full lg:ml-6 h-[500px] lg:mt-20"
          />
        </div>

        {showLogo && (
          <motion.div
            className="mt-10 w-3/4 lg:w-full mx-auto"
            variants={laptop}
            initial="initial"
            animate="animate"
          >
            <img className="h-[45%] object-contain" src={logo} alt="" />
          </motion.div>
        )}
      </div>
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
