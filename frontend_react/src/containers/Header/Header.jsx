import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'>
      <div className='app__header-badge'>
        <div className='flex badge-cmp app__flex'>
          <span className='animate-pulse'>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className=' text-xl lg:text-3xl font-semibold text-blue-700 '>Hello, I am</p>
            <h1 className='text-xl lg:text-7xl font-semibold shadow-pop-tr text-blue-800 shadow-pop-tr '>Divyasimha HR Jois</h1>
          </div>
        </div>

        <div className='group tag-cmp app__flex shadow-pop-tr'>
          <p className='text-xl font-mono text-slate-900 group-hover:text-indigo-900'>Web Developer</p>
          <p className='text-xl font-mono text-slate-900 group-hover:text-indigo-900'>Freelancer</p>
        </div>
      </div>
    </motion.div>

    <div className="flex flex-col-reverse place-items-center">
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}>
        <div className='app__flex tag-cmp'>
          <p className=' text-2xl w-96 font-mono p-3 text-justify my-10 shadow-pop-tr rounded-3xl'>
            Hey you! where you looking my friend this is my preferred weapons
            that I use on a daily basis. oh the guy who's working, that's me. 
          </p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className=''>
        <img className="w-40 rounded-xl mt-10 " src={images.profile1} alt="" />
      </motion.div>
    </div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'>
      {[images.typescript, images.tailwind, images.javascript].map(
        (circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg' />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
