import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import styles from "../styles/inboxScreenStyles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

/*
const DATA = [
    {
        message: "Hi!",
        me: true
    },
    {
        message: "Hello!",
        me: false
    },
    {
        message: "When do you want to meet?",
        me: true
    }
];
*/

// For populating Today and Upcoming
const Item = ({
    message,
    me
  }: {
    message: any,
    me: any
  }) => (
    <View>
      <View style={styles.vendorSelectionSpace} />
      <View
        style={styles.vendorSelectionItem}
      >
        <View
          // The container for text
          style={[styles.vendorSelectionItemTextContainer, me? {alignItems: "flex-end"} : null]}
        >
          <Text
            // Where name of the vendor will go
            style={styles.vendorSelectionItemTextContainerName}
          >
            {message}
          </Text>
        </View>
      </View>
    </View>
  );

function InboxScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {

let DATA = [
    {
        message: "Hi!",
        me: true
    },
    {
        message: "Hello!",
        me: false
    },
    {
        message: "When do you want to meet?",
        me: true
    }
];

const [userMessage, setUserMessage] = useState("");

// Get user ID so we can populate screen
const { userID } = route.params;

// For the Flat List. This is how we populate each above Item with information
const renderChat = ({ item }: { item: any }) =>
// Checks if the dates on the data line up with the user-input one
<Item
    message={item.message}
    me={item.me}
/>;

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
        </SafeAreaView>
        <View
        // Where the chat text input and chat display will go
        style={styles.chatView}
        >
          <FlatList data={DATA} extraData={DATA} renderItem={renderChat}/>
          <TextInput
          style={styles.chatViewTextInput}
          placeholder={"Message"}
          onChangeText={(message) => setUserMessage(message)}
          />
          <TouchableOpacity
          style={[styles.vendorSelectionItem, {borderRadius: 0, position: "absolute", bottom: -60, width: "100%", backgroundColor: "#FF94C1"}]}
          onPress={() => {
            DATA.push({message: userMessage, me: true});
            setTimeout(() => {  DATA.push({message: "That sounds perfect!", me: false}) }, 4000);
            setTimeout(() => {  DATA.push({message: "Let's meet at my place.", me: false}) }, 8000);
          }}>
            <View
            style={[styles.vendorSelectionItemTextContainer, {alignSelf: "center"}]}>
                <Text
                style={{}}>Enter</Text>
            </View>
          </TouchableOpacity>
        </View>
    </Background>
  );
}

export default InboxScreen;