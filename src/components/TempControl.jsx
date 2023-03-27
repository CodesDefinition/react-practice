import React, { useState } from "react";
import styles from "../css/tempcontrol.module.css";

function TempControl() {
  const [temp, setTemp] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Temp Control App</h1>
      <div className={styles.box}>
        <div
          className={
            styles.value +
            " " +
            (temp <= 0
              ? styles.cool
              : temp < 10
              ? styles.cooler
              : temp < 23
              ? styles.neutral
              : temp < 26
              ? styles.warm
              : temp < 30
              ? styles.hot
              : temp < 35
              ? styles.hotter
              : styles.hottest)
          }
        >
          {temp}°c
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setTemp(temp + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setTemp(temp - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default TempControl;
