import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { scale, verticalScale, moderateScale } from "./scaling";

type Style = {
  background: ViewStyle;
  imageStyle: ImageStyle;
  whistleContainer: ViewStyle;
  whistleText: TextStyle;
  bottomContainer: ViewStyle;
  headerText: TextStyle;
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: "100%"
  },
  whistleContainer: {
    position: "absolute",
    height: "40%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  whistleText: {
    color: "white",
    marginTop: verticalScale(10),
    fontFamily: "Gelasio-Bold",
    fontSize: scale(14)
  },
  bottomContainer: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
    borderRadius: 25
  },
  headerText: {
    fontSize: scale(32),
    fontFamily: "Gelasio-Bold",
    marginTop: verticalScale(15),
    marginLeft: verticalScale(15)
  }
});

export default styles;
