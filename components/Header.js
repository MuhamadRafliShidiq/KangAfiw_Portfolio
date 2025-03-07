// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-6 md:px-10 xl:px-16 h-[70px] md:h-[90px]'>
      <div className='container mx-auto flex justify-between items-center w-full'>
        {/* logo */}
        <Link href={'/'}>
          <Image
            src={'/1.svg'}
            width={180} // Ukuran lebih kecil untuk mobile
            height={40}
            alt='Logo'
            priority={true}
            className='ml-2 md:ml-10'
          />
        </Link>
        <Socials />
      </div>
    </header>
  );
};

export default Header;
