import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import single from "../../../../public/images/shop/product/single-product-1-cover-2.jpg";
import single2 from "../../../../public/images/shop/product/single-product-1-thumb-2.jpg";
import single3 from "../../../../public/images/shop/product/single-product-1-thumb-1.jpg";
import star1 from "../../../../public/images/shop/product/Vector (5).png";
import star2 from "../../../../public/images/shop/product/Vector (6).png";
import vecter7 from "../../../../public/images/shop/product/Vector (7).png";
import vecter8 from "../../../../public/images/shop/product/Vector (8).png";
import vecter9 from "../../../../public/images/shop/product/Vector (9).png";
import unplush from "../../../../public/images/shop/product/unsplash_QANOF9iJlFs.png";
import ProductCard from "../../components/shop/product";
import Brand from "../../components/common/brand";
import Header from "../../../app/components/headr/header";

function Product() {
  return (
    <div id={styles.productPage}>
      {/*  */}
      <div>
        <Header/>
        </div>

      {/* product section */}
      <div id={styles.productItem}>
        <div>
          <div id={styles.img}>
            <Image src={single} alt="" width={1200} height={1200} />
          </div>
          <div id={styles.innerImage}>
            <Image src={single2} alt="" width={1200} height={1200} />
            <Image src={single3} alt="" width={1200} height={1200} />
          </div>
        </div>
        <div id={styles.item}>
          <h1>Floating Phone</h1>

          <div>
            <Image src={star1} alt="" />
            <Image src={star1} alt="" />
            <Image src={star1} alt="" />
            <Image src={star1} alt="" />
            <Image src={star2} alt="" />
            <span id={styles.reviews}>10 Reviews</span>
          </div>
          <h2>$1,139.33</h2>
          <h3>Availability : In Stock</h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr />
          <div id={styles.color}>
            <div className={styles.colorsItem} id={styles.one}></div>
            <div className={styles.colorsItem} id={styles.two}></div>
            <div className={styles.colorsItem} id={styles.three}></div>
            <div className={styles.colorsItem} id={styles.four}></div>
          </div>
          <div id={styles.select}>
            <div id={styles.selectOption}>Select Options</div>
            <div className="vector">
              <Image src={vecter7} alt="" />{" "}
            </div>
            <div className="vector">
              <Image src={vecter8} alt="" />{" "}
            </div>
            <div className="vector">
              <Image src={vecter9} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* items section */}
      <div id={styles.unplush}>
        <div id={styles.unplushHeading}>
          <h4>Description</h4> <h4>Additional Information </h4>{" "}
          <h4>Reviews (0)</h4>
        </div>
        <hr />
        <div id={styles.unplushContent}>
          <div>
            <Image src={unplush} alt=" " width={1200} height={1200} />
          </div>
          <div>
            <h2>the quick fox jumps over</h2>
            <br />
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </p>
            <br />
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </p>
            <br />
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </p>
            <br />
          </div>
          <div id={styles.jumps}>
            <h2>the quick fox jumps over </h2>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <br />
            <h2>the quick fox jumps over</h2>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
            <h4>the quick fox jumps over the lazy dog</h4>
          </div>
        </div>
      </div>

      {/* product card section */}

      <div id={styles.seler}>
        <div>
          <h1>BESTSELLER PRODUCTS</h1>
          <div id={styles.line}></div>
          <ProductCard />
          <Brand />
        </div>
      </div>
    </div>
  );
}

export default Product;
