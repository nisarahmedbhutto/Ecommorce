import { StaticImageData } from "next/image";
import unplush2 from "../../../../../public/images/common/unplush (1).png"
import unplush3 from "../../../../../public/images/common/unplush (3).png"
import unplush4 from "../../../../../public/images/common/unplush (4).png"
import unplush5 from "../../../../../public/images/common/unplush (5).png"

export type ProductData = {
    image:string | StaticImageData
}

const productData: ProductData[] = [
    {
        image:unplush2
    },
    {
        image:unplush3
    },
    {
        image:unplush4
    },
    {
        image:unplush5
    },
]

export default productData