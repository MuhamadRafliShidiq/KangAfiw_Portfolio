/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from 'react-icons/fa';

import {
  SiLaravel,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiAdobephotoshop,
} from 'react-icons/si';

// about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />,
          <SiLaravel />, <SiMongodb />, <SiTailwindcss />, <SiMysql />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      { title: 'Intern - PT. PLN UITJBT', stage: 'Sept 2024 - Jan 2025' },
      { title: 'PDD - KKNTM', stage: 'July 2024 - August 2024' },
      { title: 'Chairman - Organization LMA', stage: '2023 - 2024' },
      { title: 'Secretary - Ponpes Riyadlul Huda', stage: '2022 - 2024' },
    ],
  },
  {
    title: 'credentials',
    info: [
      { title: 'Informatics Management Diploma - Politeknik LP3I', stage: '2022 - 2025' },
      { title: 'Certified UX Designer - Online Training Program', stage: '2022' },
      { title: 'MAN 1 Tasikmalaya', stage: '2018 - 2021' },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-20 xl:text-left relative'>
      <Circles />

      <div className='container mx-auto h-full flex flex-col xl:flex-row items-center gap-x-12'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center px-4 md:px-8'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-2xl md:text-4xl'
          >
            Creating <span className='text-accent'>innovative</span>
            <br /> solutions for impactful results.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm md:text-base'
          >
            I am an Information Management student skilled in web and mobile development,
            with experience in React, NodeJS, and Flutter.
          </motion.p>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-auto'
        >
          <div className='flex flex-wrap gap-4 xl:gap-8 mx-auto xl:mx-0 mb-4 text-center md:text-left'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize text-sm md:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0
                ${index === itemIndex && 'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'}`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center md:items-start text-center md:text-left'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0 text-sm'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div className='text-sm'>{item.stage}</div>
                <div className='flex gap-x-4 text-lg'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='text-white'>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
