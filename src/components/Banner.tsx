import React from 'react';
import heroImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div >

            <div className="  md:text-left sm:text-center flex flex-col md:flex-row gap-32  items-center container mx-auto md:mt-0 mt-5">
             {/*Left side */}
             <div className='max-w-[600px] space-y-7'>
                <h1 className="text-6xl font-extrabold">Build Your Ideal <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className="text-lg text-[#475569] max-w-[537px]">Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>

                <div className='flex gap-5 pt-5 md:justify-start  justify-center'>
                    <button className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white">Explore Technologies</button>
                    <button className='btn border-1 border-gray-300 px-14'>Lern More</button>
                </div>

             </div>

             {/* Right side */}
             <div>
               <img src={heroImg} alt="" />
             </div>





            </div>
            
        </div>
    );
};

export default Banner;