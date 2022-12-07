import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "./scaling";

const styles = StyleSheet.create({
  backButton: {
    height: verticalScale(40),
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: scale(40),
  },
  background: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: scale(15),
  },
  triggerSelectionItem: {
    backgroundColor: "rgba( 250, 250, 250, 0.7 )",
    borderRadius: 10,
    flexDirection: "row",
    height: verticalScale(70),
  },
  triggerSelectionItemContent: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  triggerSelectionItemContentImage: {
    alignSelf: "center",
    height: verticalScale(35),
    width: scale(40),
  },
  triggerSelectionItemContentText: {
    fontSize: scale(16),
    left: scale(15),
  },
  triggerSelectionScroll: {
    alignSelf: "center",
    height: verticalScale(600),
    top: verticalScale(30),
    width: "80%",
  },
  triggerSelectionSpace: {
    height: verticalScale(20),
  },
  triggerSelectionTopText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: scale(22),
    top: verticalScale(30),
    width: "80%",
  },
});

export default styles;
