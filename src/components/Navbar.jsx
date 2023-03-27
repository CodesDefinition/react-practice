import React from "react";
import styles from "../css/navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div>Codes Definition</div>
        <div className={styles.links}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <div className={styles.dropdown}>
              <li>Projects</li>
              <div className={styles.dropcontent}>
                <Link to="/simplecal">
                  <p>Simple Calculator</p>
                </Link>
                <Link to="/simplecount">
                  <p>Simple Counter</p>
                </Link>
                <Link to="/tempcontroll">
                  <p>Temp Controll App</p>
                </Link>
              </div>
            </div>

            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
