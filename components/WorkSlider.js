import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

export const workSlider = {
  slides: [
    {
      images: [
        { title: 'STI TRACK', path: '/Project1.png', link: 'https://github.com/MuhamadRafliShidiq/Aplikasi_STI' },
        { title: 'Website Desa', path: '/1.png', link: 'https://github.com/MuhamadRafliShidiq/Desa-Jatijaya' },
        { title: 'Website Saku-Ku', path: '/4.png', link: '/projects/e-arsip' },
        { title: 'Rent Cars App', path: '/3.png', link: '/projects/rent-cars' },
      ],
    },
    {
      images: [
        { title: 'Sertifikat Office Application', path: '/5.png', link: '/projects/thumb4' },
        { title: 'Sertifikat UX Designer', path: '/9.png', link: '/projects/project-h' },
        { title: 'Sertifikat Dasar NodeJS dan NPM', path: '/8.png', link: '/projects/thumb1' },
        { title: 'Portfolio', path: '/2.png', link: '/projects/portfolio' },
      ],
    },
  ],
};

const WorkSlider = () => {
  if (!workSlider.slides || workSlider.slides.length === 0) {
    return <p className="text-center text-gray-500">No projects available</p>;
  }

  return (
    <Swiper spaceBetween={10} pagination={{ clickable: true }} modules={[Pagination]} className="h-[280px] sm:h-[480px]">
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <Link key={`${slideIndex}-${imageIndex}`} href={image.link} legacyBehavior>
                <a className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  {/* Image */}
                  <Image
                    src={image.path}
                    width={500}
                    height={400}
                    alt={image.title}
                    className="transition-transform duration-300 transform group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>

                  {/* Title & Icon */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-transform duration-300">
                    <div className="flex items-center gap-x-2 text-[10px]">
                      <div className="delay-100">PROJECT</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        {image.title.toUpperCase()}
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
