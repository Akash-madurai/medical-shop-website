import call from '../assets/call.png'
import location from '../assets/location.png';
import { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import ServiceHome from './ServiceHome';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [open , setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <> 
        <section id='home' className='min-h-screen bg-gradient-to-tr from-white to-indigo-100'>
        <div className="flex flex-row justify-between bg-slate-300 rounded-b-3xl shadow-sm shadow-indigo-500 ">
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
                
                <ul className={`absolute right-0 top-full mt-2 bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg p-4 sm:static sm:flex sm:flex-row sm:space-x-20 space-y-3  text-green-500 font-semibold border-t-4 border-t-blue-500 sm:border-none ${open ? 'block' : 'hidden'} sm:mr-8 `}>
                    <li><Link to='/' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300' >Home</Link> </li>
                    <li> <Link to='/service' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300'>Services</Link></li>
                    <li> <Link to='/about' className=' hover:text-blue-500 border-b-4 border-transparent  hover:border-blue-400 transition-colors duration-300'>About</Link></li>
                     <li><Link to='/contact' >
                        <span className="inline-block border-b-4 border-transparent hover:border-blue-500">Contact</span>
                    </Link></li>
                </ul>
        </div>

        <div className='flex flex-col ml-5 sm:ml-10 mt-32'>

            <h2 className='text-4xl p-1 sm:p-2 text-indigo-400 font-semibold'>Your Health , Our Priority</h2>
               <p className='sm:p-2 text-gray-500 p-1 text-xl'>Welcome to Meenakshi Medicals - Your trusted neighborhood medical <br />
                shop and pharmacy. We provide quality healthcare products, <br />
                medicines, and professional consultation all in one place.</p>
        </div>
        <button onClick={()=>navigate('/service')} className='bg-green-600 text-white px-6 py-2 ml-6 mt-4 sm:ml-12 hover:bg-green-500 transition'>Explore now</button>
        </section>

        <ServiceHome />
        </>
    )
}

export default LandingPage;