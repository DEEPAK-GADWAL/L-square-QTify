import React from "react";
import styles from './Hero.module.css'
import headphone from "../../assets/hero_headphones.png"
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHeading}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.headphoneImg} src={headphone} alt="headphones" />
      </div>
    </div>
  );
}
export default Hero;