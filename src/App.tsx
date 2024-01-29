import React from "react";
import styles from "./app.module.scss";
import { Splash } from "./scenes/splash/splash";
import { Creator } from "./scenes/creator/creator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Success } from "./scenes/success/success";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Splash />
        <Creator />
        <Success />
      </div>
    </Provider>
  );
}

export default App;
