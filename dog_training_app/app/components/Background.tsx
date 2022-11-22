import React from "react";
import { ImageBackground } from "react-native";

type BackgroundProps = {
  children: React.ReactNode
};

const Background = (props: BackgroundProps) => {
  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      {props.children}
    </ImageBackground>
  );
}

export default Background;
