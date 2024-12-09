import styles from './page.module.css'
import ShopCard from '../components/shop/shopCard'
import Cloths from '../components/shop/cloths'
import Brand from '../components/common/brand';
import Link from 'next/link';
import Header from '../components/headr/header';


function Shop() {
  return (
    <div id={styles.shopPage}>
      {/* header section */}
      <div>
        <Header/>
      </div>

      {/* shop head section */}
      <div id={styles.clothContenor}>
        <div id={styles.shop}>
          <div>
           
              <h2>Shop</h2>
           
          </div>
          <div id={styles.shopHead}>
            <h3>Home</h3>
            <h3>Shop</h3>
          </div>
        </div>

        {/* cloth section */}
        <div>
          <Cloths />
        </div>
      </div>

      {/* filter section */}
      <div id={styles.filter}>
        <div>
          <h2>Showing all 12 results</h2>
        </div>
        <div id={styles.views}>
          <div>
            <h3>Views:</h3>
          </div>
          <div id={styles.squire}>
            <div className={styles.squireLine}></div>
            <div className={styles.squireLine}></div>
            <div className={styles.squireLine}></div>
            <div className={styles.squireLine}></div>
          </div>
          <div id={styles.burgur}>
            <div className={styles.burgLine}></div>
            <div className={styles.burgLine}></div>
            <div className={styles.burgLine}></div>
            <div className={styles.burgLine}></div>
          </div>
        </div>
        <div id={styles.popularity}>
          <div>
            <h2>Popularity</h2>
          </div>
          <div>
            <h3>Filter</h3>
          </div>
        </div>
      </div>

      {/* brands section */}
      <div id={styles.brands}>
        <Brand />
      </div>

      {/* products section */}
      <div>
        <ShopCard />
      </div>

      {/* next page section */}
      <div id={styles.link}>
        <Link href={"/shop"}>first</Link>
        
        <Link href={"/shop/product"}>Next</Link>
      </div>
    </div>
  );
}

export default Shop