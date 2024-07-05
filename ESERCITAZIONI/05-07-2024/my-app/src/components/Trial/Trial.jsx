import React, { useState } from "react";
import styles from "./Trial.module.css";

function Trial() {
  const [price, setPrice] = useState(0); 

  const handleSliderChange = (event) => {
    const newPrice = parseInt(event.target.value, 10);
    setPrice(newPrice);
  };


  return (
    <>
      <h1>Simple, traffic-based pricing</h1>
      <h2>Sign-up for our 30-day trial. No credit card required.</h2>
      <div className={styles.trialContainer}>
        <div className={styles.pricingContainer}>
          <div className={styles.pageviews}>
            <p>100K PAGEVIEWS</p>
          </div>
          <div className={styles.month}>
            <p>${price}.00/<span>month</span></p>
          </div>
        </div>
        <div className={styles.range}>
          <input
            type="range"
            min="0"
            max="50"
            value={price}
            onChange={handleSliderChange}
            className={styles.rangeInput}
          />
        </div>
        <div className={styles.toggleContainer}>
          <div className={styles.billing}>
            <div className={styles.yearlyBilling}>
              <p>Monthly Billing</p>
            </div>
            <div className={styles.toggleButton}>
              {/* toggle button */}
              <label className={styles.switch}>
                <input
                  type="checkbox"
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.discount}>
              <p>Yearly Billing</p> <div>25% discount</div>
            </div>
          </div>
        </div>
        <div className={styles.featuresContainer}>
          <div className={styles.features}>
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
          </div>
          <div className={styles.button}>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trial;
