import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import { scale, verticalScale, moderateScale } from "./scaling";

type Style = {
  background: ViewStyle;
  buttonContainer: ViewStyle;
  loginText: TextStyle;
  loginButton: ViewStyle;
  createAccountButton: ViewStyle;
  createAccountText: TextStyle;
  whistleContainer: ViewStyle;
  whistleText: TextStyle;
};

const styles: Style = StyleSheet.create<Style>({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonContainer: {
    width: "80%",
    height: verticalScale(150),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginVertical: scale(80)
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: scale(14),
    fontFamily: "Inter-Bold"
  },
  createAccountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: scale(14),
    fontFamily: "Inter-Regular"
  },
  loginButton: {
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "#FF94C1",
    borderRadius: 31,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(20)
  },
  createAccountButton: {
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "#000000",
    borderRadius: 31,
    justifyContent: "center",
    alignItems: "center"
  },
  whistleContainer: {
    position: "absolute",
    height: "70%",
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
});

export default styles;
