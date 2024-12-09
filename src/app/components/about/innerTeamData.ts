import { StaticImageData } from "next/image";
import team1 from "../../../../public/images/about/team-1-user-1.jpg";
import team2 from "../../../../public/images/about/team-1-user-2.jpg"
import team3 from "../../../../public/images/about/team-1-user-3.jpg"
import facebook from "../../../../public/images/about/facebook.png"
import instagram from "../../../../public/images/about/intagram.png"
import twitter from "../../../../public/images/about/twitter.png"


export type TeamData = {
  image: string | StaticImageData;
  facebook: string | StaticImageData;
  instagram: string | StaticImageData;
  twitter: string | StaticImageData;
};

const teamData: TeamData[] = [
  {
    image: team1,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team2,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
  {
    image: team3,
    facebook: facebook,
    instagram: instagram,
    twitter: twitter,
  },
];

export default teamData