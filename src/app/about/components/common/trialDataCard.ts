import { StaticImageData } from "next/image";

import twitter from "../../../../../public/images/about/twitter.png";
import facebook from "../../../../../public/images/about/facebook.png";
import intagram from "../../../../../public/images/about/intagram.png";
import linkdin from "../../../../../public/images/about/linkdin.png";


export type TrialData = {
    twitter:string|StaticImageData
    facebook:string|StaticImageData
    instagram:string|StaticImageData
    linkdin:string|StaticImageData
}


const trialData: TrialData[] = [
    {
        twitter: twitter,
        facebook: facebook,
        instagram: intagram,
        linkdin:linkdin
    }
]

export default trialData
