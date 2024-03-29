import React from "react";
import { Splash } from "./scenes/splash/splash";
import { Creator } from "./scenes/creator/creator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Success } from "./scenes/success/success";
import { SceneChanger } from "./scenes/sceneChanger";
import { Orders } from "./scenes/orders/orders";

function App() {
  return (
    <Provider store={store}>
      <SceneChanger>
        <Splash />
        <Creator />
        <Success />
        <Orders />
      </SceneChanger>
    </Provider>
  );
}

export default App;
