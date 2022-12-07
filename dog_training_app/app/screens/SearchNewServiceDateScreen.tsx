import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/SearchNewServiceDateScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../components/Background";
import DateTimePicker from '@react-native-community/datetimepicker';

function SearchNewServiceDateScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  // Read in trigger parameter
  const { triggers } = route.params;

  // Save date and location
  const [date, setDate] = useState(new Date());
  const [locationText, setLocationText] = useState("Rolla, MO");

  const [datePopupVisible, setDatePopupVisible] = useState(false);
  const [locationPopupVisible, setLocationPopupVisible] = useState(false);
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
          style={styles.dateLocationSelectionTopText}
        >
          When do you want to work on {triggers}?
        </Text>
        <View
          // Container for the date and location buttons
          style={styles.dateLocationContainer}
        >
          <View style={styles.dateLocationSpace} />
          <View
            // Entire date button
            style={styles.dateItem}
          >
            <View style={styles.dateLocationItemText}>
              <Text
                // Date title
                style={styles.dateLocationItemTextTitle}
              >
                Date
              </Text>
              <DateTimePicker
                style={{ position: "absolute", left: -85, top: 20, width: 200 }}
                mode="date"
                value={date}
                onChange={(event, date) => setDate(date || new Date())}
              />
            </View>
            <Text
              // Right arrow for date
              style={styles.dateLocationItemArrow}
            >
              &#8250;
            </Text>
          </View>
          <TouchableOpacity
            // Entire location button
            style={styles.locationItem}
          >
            <View
              // Container for location title and actual location
              style={styles.dateLocationItemText}
            >
              <Text
                // Location title
                style={styles.dateLocationItemTextTitle}
              >
                Location
              </Text>
              <TextInput
                // Actual location
                placeholder="Location"
                onChangeText={(location) => setLocationText(location)}
                style={styles.dateLocationItemTextData}
                value={locationText}
              ></TextInput>
            </View>
            <Text
              // Right arrow for location
              style={styles.dateLocationItemArrow}
            >
              &#8250;
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          // Next button
          onPress={() =>
            navigation.navigate("Vendor List", {
              triggers: triggers,
              date: date.toLocaleDateString(),
              location: locationText,
            })
          }
          style={styles.nextButton}
        >
          <Text
            // Next button text
            style={styles.nextButtonText}
          >
            Next
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}

export default SearchNewServiceDateScreen;
