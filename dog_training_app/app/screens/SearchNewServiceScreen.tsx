import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/SearchNewServiceScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";

function SearchNewServiceScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView
      // Ensures content doesn't go outside of newer iPhone design
      style={styles.background}
    >
      <TouchableOpacity
        // Back button press functionality
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text
          // The actual text content of the back button
          style={styles.backButtonText}
        >
          &#8592;
        </Text>
      </TouchableOpacity>
      <Text
        // Description for selecting trigger
        style={styles.triggerSelectionTopText}
      >
        What trigger do you want to work on?
      </Text>
      <ScrollView
        // For scrolling through the list of triggers
        style={styles.triggerSelectionScroll}
      >
        <View style={styles.triggerSelectionSpace} />
        <TouchableOpacity
          // "Other Dogs" trigger button
          onPress={() =>
            navigation.navigate("Search New Service Date", {
              triggers: "Other Dogs",
            })
          }
          style={styles.triggerSelectionItem}
        >
          <View style={styles.triggerSelectionItemContent}>
            <Image
              style={styles.triggerSelectionItemContentImage}
              source={require("../assets/triggerOtherDogs.png")}
            />
            <Text style={styles.triggerSelectionItemContentText}>
              Other Dogs
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.triggerSelectionSpace} />
        <TouchableOpacity
          // "Cars" trigger button
          onPress={() =>
            navigation.navigate("Search New Service Date", { triggers: "Cars" })
          }
          style={styles.triggerSelectionItem}
        >
          <View style={styles.triggerSelectionItemContent}>
            <Image
              style={styles.triggerSelectionItemContentImage}
              source={require("../assets/triggerCars.png")}
            />
            <Text style={styles.triggerSelectionItemContentText}>Cars</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.triggerSelectionSpace} />
        <TouchableOpacity
          // "Skateboards" trigger button
          onPress={() =>
            navigation.navigate("Search New Service Date", {
              triggers: "Skateboards",
            })
          }
          style={styles.triggerSelectionItem}
        >
          <View style={styles.triggerSelectionItemContent}>
            <Image
              style={styles.triggerSelectionItemContentImage}
              source={require("../assets/triggerSkateboards.png")}
            />
            <Text style={styles.triggerSelectionItemContentText}>
              Skateboards
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.triggerSelectionSpace} />
        <TouchableOpacity
          // "Bicycles" trigger button
          onPress={() =>
            navigation.navigate("Search New Service Date", {
              triggers: "Bicycles",
            })
          }
          style={styles.triggerSelectionItem}
        >
          <View style={styles.triggerSelectionItemContent}>
            <Image
              style={styles.triggerSelectionItemContentImage}
              source={require("../assets/triggerBicycles.png")}
            />
            <Text style={styles.triggerSelectionItemContentText}>Bicycles</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.triggerSelectionSpace} />
        <TouchableOpacity
          // "Other" trigger button
          onPress={() =>
            navigation.navigate("Search New Service Date", {
              triggers: "Other",
            })
          }
          style={styles.triggerSelectionItem}
        >
          <View style={styles.triggerSelectionItemContent}>
            <Image
              style={styles.triggerSelectionItemContentImage}
              source={require("../assets/triggerOther.png")}
            />
            <Text style={styles.triggerSelectionItemContentText}>Other</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchNewServiceScreen;
