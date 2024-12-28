import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useCategoryStore } from "../../hooks/category-store";
import { menu } from "../../libs/utils";

// const menuItems = [
//   "What's New",
//   "Extras",
//   "Solo Baskets",
//   "Combos",
//   "Boxes",
//   "Burgers and Sandwiches",
//   "Combo Baskets",
//   "Juicy Chicken",
//   "Snacks",
//   "Drinks",
// ];

const Sidebar = () => {
  const categoryStore = useCategoryStore();
  const [active, setActive] = useState(categoryStore.current);

  console.log(menu);

  useEffect(() => {
    setActive(categoryStore.current);
  }, [categoryStore.current]);

  return (
    <div className='w-[15rem] sticky top-24 h-full overscroll-none  hidden lg:block z-20'>
      <button className=' flex items-center rounded-xl border-none outline-none bg-white px-4 py-2'>
        <ArrowLeft className='text-black mr-1' size={25} />
        <p className='font-medium text-black text-lg'>All restaurants</p>
      </button>
      <h2 className='text-xl font-semibold mt-6'>Menu</h2>
      <ul className='flex flex-col gap-3 mt-4'>
        {menu.map(({category, href}, index) => (
          <a
            key={index}
            href={`/#${href}`}
            className={` flex items-center  rounded-xl border-none outline-none px-4 py-2 transition-all ease-in-out duration-200 cursor-pointer ${
              active == category ? "bg-white" : "hover:bg-white/50 "
            }`}
          >
           {category}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
