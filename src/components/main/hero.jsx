import { CircleAlert, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className='aspect-[2/1] lg:aspect-[2/1.2]  relative'>
      <img
        src='https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg'
        className='rounded-3xl h-full w-full object-cover'
        alt=''
      />
      <div className='absolute inset-0 bg-black/30 rounded-3xl'></div>
      <div className='absolute bottom-10 left-10'>
        <h1 className='text-4xl text-neutral-100 mb-2 font-semibold'>KFC Sputnik</h1>
        <div className='flex items-center space-x-2'>
          <button className='border-none hover:border-none transition-transform ease-in-out ring-1  hover:ring-2 ring-neutral-200    w-fit bg-neutral-200 hover:bg-neutral-100 cursor-pointer rounded-xl p-2 flex items-center space-x-3'>
            <Star className='text-black fill-black' size={25} />

            <div className='reltive flex items-center gap-2'>
              <span className='text-lg'>4.7</span>
              <span className='font-light text-sm text-neutral-400'>200+</span>
            </div>
          </button>
          <button className='border-none hover:border-none ring-1 hover:ring-2 ring-neutral-200    w-fit bg-neutral-200 hover:bg-neutral-100 cursor-pointer rounded-xl p-2 flex items-center'>
            <CircleAlert size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
