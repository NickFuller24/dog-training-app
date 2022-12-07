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
  dateItem: {
    backgroundColor: "rgba( 250, 250, 250, 0.7 )",
    borderBottomColor: "darkgray",
    borderBottomWidth: verticalScale(0.5),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    height: verticalScale(70),
    justifyContent: "space-between",
    padding: scale(15),
  },
  dateLocationItemArrow: {
    color: "gray",
    fontSize: scale(35),
  },
  dateLocationItemText: {
    flexDirection: "column",
    width: "80%",
    alignItems: "flex-start"
  },
  dateLocationItemTextData: {
    fontSize: scale(13),
    top: verticalScale(10),
  },
  dateLocationItemTextTitle: {
    fontSize: scale(13),
    fontWeight: "bold",
  },
  dateLocationContainer: {
    alignSelf: "center",
    top: verticalScale(30),
    width: "80%",
  },
  dateLocationSelectionTopText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: scale(22),
    top: verticalScale(30),
    width: "80%",
  },
  dateLocationSpace: {
    height: verticalScale(20),
  },
  datePopupContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "black",
    position: "absolute",
    top: 300,
    width: scale(200),
    height: verticalScale(200),
  },
  locationItem: {
    backgroundColor: "rgba( 250, 250, 250, 0.7 )",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    height: verticalScale(70),
    justifyContent: "space-between",
    padding: scale(15),
  },
  nextButton: {
    alignSelf: "center",
    backgroundColor: "#FF94C1",
    borderBottomColor: "darkgray",
    borderBottomWidth: verticalScale(0.5),
    borderRadius: 30,
    height: verticalScale(50),
    padding: scale(15),
    top: verticalScale(220),
    width: "80%",
  },
  nextButtonText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: scale(20),
    fontWeight: "bold",
  },
});

export default styles;
