import { Globe, Navigation, Search, Shell } from "lucide-react";

const Navbar = () => {
  return (
    <div className='z-50 bg-neutral-100 shadow-md p-4 sticky top-0'>
      <div className=' flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Shell size={40} className='text-black' />
          <div className='relative'>
            <input
              className='border-none outline-none ring-[2px] rounded-xl p-2 pl-10  ring-gray-300 focus-visible:ring-neutral-400 transition-colors duration-300'
              type='text'
              placeholder='Search'
            />
            <Search
              size={20}
              className='text-gray-500 absolute top-0 bottom-0 ml-2 my-auto '
            />
          </div>
          <div>
            <button className='hidden md:flex items-center text-black px-4 py-2 bg-yellow-300 border-none hover:ring-1 ring-neutral-300  rounded-lg'>
              <Navigation size={20} className='text-black fill-black mr-2' />{" "}
              Enter delivery location
            </button>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className="flex flex-col items-center">
            <Globe size={22} className='text-black shrink-0' />
            <p className='text-sm'> English</p>
          </div>
          <button className='text-black p-2 w-20 font-medium bg-neutral-300/70 border-none ring-1 ring-neutral-300  rounded-lg'>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
