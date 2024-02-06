import React, { ReactNode } from "react";
import styles from "./sceneChanger.module.scss";
import type { currentScene } from "../store/appControl/appControlSlice";
import { useSelector } from "react-redux";
import { currentSceneSelector } from "../store/appControl/selectors";

interface SceneChangerProps {
  children: ReactNode;
}

export function SceneChanger({ children }: SceneChangerProps) {
  const scene = useSelector(currentSceneSelector);

  const arrayOfChildren = React.Children.toArray(children);

  const selectedScene = (view: currentScene) => {
    switch (view) {
      case "SPLASH": {
        return arrayOfChildren[0];
      }
      case "ANIMATION": {
        return [arrayOfChildren[0], arrayOfChildren[1]];
      }
      case "CREATOR": {
        return arrayOfChildren[1];
      }
      case "SUCCESS": {
        return arrayOfChildren[2];
      }
      case "ORDER": {
        return arrayOfChildren[3];
      }
      default:
        return arrayOfChildren[0];
    }
  };
  return <div className={styles.appContainer}>{selectedScene(scene)}</div>;
}
