import React from 'react';
import Logo from '../../assets/logo-text.png'

const Navbar = () => {
    return (
        <div className=" sticky top-0 z-50 bg-white border-b-2 border-gray-300">
            <div className='flex justify-between items-center container mx-auto py-6'>
                <img src={Logo} className="w-42 h-10 object-contain" alt="" />

                <nav className="hidden md:block">
                    <ul className="flex gap-6 items-center">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav> 

                <div className=' flex gap-4 items-center'>
                    <button className="btn">SingIn</button>
                    <button className="btn btn-secondary rounded-xl">SignUp</button>
                </div>




            </div>
            
        </div>
    );
};

export default Navbar;