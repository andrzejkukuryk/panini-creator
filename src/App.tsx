import React from "react";
import styles from "./app.module.scss";
import { Splash } from "./scenes/splash/splash";
import { Creator } from "./scenes/creator/creator";

function App() {
  return (
    <div className={styles.appContainer}>
      <Splash />
      <Creator />
    </div>
  );
}

export default App;
