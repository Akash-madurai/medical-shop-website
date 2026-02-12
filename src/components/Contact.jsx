import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {MdLocationOn,MdEmail, MdCall} from 'react-icons/md'

const Contact = () =>{
    const [open,setOpen] = useState(false)
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

        <div className="bg-slate-50 py-16 mt-4 ">
            <div className=" max-w-5xl mx-auto px-10 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-600">Get in Touch✌️</h2>
                <p className="text-gray-400 mt-2">Any questions? We're happy to help you.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                   
                   <div className="shadow-md rounded-2xl p-6 hover:shadow-lg transition border-2 border-b-4 border-transparent hover:border-indigo-200 hover:border-b-indigo-400 hover:bg-white duration-500">
                     <div className="flex mx-auto items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-2xl text-green-400">
                        <MdCall/>
                     </div>
                    <h2 className="text-gray-700 font-semibold mt-4">Contact us</h2>
                    <p className="mt-1 text-gray-500">9876543210</p>
                   </div>

                    <div className="shadow-md rounded-2xl hover:shadow-lg transition p-6 border-2 border-b-4 border-transparent hover:border-indigo-200 hover:border-b-4  hover:border-b-indigo-400 hover:bg-white duration-500 ">
                        <div className="flex mx-auto justify-center items-center bg-red-100 rounded-full w-12 h-12 text-red-400 text-2xl">
                            <MdLocationOn/>
                        </div>
                        <h2 className="font-semibold text-gray-700 mt-4">Find us</h2>
                        <p className="text-gray-500 mt-1">Varathapuri Amman kovil street, <br /> Keezhkottaiyur chennai - 600127</p>
                    </div>

                    <div className="shadow-md rounded-2xl hover:shadow-lg transition p-6 border-2 border-b-4 border-transparent hover:border-indigo-200 hover:border-b-indigo-400 duration-500 hover:bg-white ">
                        <div className="flex mx-auto items-center justify-center bg-purple-200 w-12 h-12 rounded-full text-purple-500 text-xl">
                            <MdEmail/>
                        </div>
                        <h2 className="mt-4 text-gray-700 font-semibold">mail us</h2>
                        <p className="text-gray-500 mt-1">example123@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;