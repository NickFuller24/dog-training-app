import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/CalendarScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../components/Background";

const DATA = [
  {
    name: "John Chambers",
    date: "December 3, 2022",
    time: "12 PM - 1 PM"
  },
  {
    name: "Kathy Rodgers",
    date: "December 5, 2022",
    time: "2 PM - 4 PM"
  },
  {
    name: "Pat Thomas",
    date: "December 6, 2022",
    time: "3 PM - 4 PM"
  }
]

// For populating Today and Upcoming
const Item = ({
  name,
  date,
  time
}: {
  name: any;
  date: any;
  time: any;
}) => (
  <View>
    <View style={styles.vendorSelectionSpace} />
    <TouchableOpacity
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
        <View
        style={styles.vendorSelectionItemTextContainerInner}>
          <Text
            // Where the date will go
            style={styles.vendorSelectionItemTextContainerDate}
          >
            {date}
          </Text>
          <Text
            // Where the time will go
            style={styles.vendorSelectionItemTextContainerTime}
          >
            {time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

function CalendarScreen({ navigation, route }: { navigation: any, route: any }) {
  // Get user ID so we can populate screen
  const { userID } = route.params;

  var date = "December 3, 2022";

  // For the Flat List. This is how we populate each above Item with information
  const renderTodayItem = ({ item }: { item: any }) =>
    // Checks if the dates on the data line up with the user-input one
    item.date == date ? (
      <Item
        name={item.name}
        date={item.date}
        time={item.time}
      />
    ) : null;

    const renderUpcomingItem = ({ item }: { item: any }) =>
    // Checks if the dates on the data line up with the user-input one
    item.date != date ? (
      <Item
        name={item.name}
        date={item.date}
        time={item.time}
      />
    ) : null;

  return (
    <Background>
      <SafeAreaView
        // Every other part of the screen
        style={styles.background}
      >
        <View
        style={styles.backButtonView}>
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
        </View>
        <View
        // For the "Today" section
        style={styles.todayView}>
          <Text
          style={styles.todayUpcomingViewText}>
            Today
          </Text>
          <FlatList data={DATA} renderItem={renderTodayItem}/>
          <View
          style={styles.vendorSelectionSpace}/>
        </View>

        <View
        // For the "Upcoming" section
        style={styles.upcomingView}>
          <Text
          style={styles.todayUpcomingViewText}>
            Upcoming
          </Text>
          <FlatList data={DATA} renderItem={renderUpcomingItem}/>
        </View>

      </SafeAreaView>
    </Background>
  );
}

export default CalendarScreen;