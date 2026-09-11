import React from 'react';
import logo from "../../assets/logo-text.png"

const Footer = () => {
    return (
        <div className='mt-14 container mx-auto '>

            {/* footer */}
            <div className='grid grid-cols-1 md:grid-cols-4 '>

                <div className='space-y-3'>
                    <img src={logo} className='w-26 h-10 object-contain' alt="" />
                    <p className='text-[#475569]'>Curated tools, technologies, and resources for developers building <br />
modern software.</p>
                    <ul className='flex gap-3 items-center'>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Linkdin</li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h2 className='uppercase font-bold'>Product</h2>
                    <p className='text-[#475569]'>Home</p>
                    <p className='text-[#475569]' >Technologies</p>
                    <p className='text-[#475569]' >Projects</p>
                </div>

                <div className='space-y-3'>
                    <h2 className='uppercase font-bold'>Company</h2>
                    <p className='text-[#475569]'>About</p>
                    <p className='text-[#475569]'>Contact</p>
                    <p className='text-[#475569]'>Careers</p>
                </div>

                <div className='space-y-3'>
                    <h2 className='uppercase font-bold'>Legal</h2>
                    <p className='text-[#475569]'>Privacy Policy</p>
                    <p className='text-[#475569]'>Terms of Service</p>
                </div>





            </div> 


            <footer className="footer sm:footer-horizontal bg-white text-gray-400 items-center  pt-12 container mx-auto">
  <aside className="grid-flow-col items-center flex">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
  <div className='flex gap-5  items-center text-gray-400 justify-between'>
    <p>Privacy</p>
    <p>Term Policy</p>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;