import React, { Fragment, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/HomeScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <Fragment>
      <SafeAreaView
        // Every other part of the screen
        style={styles.background}
      >
        <View
          // Where the navigation bar will go
          style={styles.navBarContainer}
        >
          <TouchableOpacity style={styles.navBarContainerButton}>
            <View
              style={[
                styles.navBarIconContainer,
                { backgroundColor: "lightgreen" },
              ]}
            >
              <Image
                source={require("../assets/homeIcon.png")}
                style={styles.navBarImageSmall}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBarContainerButton}>
            <View
              style={[
                styles.navBarIconContainer,
                { backgroundColor: "orange" },
              ]}
            >
              <Image
                source={require("../assets/calendarIcon.png")}
                style={styles.navBarImageSmall}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search New Service")}
            style={styles.navBarContainerButton}
          >
            <Image
              source={require("../assets/plusIcon.png")}
              style={styles.navBarImageLarge}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBarContainerButton}>
            <View
              style={[styles.navBarIconContainer, { backgroundColor: "pink" }]}
            >
              <Image
                source={require("../assets/chatIcon.png")}
                style={styles.navBarImageSmall}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navBarContainerButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <View
              style={[
                styles.navBarIconContainer,
                { backgroundColor: "lightblue" },
              ]}
            >
              <Image
                source={require("../assets/profileIcon.png")}
                style={styles.navBarImageSmall}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View
      // Bottom of screen that should be the same color as nav bar
      ></View>
    </Fragment>
  );
}

export default HomeScreen;
