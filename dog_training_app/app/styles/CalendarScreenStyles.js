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
  todayUpcomingViewText: {
    color: "#FFFFFF",
    fontSize: scale(40),
    fontWeight: "bold"
  },
  todayView: {
    paddingHorizontal: scale(30)
  },
  upcomingView: {
    paddingHorizontal: scale(30)
  },
  vendorSelectionItem: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    height: verticalScale(75),
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
    fontWeight: "bold",
  },
  vendorSelectionItemTextContainerTime: {
  },
  vendorSelectionSpace: {
    height: verticalScale(20),
  },
});

export default styles;