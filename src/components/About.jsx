import { Link } from "react-router-dom";
import {RiMenu3Line} from "react-icons/ri";
import { useState } from "react";
import tablet from '../assets/tablet.avif';
import tablet2 from '../assets/tablet2.avif'


const About = () =>{
    const [open, setOpen] = useState(false)
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
                <ul className={`absolute right-0 top-22 bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-lg p-4 sm:static sm:flex sm:flex-row sm:space-x-20 space-y-3  text-green-500 font-semibold border-t-4 border-t-blue-500 sm:border-none ${open ? 'block' : 'hidden'} sm:mr-8 `}>
                   <li><Link to='/' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300' onClick={()=>setOpen(false)} >Home</Link> </li>
                    <li> <Link to='/service' className=' hover:text-blue-500 border-b-4 border-transparent hover:border-blue-400 transition-colors duration-300'>Services</Link></li>
                    <li> <Link to='/about' className=' hover:text-blue-500 border-b-4 border-transparent  hover:border-blue-400 transition-colors duration-300'>About</Link></li>
                    <li><Link to='/contact' >
                       <span className="inline-block border-b-4 border-transparent hover:border-blue-500">Contact</span>
                    </Link></li>
                </ul>
            </div>
        
        <div className="bg-white py-10 mt-20">
            <div className="mx-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-10 sm:text-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl text-gray-700 font-semibold mb-3 ml-3">Why choose <span className="text-green-700">Meenakshi </span> <span className="text-blue-600">Medicals?</span> </h2>
                    <ul className="text-start ml-3 sm:ml-24">
                        <li className="text-gray-600 text-lg">✔️ Licensed pharmacists with 10+ years of experience</li>
                        <li className="text-gray-600 text-lg">✔️ ISO certified and fully compliant with all regulations</li>
                        <li className="text-gray-600 text-lg">✔️ Wide range of brands and generic medicines</li>
                        <li className="text-gray-600 text-lg">✔️ Affordable prices with loyalty rewards program</li>
                        <li className="text-gray-600 text-lg">✔️ Professional health consultations available</li>
                    </ul>
                </div>
                <div className="bg-white shadow-2xl rounded-2xl h-80 w-80 flex items-center justify-center ml-20 sm:mx-auto">
                    <img src={tablet2} alt="img" className="h-full w-full object-cover border-8 border-transparent rounded-2xl" />
                </div>
            </div>
        </div>

    </>
    )
}
export default About;