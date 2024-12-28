/* eslint-disable react/prop-types */

import { Plus } from "lucide-react";

const Food = ({ food }) => {
return (
    <div className='bg-white p-4 rounded-xl relative'>
        <div className='flex flex-col justify-between h-full'>
            <img src={food.picture} alt='' className='aspect-square rounded-xl' />
            <div className='mt-4'>
                <p className='text-2xl font-semibold'>${food.price}</p>
                <p className='text-base'>{food.name}</p>
            </div>
            <div className="mt-6">
                <button className='bg-neutral-100 w-full p-3 border-none rounded-xl flex items-center justify-center'>
                    <Plus size={20} className='mr-2' />
                    <p>Add</p>
                </button>
            </div>
        </div>
    </div>
);
};

export default Food;
