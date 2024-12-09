import { StaticImageData } from "next/image";
import product1 from "../../../../public/images/shop/product-list/filter.png";
import product2 from "../../../../public/images/shop/product-list/filter (1).png";
import product3 from "../../../../public/images/shop/product-list/product-cover-5 (8).png";
import product4 from "../../../../public/images/shop/product-list/filter (3).png";
import product5 from "../../../../public/images/shop/product-list/cover.png"
import product6 from "../../../../public/images/shop/product-list/product-cover-5 (1).png"
import product7 from "../../../../public/images/shop/product-list/product-cover-5 (2).png";
import product8 from "../../../../public/images/shop/product-list/product-cover-5 (3).png";
import product9 from "../../../../public/images/shop/product-list/product-cover-5 (4).png";
import product10 from "../../../../public/images/shop/product-list/product-cover-5 (5).png";
import product11 from "../../../../public/images/shop/product-list/product-cover-5 (6).png";
import product12 from "../../../../public/images/shop/product-list/product-cover-5 (7).png";


export type ShopCardData = {
    image: string | StaticImageData
    title: string,
    category: string,
    prices: string,
    newPrices:string,
}

export const shopCard: ShopCardData[] = [
  {
    image: product1 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product2 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product3 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product4 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product5 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product6,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product7 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product8 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product9 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product10 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product11 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
  {
    image: product12 ,
    title: "Graphic Design",
    category: "English Department",
    prices:`$${16.48}`,
    newPrices:`$${6.48}`,
  },
];


