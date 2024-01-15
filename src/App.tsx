import React from "react";
import styles from "./app.module.scss";
import { Splash } from "./scenes/splash/splash";
import { Creator } from "./scenes/creator/creator";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Splash />
        <Creator />
      </div>
    </Provider>
  );
}

export default App;
