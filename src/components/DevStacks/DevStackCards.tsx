import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import { GoStarFill } from 'react-icons/go';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';
interface DevStackCardsProps {
    devStack:DevStackType
    devAddStacks:DevStackType[]
    setdevAddStack:Dispatch<SetStateAction<DevStackType[]>>
}

const DevStackCards = ({devStack,devAddStacks,setdevAddStack}:DevStackCardsProps) => {
   

    const isAdded = devAddStacks.some(
  (stack) => stack.id === devStack.id
);
  
    const handledevAddStack =()=>{

        setdevAddStack([...devAddStacks,devStack])
       toast.success(`${devStack.name} is Successfully added`)
        

    }
    return (
        <div className='container mx-auto'>

       <div className={` ${isAdded ? "py-10 px-3 bg-pink-50 h-96  w-100  md:w-85 shadow-sm border-1 border-pink-500 rounded-2xl":"py-10 px-3 bg-base-100 h-96  w-100  md:w-85 shadow-sm border-1 border-gray-200 rounded-2xl"}`}>
     <div className='flex justify-between'>
    <img
      className='w-24 h-10'
      src={devStack.icon}
      alt="Shoes" />

      <p className='w-25 h-10 text-lg text-center py-1   border rounded-full border-amber-300 bg-amber-50 text-amber-500'>{devStack.badge}</p>

  </div>
  
  <div className="card-body">
   <h1 className='font-bold text-xl'>{devStack.name}</h1>
  <p className='text-sm text-[#64748B]'>{devStack.description}</p>
  <div className="divider"></div>
  <div className='flex gap-3 justify-between items-center '>
    <p className='bg-base-200 px-3 w-8 py-1 rounded-xl'>{devStack.category}</p>
    <p className='ml-5'>{devStack.difficulty}</p>
    <span className='flex items-center gap-1'><GoStarFill className='text-[#FFEA00]' />{devStack.rating}</span>

  </div>
    <div className="card-actions justify-center mt-5">
     <button disabled={isAdded} onClick={handledevAddStack} className={`btn ${isAdded ?"bg-pink-100 text-white border-pink-200 w-full":"btn btn-neutral w-full"}`} > 
         {
             isAdded ? (
                <span className=" flex text-pink-600 font-semibold items-center gap-1">
                  <TiTick className='text-xl' />
                  Added to Stack
                </span>
              ) : (
                'Add to Stack'
              )}
</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default DevStackCards;