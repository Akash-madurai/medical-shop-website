const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
        
        <div className="mx-auto text-center mt-32 border-t-2 border-gray-300 w-3/4">
        <p className="mt-8">© {year} Meenakshi Medicals. All rights reserved.</p>
            <p className="text-gray-500 pb-6">Designed by Akash.</p> 
        </div>
        </>
    )
}
export default Footer;
