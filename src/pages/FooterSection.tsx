import Logo from "../assets/Vector.png";

import FacebookIco from "../assets/footer-section/Facebook.svg";
import TwitterIco from "../assets/footer-section/Twitter.svg";
import InstagramIco from "../assets/footer-section/Instagram.svg";

const MediaIco = [FacebookIco, TwitterIco, InstagramIco];

const FooterSection = () => {
  return (
    <section className="mt-15 bg-[#F8F8F8]">
      <div className="flex justify-between max-w-7xl mx-auto pt-10 pb-10">
        <div className="grid items-center gap-3 text-xl text-[#0B132A]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={Logo} alt="LaslesVPN Logo" width={35} height={36} />
              <p className="font-Rubik font-medium">
                Lasles<span className="font-Rubik font-bold">VPN</span>
              </p>
            </div>

            <div className="mb-6">
              <p className="max-w-xs text-[16px] text-[#4F5665]">
                <span className="font-medium">LaslesVPN</span> is a private
                virtual network that has unique features and has high security.
              </p>
            </div>

            <div className="flex gap-5">
              {MediaIco.map((src, index) => (
                <div key={index}>
                  <img src={src} className="object-cover w-10 h-10" />
                </div>
              ))}
            </div>

            <div className="text-base mt-6 text-[#AFB5C0] font-Rubik">
              <p>
                ©2020Lasles<span className="font-medium">VPN</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex font-Rubik text-base gap-31.5 ml-50 text-[#4F5665]">
          <div className="grid gap-2.5">
            <p className="font-medium text-[18px] mb-2.5 text-[#0B132A]">
              Product
            </p>
            <p>Download </p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>

          <div className="grid gap-2.5">
            <p className="font-medium text-[18px] mb-2.5 text-[#0B132A]">
              Engage
            </p>
            <p>LaslesVPN ?</p>
            <p>FAQ</p>
            <p>Tutorials</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>

        <div>
          <div className="grid gap-2.5 font-Rubik text-base text-[#4F5665]">
            <p className="font-medium text-[18px] mb-2.5 text-[#0B132A]">
              Earn Money
            </p>
            <p>Affiliate</p>
            <p>Become Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
