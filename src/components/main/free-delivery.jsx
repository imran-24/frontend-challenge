const FreeDelivery = () => {
  return (
    <div>
      <div className='relative'>
        <div className='p-2 flex items-center  bg-green-100 rounded-3xl space-x-3 peer'>
          <img
            src='https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png'
            alt=''
            className='h-16 w-16'
          />
          <p className='text-green-500'>Free delivery – on any order</p>
        </div>
        <div className='w-full  hidden peer-hover:block'>
          <div className='w-fit absolute bg-white rounded-3xl left-0 right-0 p-6 mx-auto drop-shadow-xl -bottom-20'>
            <p className='text-xl'>Free delivery.</p>
            <p>on any order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDelivery;
