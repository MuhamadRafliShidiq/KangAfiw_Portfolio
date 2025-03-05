// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-24 md:py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex flex-col xl:flex-row gap-8 items-center'>
          {/* text */}
          <div className='text-center flex flex-col xl:w-[30vw] lg:text-left'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 text-3xl md:text-4xl'
            >
              My work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[400px] mx-auto lg:mx-0 text-sm md:text-base'
            >
              My Project Portfolio showcases my expertise in front-end & back-end development.
              With a strong focus on UI/UX design and project management, I deliver
              innovative solutions for modern web and mobile applications.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[60%] max-w-[90%] sm:max-w-[80%] mx-auto'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
