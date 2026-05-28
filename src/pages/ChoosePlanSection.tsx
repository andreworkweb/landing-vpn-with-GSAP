import FreePlanImg from "../assets/plan/Free.svg";
import StandardPlanImg from "../assets/plan/Standard.svg";
import PremiumPlanImg from "../assets/plan/Premium.svg";
import CheckIco from "../assets/jam_check.svg";

const planCard = [
  {
    title: "Free Plan",
    img: FreePlanImg,
    price: "Free",
    planFeatures: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },

  {
    title: "Standard Plan",
    img: StandardPlanImg,
    price: "$9",
    period: " / mo",
    planFeatures: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
  },

  {
    title: "Premium Plan",
    img: PremiumPlanImg,
    price: "$12",
    period: " / mo",
    planFeatures: [
      "Unlimited Bandwitch",
      "Unlimited Bandwitch",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  },
];

const ChoosePlanSection = () => {
  return (
    <section className="grid mt-20 max-w-7xl mx-auto">
      <div className="text-center">
        <p className="font-Rubik font-medium mb-4 text-[2.5rem]">
          Choose Your Plan
        </p>
        <p className="mb-15 font-Rubik font-base text-[#4F5665]">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div className="flex justify-center text-center items-stretch gap-x-15">
        {planCard.map((plan) => (
          <div key={plan.title} className="flex flex-col px-17.25 py-20 rounded-xl border-2 border-[#DDDDDD] hover:border-[#F53838] transition-all  duration-300">
            <img
              src={plan.img}
              alt=""
              className="h-50 object-contain mx-auto"
            />
            <p className="font-Rubik mt-9.5 mb-9.5 font-medium text-[18px] text-[#0B132A]">
              {plan.title}
            </p>

            <div className="flex-1">
              <ul className="grid gap-5">
                {plan.planFeatures.map((feature, i) => (
                  <li
                    className="flex items-center gap-2 font-Rubik text-[#4F5665]"
                    key={i}
                  >
                    <img src={CheckIco} alt="" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-13">
              <p className="mb-5 font-Rubik font-medium text-2xl text-[#0B132A]">
                {plan.price}
                <span className="font-normal text-[#4F5665]">
                  {plan.period}
                </span>
              </p>
              <button className="py-3 px-16 font-Rubik font-bold border-2 rounded-4xl text-[#F53838] hover:bg-[#F53838] hover:text-white hover:shadow-2xl hover:shadow-[#F53838] hover:border-[#F53838] transition-all duration-300">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChoosePlanSection;
