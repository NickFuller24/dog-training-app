import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "./scaling";

const styles = StyleSheet.create({
  background: {
    alignItems: "stretch",
    justifyContent: "flex-end",
    flex: 1,
    //backgroundColor: 'blue'
  },
  navBarContainer: {
    flexDirection: "row",
    height: verticalScale(60),
    justifyContent: "space-evenly",
    width: "100%",
  },
  navBarImageLarge: {
    height: scale(50),
    width: scale(50),
  },
  navBarImageSmall: {
    height: scale(30),
    width: scale(30),
  },
  navBarIconContainer: {
    height: scale(40),
    width: scale(40),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  navBarContainerButton: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
