import React, { use, type Dispatch, type SetStateAction } from 'react';
import type { DevStackType } from '../../Type/DevStackType';
import DevStackCards from './DevStackCards';

interface DevStacksProp {
    
        devStackPromise:Promise<DevStackType[]>
        devAddStacks:DevStackType[]
        setdevAddStack:Dispatch<SetStateAction<DevStackType[]>>
        
   
}

const DevStacks = ({devStackPromise,devAddStacks,setdevAddStack}:DevStacksProp) => {
    const devStacks = use(devStackPromise);
   
    return (
        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">

              {
                devStacks.map((devStack:DevStackType)=><DevStackCards devStack={devStack} key={devStack.id} devAddStacks={devAddStacks} setdevAddStack={setdevAddStack}></DevStackCards>)
              }
          </div>
            
        </div>
    );
};

export default DevStacks;