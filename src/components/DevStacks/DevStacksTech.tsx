import  {useState} from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import DevStacks from './DevStacks';
import YourStack from '../YourStack/YourStack';

interface DevStacksTechProp{
    devStackPromise:Promise<DevStackType[]>
    
}

const DevStacksTech = ({devStackPromise}:DevStacksTechProp) => {
    const [devAddStacks ,setdevAddStack]=useState<DevStackType[]>([]);
    
    return (
        <div>
            <div className='mx-auto container mt-12 md:text-left text-center'>
                <h2 className='text-3xl font-extrabold'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
                <p className='text-lg text-[#64748B]'>Pick one technology per category to build your ideal stack.</p>
            </div>


            <div className='flex  flex-col md:flex-row gap-10 mt-10 container mx-auto'>
                <DevStacks devStackPromise={devStackPromise} devAddStacks ={devAddStacks} setdevAddStack={setdevAddStack} ></DevStacks>
                <YourStack devAddStacks ={devAddStacks} setdevAddStack={setdevAddStack}></YourStack>


            </div>
            
        </div>
    );
};

export default DevStacksTech;