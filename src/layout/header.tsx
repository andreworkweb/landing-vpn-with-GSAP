import Logo from "../assets/Vector.png"

const Header = () => {
    return ( 
        <header className="p-9 flex justify-between max-w-7xl mx-auto items-center">
            {/* logo */}
            <div className="flex items-center gap-3 text-xl text-[#0B132A]">
                <img src={Logo} alt="LaslesVPN Logo" width={35} height={36}/>
                <p className="font-Rubik font-medium">Lasles<span className="font-Rubik font-bold">VPN</span></p>
            </div>

            {/* NAV */}
            <nav className="flex font-Rubik text-base gap-12 text-[#4F5665]">
                <p>About</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>Help</p>
            </nav>

            {/* auth button */}
            <div className="flex font-Rubik font-medium text-base gap-5">
                <button className="text-[#0B132A]">
                    Sign In
                </button>

                <button className="border rounded-full border-[#F53855] py-2.5 px-10 text-[#F53855]">
                    Sign Up
                </button>
            </div>
        </header>
     );
}
 
export default Header;
