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
  vendorSelectionItem: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    flexDirection: "row",
    height: verticalScale(75),
    justifyContent: "space-between",
  },
  vendorSelectionItemArrow: {
    color: "gray",
    fontSize: scale(35),
    padding: scale(15),
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
  vendorSelectionItemTextContainer: {
    padding: scale(10),
  },
  vendorSelectionItemTextContainerDate: {},
  vendorSelectionItemTextContainerName: {
    fontSize: scale(15),
    fontWeight: "bold",
  },
  vendorSelectionItemTextContainerNumber: {},
  vendorSelectionItemTextContainerTriggers: {},
  vendorSelectionScroll: {
    alignSelf: "center",
    height: verticalScale(1000),
    top: verticalScale(30),
    width: "80%",
  },
  vendorSelectionSpace: {
    height: verticalScale(20),
  },
  vendorSelectionTopText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: scale(22),
    top: verticalScale(30),
    width: "80%",
  },
});

export default styles;
