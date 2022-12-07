import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { scale, verticalScale, moderateScale } from "./scaling";

type Style = {
  background: ViewStyle;
  imageStyle: ImageStyle;
  whistleContainer: ViewStyle;
  whistleText: TextStyle;
  bottomContainer: ViewStyle;
  headerText: TextStyle;
  headerContainer: ViewStyle;
  inputContainer: ViewStyle;
  inputHeader: TextStyle;
  inputText: TextStyle;
  loginButtonText: TextStyle;
  loginButton: ViewStyle;
  subHeaderContainer: ViewStyle;
  subHeaderLine: ViewStyle;
  subHeaderText: TextStyle;
  socialsContainer: ViewStyle;
  socialLogoContainer: ViewStyle;
  socialLogo: ImageStyle;
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
    fontFamily: "Gelasio-Bold"
  },
  headerContainer: {
    height: "20%",
    justifyContent: "center",
    paddingLeft: verticalScale(20)
  },
  inputContainer: {
    paddingHorizontal: verticalScale(35)
  },
  inputHeader: {
    fontFamily: "Gelasio-Bold",
    fontSize: scale(14)
  },
  inputText: {
    borderBottomWidth: 1,
    marginBottom: scale(10),
    paddingVertical: scale(5)
  },
  loginButtonText: {
    fontFamily: "Inter-Bold",
    color: "white",
    fontSize: scale(14)
  },
  loginButton: {
    width: "100%",
    height: scale(40),
    backgroundColor: "#151515",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 31,
    marginVertical: scale(40)
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  subHeaderLine: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    width: "25%",
    height: 1
  },
  subHeaderText: {
    marginHorizontal: scale(10),
    color: "rgba(0, 0, 0, 0.35)",
    fontSize: scale(12),
    fontFamily: "Inter-Regular"
  },
  socialsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(20)
  },
  socialLogoContainer: {
    marginHorizontal: scale(20),
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: scale(8),
    shadowColor: "#000000",
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25
  },
  socialLogo: {

  }
});

export default styles;
