import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { scale, verticalScale } from "./scaling";

type Style = {
  navBarContainer: ViewStyle,
  navBarImage: ImageStyle,
  navBarText: TextStyle,
  navBarTextSelected: TextStyle,
  navBarContainerButton: ViewStyle
};

const styles: Style = StyleSheet.create<Style>({
  navBarContainer: {
    flexDirection: "row",
    height: verticalScale(70),
    justifyContent: "space-evenly",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(104, 61, 10, 0.35)",
  },
  navBarImage: {
    height: scale(25),
    width: scale(25),
    overlayColor: "blue",
    marginBottom: verticalScale(6)
  },
  navBarText: {
    fontSize: scale(14),
    fontWeight: "300",
    color: "#FFFFFF"
  },
  navBarTextSelected: {
    fontSize: scale(14),
    fontWeight: "700",
    color: "#3DCDCD"
  },
  navBarContainerButton: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    // paddingBottom: verticalScale(10)
  },
});

export default styles;
