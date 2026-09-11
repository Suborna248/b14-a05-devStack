import React, { type Dispatch, type SetStateAction } from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import YourStackCard from './YourStackCard';
interface yourStackProp{
       devAddStacks:DevStackType[]
    setdevAddStack:Dispatch<SetStateAction<DevStackType[]>>
}
const YourStack = ({devAddStacks,setdevAddStack}:yourStackProp) => {
    console.log(devAddStacks)
    return (
        <div>

            <div className='w-96  rounded-xl shadow-xl border-2 border-gray-200 py-5 px-5'>
                <h1 className='text-lg font-bold '>Your Stack</h1>
                <p>{`${devAddStacks.length} Technology Selected`}</p> 

                <div>
                    {
                        devAddStacks.map((devStack)=><YourStackCard devStack={devStack} key={devStack.id}></YourStackCard>)
                    }
                </div>




            </div>
            
        </div>
    );
};

export default YourStack;