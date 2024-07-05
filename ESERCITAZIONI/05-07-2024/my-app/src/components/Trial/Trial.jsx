import { useState } from "react";
import styles from './Trial.module.css';

function Trial(){
    return(
        <>
            <h1>Simple, traffic-based pricing</h1>
            <h2>Sign-up for our 30-day trial. No credit card required.</h2>
            <div className={styles.trialContainer}>
                <div className={styles.pricingContainer}>
                    <div className={styles.pageviews}>
                        <p>100K PAGEVIEWS</p>
                    </div>
                    <div className={styles.month}>
                        <p>$16.00/<small>month</small></p>
                    </div>
                </div>
                <div className={styles.switch}>Switch</div>
                <div className={styles.toggleContainer}>
                    <div className={styles.toggleButton}>
                    </div>
                    <div className={styles.billing}>
                        <div className={styles.yearlyBilling}>
                            <p>Monthly Billing</p>
                        </div>
                        <div className={styles.discount}>
                            <p>25% discount</p>
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
