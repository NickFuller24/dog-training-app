import { StyleSheet, Dimensions } from "react-native";
import { scale, moderateScale, verticalScale } from "./scaling";

const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  overlayBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: scale(16),
    // opacity: 0.85,
    position: "absolute",
    top: verticalScale(162),
    height: verticalScale(75),
    width: "85%",
    borderRadius: 17,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  editIcon: {
    height: scale(20),
    width: scale(20),
  },
  profileName: {
    fontSize: scale(20),
  },
  profileEmail: {
    fontSize: scale(12),
  },
  profileImage: {
    width: "100%",
    height: verticalScale(200),
    resizeMode: "cover",
  },
});

export default styles;
