// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-5 xl:mb-8 z-10'>
      <Link
        href={'/'}
        className='relative w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]'
        />
        <HiArrowRight className='absolute text-3xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
