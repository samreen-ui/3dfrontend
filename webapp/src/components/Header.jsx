import React from "react";
import 'boxicons/css/boxicons.min.css';
const Header=()=>{
    //mobile menu
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobileMenu");

        //hiddenclass remove..
        if(mobileMenu.classList.contains('hidden'))
        {
            mobileMenu.classList.remove('hidden');
        }
        else
        {
            mobileMenu.classList.add('hidden');
        }

    }
    return(
       <header className="flex justify-between items-center py-4 px-4  lg:px-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">MCODE</h1>
            <nav className="hidden md:flex items-center gap-12">
                <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> COMPANY</a>
                <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> FEATURES</a>
                <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> RESOURCES</a>
                <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> DOCS</a>
            </nav>
            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium
            transition-all duration-500 hover:bg-white cursor-pointer z-50">
            SIGNIN
            </button>

            {/* mobile menu */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i class='bx bx-menu'></i>
            </button>

            <div id='mobileMenu' className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40
            bg-black/20 backdrop-blur-md border border-white/30 rounded-lg">
                <nav className="flex flex-col gap-6 item-center">
                    <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> COMPANY</a>
                    <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> FEATURES</a>
                    <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> RESOURCES</a>
                    <a className="text-base tracking-wider transition-colors hove:text-gray-300 z-50" href="#"> DOCS</a>
                </nav>
            </div>
       </header>
    )
}
export default Header;