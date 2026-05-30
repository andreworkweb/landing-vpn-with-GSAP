import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const ContainerRefGSAP = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      

      gsap.from(".container", {
            scale:1.3,
            rotateX: 90,
            duration: 2.7,
            scrollTrigger: {
              trigger: ".container",
              start: "top 90%"
            },

            onComplete: () => {
                gsap.to(".container", {
                    rotateY: 8,
                    repeat: -1,
                    yoyo: true,
                    duration:1
                })
            }
        })
    },
    { scope: ContainerRefGSAP },
  );

  return (
    <section
      ref={ContainerRefGSAP}
    >
      <div className="container max-w-7xl mx-auto justify-center grid grid-cols-2 place-items-center mt-21.75 shadow-2xl py-14 rounded-2xl">
      <div className=" font-Rubik ">
        <p className="text-4xl font-medium">
          Subscribe Now for
          <br />
          Get Special Features!
        </p>
        <p className="mt-5">Let's subscribe with us and find the fun.</p>
      </div>

      <div className="">
        <button className="CTA_red_button bg-[#F53838] text-white px-16.25 py-4.5 rounded-xl font-Rubik font-bold shadow-2xl shadow-[#F53838] hover:bg-[#b13030] transition-all duration-300">
          Subscribe Now
        </button>
      </div>
      </div>
    </section>
  );
};

export default CTASection;
