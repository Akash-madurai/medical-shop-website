import { FaAward, FaUsers, FaCapsules, FaClock } from "react-icons/fa";
import { PiPill, PiStethoscope, PiHeart, PiLightning } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Scrollview from "./Scrollview";

const Services = () => {

    const [open, setOpen] = useState(false);

    return(
      <>
        <div className='flex flex-row justify-between items-center relative'>
            <h2 className="text-blue-700 m-5 p-2 text-xl font-semibold">
                    Meenakshi <span className="text-green-500">Medicals</span> 
                <p className="text-gray-400 text-sm pl-1">Medicare solutions</p>
            </h2>
            <button className='sm:hidden ' onClick={() => setOpen(!open)}>
                <RiMenu3Line className='text-2xl text-gray-600 leading-none'/>
            </button>  
            <ul className={`absolute right-0 top-full mt-2 bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg p-4 sm:static sm:flex sm:flex-row sm:space-x-20 space-y-3  text-green-500 font-semibold border-t-4 border-t-blue-500 sm:border-none ${open ? 'block' : 'hidden'} sm:mr-8 `}>
                <li><Link to='/' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300' onClick={()=>setOpen(false)} >Home</Link> </li>
                <li> <Link to='/service' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300'>Services</Link></li>
                <li> <Link to='/about' className=' hover:text-blue-500 border-b-4 border-transparent  hover:border-blue-400 transition-colors duration-300'>About</Link></li>
                <li><Link to='/contact' >
                    <span className="inline-block border-b-4 border-transparent hover:border-blue-500">Contact</span>
                </Link></li>
            </ul>
        </div>

        <div className="border-t-2 border-gray-300 w-3/5 mx-auto mt-20"></div>

        <Scrollview>
        <div className=" bg-white py-10 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                <div>
                    <FaAward className="mx-auto text-4xl text-blue-600 mb-3" />
                    <h2 className="text-3xl font-bold  text-gray-600">10+</h2>
                    <p className="text-gray-500 text-sm">Years of Experience</p>
                </div>

                <div>
                    <FaUsers className="mx-auto text-4xl text-blue-600 mb-3" />
                    <h2 className="text-3xl font-bold  text-gray-600">4k+</h2>
                    <p className="text-gray-500 text-sm">Happy customers</p>
                </div>

                <div>
                    <FaCapsules className="mx-auto text-4xl text-blue-600 mb-3"/>
                    <h2 className="text-3xl font-bold text-gray-600">3000+</h2>
                    <p className="text-gray-500 text-sm">Products Available</p>
                </div>

                <div>
                    <FaClock className="mx-auto text-4xl text-blue-600 mb-3" />
                    <h2 className="text-3xl text-gray-600 font-bold">24/7</h2>
                    <p className="text-sm text-gray-500">Customer Support</p>
                </div>
            </div>
        </div>
        </Scrollview>

        <Scrollview>
        <div className="bg-white py-10 mt-10">
             <h2 className="mx-auto text-4xl text-blue-700 font-semibold text-center">Our <span className="text-green-500">Services</span> </h2>
             <p className="text-center text-gray-600 mt-2">We offer healthcare services to meet all your medical needs.</p>
            <div className="max-w-6xl sm:mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mt-10 ml-4 mr-4">

               <div className="shadow-md rounded-2xl border-4 border-green-100 p-6 hover:border-blue-200">
                    <PiPill className="text-4xl text-blue-300 mx-auto" />
                    <h2 className="text-xl text-green-500">Pharmacy Services</h2>
                    <p className="text-gray-500 mt-1">A range of prescriptions with a OTC medicines with expert guidance</p>
               </div>

               <div className="shadow-lg rounded-2xl border-4 border-green-100 p-6 hover:border-blue-200">
                    <PiStethoscope className="text-4xl text-blue-300 mx-auto" />
                    <h2 className="text-xl text-green-500">Health Consultation</h2>
                    <p className="text-gray-500 mt-1">We provide professional consultations with experienced healthcare providers</p>
               </div>

               <div className="shadow-lg rounded-2xl border-4 border-green-100 p-6 hover:border-blue-200">
                    <PiHeart className="text-4xl text-blue-300 mx-auto " />
                    <h2 className="text-xl text-green-500">Health Monitoring</h2>
                    <p className="text-gray-500 mt-1">Glucose, blood pressure and other health parameter checks</p>
               </div>
            </div>
            {/* <p className="mx-auto text-center mt-10 p-3"><Link to='/' >Go Back</Link></p> */}
            
        </div>
        </Scrollview>
    </>
    )
}

export default Services;