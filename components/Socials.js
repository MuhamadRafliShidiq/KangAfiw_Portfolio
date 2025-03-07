'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RiMenuLine, RiYoutubeLine, RiInstagramLine, RiLinkedinBoxLine, RiWhatsappLine, RiTiktokLine, RiGithubLine } from 'react-icons/ri';

const Socials = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      {/* Mobile Button */}
      <div className='xl:hidden flex items-center'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-lg p-2 rounded-lg focus:outline-none'>
          <RiMenuLine size={24} />
        </button>
      </div>

      {/* Dropleft Menu */}
      {isOpen && (
        <div className='absolute top-1/2  -translate-y-1/2 -translate-x-full bg-transparent shadow-lg p-4 rounded-lg flex flex-row gap-3 xl:hidden'>
          <Link href='https://youtube.com/@rafli_officialchannel?si=4L7cKM3L73Fi_Jvv' className='hover:text-accent transition-all duration-300 flex flex-col items-center'>
            <RiYoutubeLine />
          </Link>
          <Link href='https://www.tiktok.com/@muhamad_rafli_shidiq19?_t=8sGYbuB3w9d&_r=1' className='hover:text-accent transition-all duration-300 flex flex-col items-center'>
            <RiTiktokLine />
          </Link>
          <Link href='https://www.instagram.com/muhamadraflishidiq/profilecard/?igsh=ZjlnYXhndWdoMDg2' className='hover:text-accent transition-all duration-300 flex flex-col items-center'>
            <RiInstagramLine />
          </Link>
          <Link href='https://www.linkedin.com/in/muhamad-rafli-shidiq-731114269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-accent transition-all duration-300 flex flex-col items-center'>
            <RiLinkedinBoxLine />
          </Link>
          <Link href='https://github.com/MuhamadRafliShidiq' className='hover:text-accent transition-all duration-300 flex flex-col items-center'>
            <RiGithubLine />
          </Link>
          <Link href='https://wa.me/6282134716388' className='hover:text-accent transition-all duration-300 flex flex-col items-center'>
            <RiWhatsappLine />
          </Link>
        </div>
      )}

      {/* Desktop View */}
      <div className='hidden xl:flex items-center gap-x-5 text-lg'>
        <Link href='https://youtube.com/@rafli_officialchannel?si=4L7cKM3L73Fi_Jvv' className='hover:text-accent transition-all duration-300'>
          <RiYoutubeLine />
        </Link>
        <Link href='https://www.tiktok.com/@muhamad_rafli_shidiq19?_t=8sGYbuB3w9d&_r=1' className='hover:text-accent transition-all duration-300'>
          <RiTiktokLine />
        </Link>
        <Link href='https://www.instagram.com/muhamadraflishidiq/profilecard/?igsh=ZjlnYXhndWdoMDg2' className='hover:text-accent transition-all duration-300'>
          <RiInstagramLine />
        </Link>
        <Link href='https://www.linkedin.com/in/muhamad-rafli-shidiq-731114269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:text-accent transition-all duration-300'>
          <RiLinkedinBoxLine />
        </Link>
        <Link href='https://github.com/MuhamadRafliShidiq' className='hover:text-accent transition-all duration-300'>
          <RiGithubLine />
        </Link>
        <Link href='https://wa.me/6282134716388' className='hover:text-accent transition-all duration-300'>
          <RiWhatsappLine />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
