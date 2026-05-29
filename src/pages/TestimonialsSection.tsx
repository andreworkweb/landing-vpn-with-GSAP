import Robertpfp from "../assets/Reviews-section/pfp/Robertpfp.png";
import Christypfp from "../assets/Reviews-section/pfp/Christypfp.png";
import Joupfp from "../assets/Reviews-section/pfp/Joupfp.png";

import StarIco from "../assets/Reviews-section/pfp/starVector.svg";

const TestimonialsData = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    profilePhoto: Robertpfp,
    rating: "4.5",
    text: [
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    ],
  },

  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    profilePhoto: Christypfp,
    rating: "4.5",
    text: [
      "“I like it because I like to travel far and still can connect with high speed.”.",
    ],
  },

  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    profilePhoto: Joupfp,
    rating: "4.5",
    text: [
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    ],
  },
];
const TestimonialsSection = () => {
  return (
    <section className="mx-auto">
      <div className="text-center">
        <p className="font-Rubik mx-auto font-medium mb-5 text-4xl max-w-md text-[#0B132A]">
          Trusted by Thousands of Happy Customer
        </p>
        <p className="font-Rubik mx-auto font-medium max-w-xl text-[#4F5665]">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="flex justify-end flex-wrap gap-12.5 mt-17">
        {TestimonialsData.map((testimonials) => (
          <div
            key={testimonials.name}
            className="w-100 p-8 border-2 border-[#DDDDDD] rounded-xl hover:border-[#F53838] hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-5">
                <img
                  src={testimonials.profilePhoto}
                  className="w-12 h-12 object-cover"
                  alt={testimonials.name}
                />

                <div className="font-Rubik">
                  <p className="font-medium text-lg text-[#0B132A]">
                    {testimonials.name}
                  </p>
                  <p className="text-sm text-[#4F5665]">
                    {testimonials.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <p>{testimonials.rating}</p>
                <span>
                  <img src={StarIco} alt="star" className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="leading-7 font-Rubik text-[#0B132A]">
              <p>{testimonials.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
