/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:w-1/2">
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M REDA LAAOUAJ
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Designing for the Future, One Website at a Time.",
              1000,
              "Building Seamless Full Stack Solutions.",
              1000,
              "Empowering Your Business with Full Stack Expertise.",
              1000,
              "We Create, You Conquer.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
          A Full Stack Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product.
          </p>
          <button className="btn py-4 px-16">PROJECTS</button>


        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a target="_blank" rel="noreferrer"
            href="https://www.linkedin.com/in/reda-laaouaj-24b0331b6/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={'assets/socials/linkedin.svg'} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a target="_blank" rel="noreferrer"
            href="https://github.com/Redalaaouaj"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={'assets/socials/github.svg'} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a target="_blank" rel="noreferrer"
            href="https://wa.link/8xo91c"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={'assets/socials/whatsapp.svg'} alt="" className="w-10 h-10" />{/* whatsapp */}
          </a>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
