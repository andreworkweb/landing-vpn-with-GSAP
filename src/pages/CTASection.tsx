

const CTASection = () => {
    return ( 
        <section className="max-w-7xl mx-auto justify-center grid grid-cols-2 place-items-center mt-21.75 shadow-2xl py-14 rounded-2xl">
            <div className=" font-Rubik ">
                <p className="text-4xl font-medium">Subscribe Now for<br />Get Special Features!</p>
                <p className="mt-5">Let's subscribe with us and find the fun.</p>
            </div>

            <div className="">
                <button className="bg-[#F53838] text-white px-16.25 py-4.5 rounded-xl font-Rubik font-bold shadow-2xl shadow-[#F53838] hover:bg-[#b13030] transition-all duration-300">
                    Subscribe Now
                </button>
            </div>
        </section>
     );
}
 
export default CTASection;