import React from 'react';
import type { DevStackType } from '../../Type/DevStackType';

interface DevStacksProp {
    
        devStackPromise:Promise<DevStackType[]>
   
}

const DevStacks = ({devStackPromise}:DevStacksProp) => {
    return (
        <div>
            
        </div>
    );
};

export default DevStacks;