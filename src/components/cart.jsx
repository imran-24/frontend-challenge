import { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);

  return (
    <div className='w-[20rem]  flex-col  h-[calc(100vh-6rem)] sticky top-24 bottom-0 hidden lg:flex z-20 rounded-3xl p-3 bg-white'>
      <p className="text-xl font-semibold">Cart</p>
      <div className='flex flex-col items-center justify-center  space-y-2 h-full'>
        <img src='/logos/svg.svg' alt='' className='aspect-square ' />
        <p className='text-xl font-medium'>
          {items.length ? items : "Your cart is currently empty"}
        </p>
      </div>
    </div>
  );
};

export default Cart;
