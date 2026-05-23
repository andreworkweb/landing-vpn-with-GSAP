import HumanImg from "../assets/human-hero/human.svg"
import CupImg from "../assets/human-hero/cup.svg"
import LampImg from "../assets/human-hero/lamp.svg"
import NcardImg from "../assets/human-hero/n-card.svg"
import LockCardImg from "../assets/human-hero/lock-card.svg"
import PlayCardImg from "../assets/human-hero/play-card.svg"
import StatsCardImg from "../assets/human-hero/stats-card.svg"

import UserIcon from "../assets/hero-icons/user.svg"
import LocationIcon from "../assets/hero-icons/location.svg"
import ServerIcon from "../assets/hero-icons/server.svg"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroSection: React.FC = () => {
    const containerRefGSAP = useRef<HTMLElement>(null);

    useGSAP(() => {

        //cards
        gsap.set(".human", {
            scale:0.85
        })
        gsap.to(".human", {
            scale:1
        })

        gsap.set(".cup", {
            x:-10
        })
        gsap.to(".cup", {
            x:0
        })

        gsap.set(".lamp", {
            x:10
        })
        gsap.to(".lamp", {
            x:0
        })


        gsap.set(".N", {
            x:180,
            y:160
        })
        gsap.to(".N", {
            x:35,
            y:80,
            delay:0.25,
            
        })

        gsap.set(".Lock", {
            x:185,
            y:100,
        })
        gsap.to(".Lock", {
            x:0,
            y:-130,
            delay:0.25,
            
        })

        gsap.set(".Play", {
            x:200,
            y:20
        })
        gsap.to(".Play", {
            x:310,
            y:-210,
            delay:0.25,
            
        })

        gsap.set(".Stats", {
            x:185,
            y:-40
        })
        gsap.to(".Stats", {
            x:430,
            y:-180,
            delay:0.25
        })

        gsap.to(".cards", {
            duration: 0.01,
            onComplete: () => {
                gsap.to(".cards", {
                    y:10,
                    duration:1,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                })
            }
        })

        //BUTTON
        gsap.from(".red_button", {
            scale: 0,
            rotate:-15,
            duration:1.5,
            rotateY: 180,
        })

        
        

    }, {scope: containerRefGSAP})
    return ( 
        <section ref={containerRefGSAP} className="flex flex-col justify-around min-h-[calc(100vh-90px)] max-w-7xl mx-auto">
            <div className="grid grid-cols-2">
                <div className="max-w-xl">
                    <h1 className="mb-7 leading-17 font-Rubik font-medium text-[50px] text-[#0B132A]">Want anything to be easy with <span className="font-bold">LaslesVPN.</span></h1>
                    <h2 className="mb-13 font-Rubik text-base text-[#4F5665]">Provide a network for all your needs with ease and fun using <span className="font-medium">LaslesVPN</span> discover interesting features from us.</h2>
                    <button className="red_button py-4.5 px-19 rounded-lg shadow-2xl shadow-[#F53838]/50 font-Rubik font-bold text-base text-white bg-[#F53838] hover:bg-[#aa2828]">
                        Get Started
                    </button>
                </div>
                <div>
                    <div
                    className="flex justify-between relative"
                    >
                        <img className="cup mt-auto" src={CupImg} alt="" />
                        <img className="human z-10" src={HumanImg} alt="" />
                        <img className="lamp mt-auto" src={LampImg} alt="" />

                        <div className="cards absolute z-0">
                            <img className="N" src={NcardImg} alt="" />
                            <img className="Lock" src={LockCardImg} alt="" />
                            <img className="Play" src={PlayCardImg} alt="" />
                            <img className="Stats" src={StatsCardImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-around py-15 rounded-2xl shadow-2xl shadow-black/10">
                <div className="grid grid-cols-2 items-center gap-x-9">
                    <img src={UserIcon} className="row-span-2 self-center" alt="" />
                    <p className="font-Rubik font-bold">90+</p>
                    <p className="col-start-2 font-Rubik">Users</p>
                </div>
                <div className="grid grid-cols-2 items-center gap-x-9">
                    <img src={LocationIcon} className="row-span-2 self-center" alt="" />
                    <p className="font-Rubik font-bold">30+</p>
                    <p className="col-start-2 font-Rubik">Locations</p>
                </div>
                <div className="grid grid-cols-2 items-center gap-x-9">
                    <img src={ServerIcon} className="row-span-2 self-center" alt="" />
                    <p className="font-Rubik font-bold">50+</p>
                    <p className="col-start-2 font-Rubik">Servers</p>
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;