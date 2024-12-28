const list1 = [
  "User agreement",
  "Contacts",
  "Delivery",
  "FAQ",
  "Become a partner",
  "Become a courier",
  "Eats for Business",
];

const list2 = [
  "Plastic recycling",
  "Order food in the Yandex Go app",
  "Feedback",
];
const Footer = () => {
  return (
    <div className='bg-neutral-100 h-[36rem]'>
      <div className='max-w-screen-xl h-full w-full mx-auto '>
        <div className='h-[15rem] flex items-center max-w-5xl px-6'>
          <div className='space-y-4'>
            <p>Even easier in the app</p>
            <div className='flex items-center space-x-2 flex-1 text-neutral-500 font-semibold'>
              <button className='flex items-center space-x-2 border-0 ring-1 ring-neutral-400 px-3 py-1.5'>
                <img src='/logos/apple.png' alt='' className='h-6 w-6' />
                <p className='capitalize text-xs'>App Store</p>
              </button>
              <button className='flex items-center space-x-2 border-0 ring-1 ring-neutral-400 px-3 py-2'>
                <img src='/logos/playstore.png' alt='' className='h-5 w-5' />
                <p className='uppercase text-xs'>Play Store</p>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className='h-[15rem] flex items-center justify-end px-6'>
          <div className='space-y-4'>
            <h1 className='text-lg font-bold text-neutral-700'>
              Company information
            </h1>
            <ul className='flex items-center flex-wrap gap-2 text-neutral-400/90 text-sm'>
              {list1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className='flex items-center flex-wrap  gap-2 text-neutral-400/90 text-sm'>
              {list2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-between h-[6rem]  py-10 px-6   bg-neutral-100'>
          <p className='text-xs text-neutral-400'>2018-2024 Yandex Eats LLC</p>
          <p className='text-xs text-neutral-400'>Project for Yandex</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
