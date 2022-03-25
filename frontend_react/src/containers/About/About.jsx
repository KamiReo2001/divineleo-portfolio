import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts" ] ';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="text-5xl flex flex-col place-items-center md:hidden text-blue-500 animate-pulse">
        <span>Good Design</span> <span>Good Business</span>
      </h2>
      <h2 className='hidden md:block text-5xl'>
        I know That <span className='text-blue-700 underline'>Good Design</span>{" "}
        <br /> means{" "}
        <span className='text-blue-800 underline'>Good Business</span>{" "}
      </h2>

      <div className='flex flex-wrap justify-center items-center mt-10'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='w-96 flex flex-col justify-start items-start m-10 '
            key={about.title + index}>
            <img
              className='w-full border-8 border-blue-100 rounded-3xl shadow-lg hover:shadow-blue-200'
              src={urlFor(about.imgUrl)}
              alt={about.title}
            />
            <h2
              className='text-xl font-bold text-blue-700'
              style={{ marginTop: 20 }}>
              {" "}
              {about.title}
            </h2>
            <p
              className='text-[12px] italic text-sky-700'
              style={{ marginTop: 10 }}>
              {" "}
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
