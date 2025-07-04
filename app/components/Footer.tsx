import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.top}>
          <div className={styles.info}>
            <img className={styles.logo} alt="logo" loading="lazy" decoding="async" data-nimg="1" src="https://www.datocms-assets.com/81001/1666837322-01_mymc_blk.svg"/>
            <ul>
              <li>ABN 92 162 190 070</li>
              <li>1 NORRIE STREET</li>
              <li>YENNORA NSW 2161</li>
              <li>1300 364 993</li>
            </ul>
          </div>

          <div className={styles.menuGroup}>
            <h4>Our Range</h4>
            <ul>
              <li>Breakfast</li>
              <li>Protein Oat Slices</li>
              <li>Protein Muffins</li>
              <li>Protein Cookies</li>
              <li>Protein Shakes</li>
              <li>Energy Drinks</li>
              <li>PRO Meals</li>
              <li>PLUS+ Meals</li>
              <li>Vegan</li>
              <li>Keto Friendly</li>
              <li>Low Calorie</li>
            </ul>
          </div>

          <div className={styles.menuGroup}>
            <h4>About Us</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Meal Plans</li>
              <li>NDIS</li>
              <li>Subscribe & Save</li>
              <li>Refer a Friend</li>
              <li>MYMC App</li>
              <li>Calorie Calculator</li>
              <li>Blog</li>
              <li>Zippay</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Student Beans</li>
              <li>UNiDAYS</li>
            </ul>
          </div>

          <div className={styles.menuGroup}>
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Delivery</li>
              <li>Stockists</li>
              <li>Delivery</li>
              <li>Disclaimer</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Corporate Program Enquiry</li>
            </ul>
          </div>

          <div className={styles.menuGroup}>
            <h4>Locations</h4>
            <ul>
              <li>Brisbane</li>
              <li>Sydney</li>
              <li>Perth</li>
              <li>Melbourne</li>
              <li>Adelaide</li>
              <li>Hobart</li>
            </ul>
          </div>

          <div className={styles.menuGroup}>
            <h4>Other Sites</h4>
            <ul>
              <li>Retail</li>
              <li>Share Your Journey</li>
            </ul>
            <br/>
            <br/>
            <h4>Contact Us</h4>
            <ul>
              <li>Retail</li>
              <li>Mon - Fri, 9am - 6pm</li>
              <li>Sat - Sun, 9am - 5pm</li>
              <li>1300 364 993</li>
            </ul>
          </div>

          <div className={styles.menuGroup}>
            <h4>Download Our App</h4>
            <ul>
              <li><img alt="app-store" loading="lazy" width="127" height="42" decoding="async" data-nimg="1" src="/assets/images/mymc-appstore.svg"/></li>
              <li><img alt="play-store" loading="lazy" width="127" height="42" decoding="async" data-nimg="1" src="/assets/images/mymc-googleplay.svg"/></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <img alt="payment options" loading="lazy" width="289" height="18" decoding="async" data-nimg="1" src="/assets/images/payment-options.svg"/>
          <p>Copyright 2013 - {new Date().getFullYear()} My Muscle Chef Pty Ltd. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}