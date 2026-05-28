import MapVector from "../assets/map-section/MapVector.svg"
import TargetsMap from "../assets/map-section/TargetsMap.svg"

import NetflixLogo from "../assets/map-section/sponsors/NetflixLogo.svg"
import RedditLogo from "../assets/map-section/sponsors/RedditLogo.svg"
import AmazonLogo from "../assets/map-section/sponsors/AmazonLogo.svg"
import DiscordLogo from "../assets/map-section/sponsors/DiscordLogo.svg"
import SpotifyLogo from "../assets/map-section/sponsors/SpotifyLogo.svg"

const VpnMapSection = () => {

    const SponsorsLogo = [
        NetflixLogo,
        RedditLogo,
        AmazonLogo,
        DiscordLogo,
        SpotifyLogo
    ]

    return ( 
        <section className="mt-30 max-w-7xl mx-auto">
            <div className="text-center mb-15">
                <p className="font-Rubik mx-auto font-medium mb-5 text-4xl max-w-sm text-[#0B132A]">Huge Global Network of Fast VPN</p>
                <p className="font-Rubik mx-auto font-medium max-w-xl text-[#4F5665]">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>

            <div>
            <img src={TargetsMap} className="absolute left-1/2 -translate-x-1/2" />
            <img src={MapVector} className="mx-auto" />
            </div>

            <div className="flex justify-center items-center gap-15 mt-5">
                {SponsorsLogo.map((logo, index) => (
                    <img src={logo} key={index} />
                ))}
            </div>
        </section>
     );
}
 
export default VpnMapSection;