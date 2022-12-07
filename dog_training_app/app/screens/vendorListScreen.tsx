import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/vendorListScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../components/Background";
import { photoPickerButton } from "aws-amplify";
// Use CalendarPicker later
//import CalendarPicker from 'react-native-calendar-picker';

// Test data for demo
const DATA = [
  {
    name: "John Chambers",
    triggers: "Cars",
    phone: "573-341-6731",
    dates: "12/7/2022",
  },
  {
    name: "Pat Smith",
    triggers: "Other Dogs",
    phone: "872-509-1302",
    dates: "12/8/2022",
  },
  {
    name: "Tom Brock",
    triggers: "Cars",
    phone: "314-344-1450",
    dates: "12/7/2022",
  },
  {
    name: "Carrie Thomas",
    triggers: "Other Dogs",
    phone: "314-291-3501",
    dates: "12/9/2022",
  },
];

const Item = ({
  name,
  triggers,
  phone,
  dates,
  navigation,
}: {
  name: any;
  triggers: any;
  phone: any;
  dates: any;
  navigation: any;
}) => (
  <View>
    <View style={styles.vendorSelectionSpace} />
    <TouchableOpacity
      onPress={() => navigation.navigate("Home", { triggers: "Cars" })}
      style={styles.vendorSelectionItem}
    >
      <View
        // The container for text
        style={styles.vendorSelectionItemTextContainer}
      >
        <Text
          // Where name of the vendor will go
          style={styles.vendorSelectionItemTextContainerName}
        >
          {name}
        </Text>
        <Text
          // Where the triggers will go
          style={styles.vendorSelectionItemTextContainerTriggers}
        >
          Triggers: {triggers}
        </Text>
        <Text
          // Where the number will go
          style={styles.vendorSelectionItemTextContainerNumber}
        >
          Number: {phone}
        </Text>
        <Text
          // Where the triggers will go
          style={styles.vendorSelectionItemTextContainerDate}
        >
          Dates: {dates}
        </Text>
      </View>
      <Text
        // Right arrow for vendors
        style={styles.vendorSelectionItemArrow}
      >
        &#8250;
      </Text>
    </TouchableOpacity>
  </View>
);

function VendorListScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  // Read in trigger parameter
  const { triggers, date, location } = route.params;

  console.log( date )

  // For the Flat List. This is how we populate each above Item with information
  const renderItem = ({ item }: { item: any }) =>
    // Checks if the dates on the data line up with the user-input one
    item.dates == date && item.triggers == triggers ? (
      <Item
        name={item.name}
        triggers={item.triggers}
        phone={item.phone}
        dates={item.dates}
        navigation={navigation}
      />
    ) : null;

  return (
    <Background>
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
          style={styles.vendorSelectionTopText}
        >
          What vendor would you like to work with?
        </Text>
        <View
          // For scrolling through the list of triggers
          style={styles.vendorSelectionScroll}
        >
          <FlatList data={DATA} renderItem={renderItem} />
        </View>
      </SafeAreaView>
    </Background>
  );
}

export default VendorListScreen;
