import call from '../assets/call.png'
import location from '../assets/location.png';
import { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import ServiceHome from './ServiceHome';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const LandingPage = () => {
    const [open , setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <> 
        <section id='home' className='min-h-screen bg-gradient-to-tr from-white to-indigo-100'>
        <div className="flex flex-row justify-between bg-blue-200 rounded-b-3xl shadow-sm shadow-indigo-500 ">
           <p className="ml-5 mt-5 mb-5 flex text-gray-700"> <img className='size-4 mr-2 mt-1' src= {call} alt="img" /> Emergency : 987654321</p> 
           <p className="ml-5 mt-5 mr-10 flex  text-gray-700"> <img className='size-4 mr-2 mt-1 ' src={location} alt="img" /> Open daily: 8am - 11pm</p>
        </div>
        <div className='flex flex-row justify-between items-center relative'>
            <h2 className="text-blue-700 m-5 p-2 text-xl font-semibold">
                    Meenakshi <span className="text-green-500">Medicals</span> 
                    <p className="text-gray-400 text-sm pl-1">Medicare solutions</p>
            </h2>
            <button className='sm:hidden ' onClick={() => setOpen(!open)}>
                 <RiMenu3Line className='text-2xl text-gray-600 leading-none'/>
            </button>
                
                <ul 
                    className={`absolute right-0 top-full mt-2 bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg p-4 sm:static sm:flex sm:flex-row sm:space-x-20 space-y-3  text-green-500 font-semibold border-t-4 border-t-blue-500 sm:border-none ${open ? 'block' : 'hidden'} sm:mr-8 `}
                >
                    <li><Link to='/' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300' >Home</Link> </li>
                    <li> <Link to='/service' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300'>Services</Link></li>
                    <li> <Link to='/about' className=' hover:text-blue-500 border-b-4 border-transparent  hover:border-blue-400 transition-colors duration-300'>About</Link></li>
                     <li><Link to='/contact' >
                        <span className="inline-block border-b-4 border-transparent hover:border-blue-500">Contact</span>
                    </Link></li>
                </ul>
        </div>

        <div className=' grid grid-cols-1 sm:ml-10 mt-32 justify-center items-center'>

            <motion.h2 
                className='text-4xl p-1  text-indigo-400 font-semibold text-center' 
                initial = {{y:40,opacity:0}}
                animate = {{y:0,opacity:1}}
                transition={{duration:0.8, delay:0.3}}    
            >   
                Your Health , Our Priority
            </motion.h2>
               <motion.p
                 className=' text-gray-500 p-1 mt-2 text-sm md:text-lg mx-4 md:mx-0 text-center'
                 initial={{y:40,opacity:0}}
                 animate = {{y:0,opacity:1}}
                 transition={{duration:0.8,delay:0.5}}
                > 
                    Welcome to Meenakshi Medicals <br /> Your trusted neighborhood medical
                shop and pharmacy. <br /> We provide quality healthcare products,
                medicines, and professional consultation all in one place.</motion.p>
        </div>

        <motion.div 
           className='flex flex-col justify-center items-center mt-8'
        //    whileHover={{scale:1.1}}
        //    whileTap={{scale:0.95}}
           initial = {{y:40,opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{duration:0.8,delay:0.8}}
        >
        <button onClick={()=>navigate('/service')} className='bg-green-600 text-white py-2  hover:bg-green-500 transition'>Explore now</button>
        </motion.div>
        </section>
        <ServiceHome />
        </>
    )
}

export default LandingPage;