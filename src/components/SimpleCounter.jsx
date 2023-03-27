import React, { useState } from "react";
import styles from "../css/counter.module.css";
function SimpleCounter() {
  const [value, setValue] = useState(0);
  const handelReset = () => {
    setValue(0);
  };
  return (
    <div className={styles.container}>
      <h1>Simple Counter</h1>
      <div className={styles.box}>
        <div className={styles.value}>{value}</div>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setValue(value + 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setValue(value - 1);
            }}
          >
            -
          </button>
        </div>
        <div className={styles.reset}>
          <button onClick={handelReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default SimpleCounter;
