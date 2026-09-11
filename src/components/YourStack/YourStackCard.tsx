import React from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import { RiCloseLargeFill } from 'react-icons/ri';

interface yourStackCardProp{
    devStack:DevStackType

}

const YourStackCard = ({devStack}:yourStackCardProp) => {
    return (
        <div className='card bg-base-100 border-1 border-gray-200 w-80 h-20 rounded-xl py-4 px-4 mt-5 '>
          <div className="flex justify-between items-center">
             <div className="flex gap-5 items-center">
                <img className='w-10 h-8' src={devStack.icon} alt="" />
                <div>
                    <h1 className='text-md font-bold'>{devStack.name}</h1>
                    <p className='text-xs'>{devStack.category}</p>
                </div>
            </div>

              <RiCloseLargeFill />

          </div>
        </div>
    );
};

export default YourStackCard;