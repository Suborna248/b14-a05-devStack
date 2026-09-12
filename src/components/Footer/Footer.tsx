
import logo from "../../assets/logo-text.png"

const Footer = () => {
    return (
        <div className='mt-18 container mx-auto '>

            {/* footer */}
            <div className='grid grid-cols-1 md:grid-cols-4  md:text-left text-center'>

                <div className='space-y-3'>
                    <img src={logo} className='  w-26 h-10 object-contain md:ml-0  ml-54' alt="" />
                    <p className='text-gray-400'>Curated tools, technologies, and resources for developers building 
modern software.</p>
                    <ul className='flex gap-3 items-center md:justify-start justify-center text-center'>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Linkdin</li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h2 className='uppercase font-bold'>Product</h2>
                    <p className='text-gray-400'>Home</p>
                    <p className='text-gray-400' >Technologies</p>
                    <p className='text-gray-400' >Projects</p>
                </div>

                <div className='space-y-3'>
                    <h2 className='uppercase font-bold'>Company</h2>
                    <p className='text-gray-400'>About</p>
                    <p className='text-gray-400'>Contact</p>
                    <p className='text-gray-400'>Careers</p>
                </div>

                <div className='space-y-3'>
                    <h2 className='uppercase font-bold'>Legal</h2>
                    <p className='text-gray-400'>Privacy Policy</p>
                    <p className='text-gray-400'>Terms of Service</p>
                </div>





            </div> 

 <div className="divider"></div>
            <footer className="footer sm:footer-horizontal bg-white text-gray-400 items-center py-3 pb-7  container mx-auto md:ml-0  ml-36">
  <aside className="grid-flow-col items-center flex  ">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
  <div className='flex gap-5  items-center text-gray-400 justify-between ml-10 md:ml-0'>
    <p>Privacy</p>
    <p>Term Policy</p>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;