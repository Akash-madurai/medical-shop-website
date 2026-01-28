import { FaAward, FaUsers, FaCapsules, FaClock } from "react-icons/fa";
import { PiPill, PiStethoscope, PiHeart, PiLightning } from "react-icons/pi";


const ServiceHome = () => {
    return(
      <>
        <div className=" bg-white py-10 mt-20">
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

        <div className="bg-white py-10 mt-10">
             <h2 className="mx-auto text-4xl text-blue-700 font-semibold text-center">Our Services</h2>
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
        </div>
    </>
    )
}

export default ServiceHome;