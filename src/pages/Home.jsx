import React from "react";
import styles from "../css/home.module.css";
import sampleImg from "../assets/sample.jpg";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <div>Welcome!</div>
          <div>
            <img src={sampleImg} alt="" />
          </div>
        </div>
        <div className={styles.myname}>Hi! I'm Mark,</div>
        <div className={styles.texts}>
          Join me in my React journey. You can check my simple React Projects up
          there
        </div>
      </div>
    </div>
  );
}

export default Home;
