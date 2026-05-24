import HumanImg from "../assets/human-features/Illustration 2.svg"
import CheckBox from "../assets/human-features/bx_bxs-check-circle.svg"

const FeaturesSection = () => {
    return ( 
        <section className="grid grid-cols-2 max-w-7xl mx-auto">
            <div className="max-w-2xl">
                <img src={HumanImg} alt="" />
            </div>
            <div className="max-w-xl">
                <p className="font-Rubik font-medium text-[3.125rem] text-[#0B132A]">We Provide Many Features You Can Use</p>
                <p className="mt-5 mb-5 font-Rubik text-base text-[#4F5665]">You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className="flex flex-col gap-5 text-[14px] text-[#4F5665]">
                    <li className="flex gap-3"><img src={CheckBox} alt="" />Powerfull online protection.</li>
                    <li className="flex gap-3"><img src={CheckBox} alt="" />Internet without borders.</li>
                    <li className="flex gap-3"><img src={CheckBox} alt="" />Supercharged VPN</li>
                    <li className="flex gap-3"><img src={CheckBox} alt="" />No specific time limits.</li>
                </ul>
            </div>
        </section>
     );
}
 
export default FeaturesSection;