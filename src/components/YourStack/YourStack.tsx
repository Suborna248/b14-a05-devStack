import React, { type Dispatch, type SetStateAction } from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import YourStackCard from './YourStackCard';
import { toast } from 'react-toastify';
interface yourStackProp{
       devAddStacks:DevStackType[]
    setdevAddStack:Dispatch<SetStateAction<DevStackType[]>>
}
const YourStack = ({devAddStacks,setdevAddStack}:yourStackProp) => {
    const handleRemoveAll =()=>{
        setdevAddStack([]);
        toast.error(`All Stack is Successfully Remove`)
    }
    if(devAddStacks.length=== 0){
        return <div className='w-96 h-55 rounded-xl shadow-xl border-2 border-gray-200 py-5 px-5'>
            <h1 className='text-lg font-bold '>Your Stack</h1>
            <p className='text-[#94A3B8]'>No technologies selected yet</p>
           <div className=' text-[#94A3B8] mt-8 w-80  h-20 py-5 px-7 text-center rounded-xl border-1 border-gray-200'>
            Your Stack is Empty
           </div>
          
        </div>
    }
    return (
        <div>

            <div className='w-96  rounded-xl shadow-xl border-2 border-gray-200 py-5 px-5'>
                <h1 className='text-lg font-bold '>Your Stack</h1>
                <p className='text-[#94A3B8]'>{`${devAddStacks.length} Technology Selected`}</p> 
                

                <div>
                    {
                        devAddStacks.map((devStack)=><YourStackCard devStack={devStack} key={devStack.id} devAddStacks={devAddStacks} setdevAddStack={setdevAddStack}></YourStackCard>)
                    }
                </div> 

                 <div>
            <button onClick={handleRemoveAll} className=" text-lg font-bold my-6 btn btn-outline btn-error w-80 bg-gradient-to-r from-[#D82C20]  to-[#ED8C85] bg-clip-text text-transparent">Remove All</button>
          </div>




            </div>
            
        </div>
    );
};

export default YourStack;