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
  backButtonView: {
    padding: scale(15)
  },
  background: {
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  chatView: {
    bottom: 100,
    width: "100%",
    position: "absolute",
  },
  chatViewTextInput: {
    borderBottomWidth: "2%",
    borderBottomColor: "#FFFFFF",
    color: "#FFFFFF",
    fontSize: scale(25),
    height: verticalScale(25),
    top: verticalScale(10),
  },
  vendorSelectionItem: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    justifyContent: "space-between",
  },
  vendorSelectionItemTextContainer: {
    padding: scale(10),
  },
  vendorSelectionItemTextContainerDate: {
  },
  vendorSelectionItemTextContainerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: scale(10)
  },
  vendorSelectionItemTextContainerName: {
    fontSize: scale(15),
  },
  vendorSelectionItemTextContainerTime: {
  },
  vendorSelectionSpace: {
    height: verticalScale(20),
  },
});

export default styles;