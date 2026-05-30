import MapVector from "../assets/map-section/MapVector.svg"
import TargetsMap from "../assets/map-section/TargetsMap.svg"

import NetflixLogo from "../assets/map-section/sponsors/NetflixLogo.svg"
import RedditLogo from "../assets/map-section/sponsors/RedditLogo.svg"
import AmazonLogo from "../assets/map-section/sponsors/AmazonLogo.svg"
import DiscordLogo from "../assets/map-section/sponsors/DiscordLogo.svg"
import SpotifyLogo from "../assets/map-section/sponsors/SpotifyLogo.svg"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const VpnMapSection = () => {
    const ContainerRefGSAP = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".targetsmap", {
            opacity: 0,
            duration:2,
            scrollTrigger: {
          trigger: ".targetsmap",
          start: "top 75%",
        },
        })

        gsap.from(".describe", {
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".describe",
          start: "top 80%",
        },
      });

      gsap.from(".sponsor-logo", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
          trigger: ".sponsor-logo",
          start: "top 99%",
        },
  onComplete: () => {
    gsap.to(".sponsor-logo", {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "sine.inOut"
    })
  }
});
    }, {scope: ContainerRefGSAP})

    const SponsorsLogo = [
        NetflixLogo,
        RedditLogo,
        AmazonLogo,
        DiscordLogo,
        SpotifyLogo
    ]

    return ( 
        <section ref={ContainerRefGSAP} className="mt-30 max-w-7xl mx-auto">
            <div className="text-center mb-15">
                <p className="font-Rubik mx-auto font-medium mb-5 text-4xl max-w-sm text-[#0B132A]">Huge Global Network of Fast VPN</p>
                <p className="describe font-Rubik mx-auto font-medium max-w-xl text-[#4F5665]">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>

            <div>
            <img src={TargetsMap} className="targetsmap absolute left-1/2 -translate-x-1/2" />
            <img src={MapVector} className="mx-auto" />
            </div>

            <div className="flex justify-center items-center gap-15 mt-5">
                {SponsorsLogo.map((logo, index) => (
                    <img src={logo} key={index} className="sponsor-logo"/>
                ))}
            </div>
        </section>
     );
}
 
export default VpnMapSection;