import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "./scaling";

const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: scale(23),
    top: verticalScale(10),
  },
  buttonSpace: {
    width: "100%",
    height: verticalScale(25),
  },
  loginInfoContainer: {
    top: verticalScale(220),
    width: "80%",
  },
  loginInfoDetailsContainer: {
    flexDirection: "row",
    width: "100%",
    top: verticalScale(40),
    justifyContent: "space-between",
  },
  loginInfoDetailsRememberMe: {
    flex: 1,
    paddingHorizontal: "3%",
  },
  loginInfoDetailsRememberMeCheckbox: {
    width: "3%",
    height: verticalScale(8),
    borderWidth: 1,
    top: verticalScale(3),
    backgroundColor: "blue",
  },
  loginInfoDetailsForgotPassword: {},
  loginError: {
    color: "red",
    height: verticalScale(30),
  },
  loginUsernameTextInput: {
    height: verticalScale(20),
    borderBottomWidth: 1,
    top: verticalScale(10),
    fontSize: scale(20),
  },
  loginPasswordTextInput: {
    height: verticalScale(20),
    borderBottomWidth: 1,
    top: verticalScale(30),
    fontSize: scale(20),
  },
  logoImage: {
    width: scale(160),
    height: verticalScale(150),
  },
  logoContainer: {
    position: "absolute",
    top: verticalScale(40),
    alignItems: "center",
  },
  logoText: {
    fontSize: scale(15),
  },
  signInGeneric: {
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "red",
    top: verticalScale(30),
  },
  signInWithContainer: {
    top: verticalScale(450),
    width: "80%",
    height: verticalScale(100),
    justifyContent: "center",
    position: "absolute",
  },
  signInWithFacebook: {
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "blue",
  },
  signInWithGoogle: {
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "green",
  },
});

export default styles;
