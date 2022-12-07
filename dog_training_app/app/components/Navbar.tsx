import React, { Fragment } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/NavbarStyles";
import { icon } from "../types";

type navProps = {
  selected: icon,
  navigation: any,
  userID: any
};

const Navbar = (props: navProps) => {
  const { selected, navigation, userID } = props;

  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home", {userID: userID})}
        style={styles.navBarContainerButton}
      >
        {selected === "Home" ? (
          <Fragment>
            <Image
              source={require("../assets/HomeIcon-Blue.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarTextSelected}>Home</Text>
          </Fragment>
        ) : (
          <Fragment>
            <Image
              source={require("../assets/HomeIcon-White.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarText}>Home</Text>
          </Fragment>
        )}
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Calendar", {userID: userID})}
      style={styles.navBarContainerButton}>
        {selected === "Calendar" ? (
          <Fragment>
            <Image
              source={require("../assets/CalendarIcon-Blue.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarTextSelected}>Calendar</Text>
          </Fragment>
        ) : (
          <Fragment>
            <Image
              source={require("../assets/CalendarIcon-White.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarText}>Calendar</Text>
          </Fragment>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search New Service")}
        style={styles.navBarContainerButton}
      >
        {selected === "Book" ? (
          <Fragment>
            <Image
              source={require("../assets/BookIcon-Blue.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarTextSelected}>Book</Text>
          </Fragment>
        ) : (
          <Fragment>
            <Image
              source={require("../assets/BookIcon-White.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarText}>Book</Text>
          </Fragment>
        )}
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Inbox", {userID: userID})}
      style={styles.navBarContainerButton}>
        {selected === "Inbox" ? (
          <Fragment>
            <Image
              source={require("../assets/InboxIcon-Blue.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarTextSelected}>Inbox</Text>
          </Fragment>
        ) : (
          <Fragment>
            <Image
              source={require("../assets/InboxIcon-White.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarText}>Inbox</Text>
          </Fragment>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarContainerButton}
        onPress={() => navigation.navigate("Profile", {userID: userID})}
      >
        {selected === "Profile" ? (
          <Fragment>
            <Image
              source={require("../assets/ProfileIcon-Blue.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarTextSelected}>Profile</Text>
          </Fragment>
        ) : (
          <Fragment>
            <Image
              source={require("../assets/ProfileIcon-White.png")}
              style={styles.navBarImage}
            />
            <Text style={styles.navBarText}>Profile</Text>
          </Fragment>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
