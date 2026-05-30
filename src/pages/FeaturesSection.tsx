import HumanImg from "../assets/human-features/Illustration 2.svg";
import CheckBox from "../assets/human-features/bx_bxs-check-circle.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const ContainerRefGSAP = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".human", {
        scale: 0.85,
        scrollTrigger: {
          trigger: ".human",
          start: "top 80%",
        },
      });

      //jam
      gsap.from(".jam_check", {
        scale:0,
        rotate:-70,
        duration:1,
        stagger: 0.5,
        scrollTrigger: {
            trigger:".jam_check",
            start: "top 80%"
        },
        onComplete: () => {
          gsap.to(".jam_check", {
            scale: 1.2,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
          });
        },
      });

      
    },
    { scope: ContainerRefGSAP },
  );

  return (
    <section
      ref={ContainerRefGSAP}
      className="grid grid-cols-2 max-w-7xl mx-auto"
    >
      <div className="max-w-2xl">
        <img src={HumanImg} className="human" alt="" />
      </div>
      <div className="max-w-xl">
        <p className="font-Rubik font-medium text-[3.125rem] text-[#0B132A]">
          We Provide Many Features You Can Use
        </p>
        <p className="mt-5 mb-5 font-Rubik text-base text-[#4F5665]">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="flex flex-col gap-5 text-[14px] text-[#4F5665]">
          <li className="flex gap-3">
            <img src={CheckBox} className="jam_check" alt="" />
            Powerfull online protection.
          </li>
          <li className="flex gap-3">
            <img src={CheckBox} className="jam_check" alt="" />
            Internet without borders.
          </li>
          <li className="flex gap-3">
            <img src={CheckBox} className="jam_check" alt="" />
            Supercharged VPN
          </li>
          <li className="flex gap-3">
            <img src={CheckBox} className="jam_check" alt="" />
            No specific time limits.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
