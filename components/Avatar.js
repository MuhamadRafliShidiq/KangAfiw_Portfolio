// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <figure className='w-full max-w-[500px] max-h-auto pb-0 ml-auto mr-[27px]'>
        <Image
          src={'/aku1.png'}
          width={737}
          height={678}
          alt='Muhamad Rafli Shidiq'
          className='translate-z-0 w-full h-full'
        />
      </figure>
    </div>
  );
};

export default Avatar;
