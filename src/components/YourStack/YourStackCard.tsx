import  { type Dispatch, type SetStateAction } from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import { RiCloseLargeFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

interface yourStackCardProp{
    devStack:DevStackType
     devAddStacks:DevStackType[]
     setdevAddStack:Dispatch<SetStateAction<DevStackType[]>>

}

const YourStackCard = ({devStack,devAddStacks,setdevAddStack}:yourStackCardProp) => {
    const handleRemoveStack=()=>{
        const removeStack = devAddStacks.filter(devStac=> devStac.id !== devStack.id)
        setdevAddStack(removeStack);
         toast.error(`${devStack.name} is Successfully Remove`)


    }
    return (
        <div className='card bg-base-100 border-1 border-gray-200 w-80 h-20 rounded-xl py-4 px-4 mt-5 '>
          <div className="flex justify-between items-center">
             <div className="flex gap-5 items-center">
                <img className='w-10 h-8' src={devStack.icon} alt="" />
                <div>
                    <h1 className='text-md font-bold'>{devStack.name}</h1>
                    <p className='text-xs text-gray-400'>{devStack.category}</p>
                </div>
            </div>

              < RiCloseLargeFill className='text-xl text-gray-400'  onClick={handleRemoveStack} />

          </div>

         
        </div>
    );
};

export default YourStackCard;