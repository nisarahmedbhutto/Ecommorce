import { StaticImageData } from "next/image";

import produc1 from "../../../../public/images/shop/product/product-cover-5.png"
import produc2 from "../../../../public/images/shop/product/product-cover-5 (1).png"
import produc3 from "../../../../public/images/shop/product/product-cover-5 (2).png"
import produc4 from "../../../../public/images/shop/product/product-cover-5 (3).png"
import produc5 from "../../../../public/images/shop/product/product-cover-5 (4).png"
import produc6 from "../../../../public/images/shop/product/product-cover-5 (5).png"
import produc7 from "../../../../public/images/shop/product/product-cover-5 (6).png"
import produc8 from "../../../../public/images/shop/product/product-cover-5 (7).png"

export type ProductData = {
    image: string | StaticImageData,
    title: string,
    discreption: string,
    price:string
}

const productData: ProductData[] = [
  {
    image: produc1,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc2,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc3,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc4,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc5,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc6,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc7,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
  {
    image: produc8,
    title: "Graphic Design",
    discreption: "English Department",
    price: "$16.48 $6.48",
  },
];

export default productData;