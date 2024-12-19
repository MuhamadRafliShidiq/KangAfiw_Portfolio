// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
  RiTiktokLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://youtube.com/@rafli_officialchannel?si=4L7cKM3L73Fi_Jvv'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.tiktok.com/@muhamad_rafli_shidiq19?_t=8sGYbuB3w9d&_r=1'} className='hover:text-accent transition-all duration-300'>
        <RiTiktokLine />
      </Link>
      <Link href={'https://www.instagram.com/muhamadraflishidiq/profilecard/?igsh=ZjlnYXhndWdoMDg2'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/muhamad-rafli-shidiq-731114269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/MuhamadRafliShidiq'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://wa.me/6282134716388'} className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>

    </div>
  );
};

export default Socials;
