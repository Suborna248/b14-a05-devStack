import React, { use } from 'react';
import type { DevStackType } from '../../Type/DevStackType';

interface DevStacksTechProp{
    devStackPromise:Promise<DevStackType[]>
}

const DevStacksTech = ({devStackPromise}:DevStacksTechProp) => {
    const devStacks = use(devStackPromise);
    console.log(devStacks);
    return (
        <div>
            <div className='mx-auto container mt-12'>
                <h2 className='text-3xl font-extrabold'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
                <p className='text-lg text-[#64748B]'>Pick one technology per category to build your ideal stack.</p>
            </div>
            
        </div>
    );
};

export default DevStacksTech;