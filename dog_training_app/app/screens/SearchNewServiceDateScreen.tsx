import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../styles/SearchNewServiceDateScreenStyles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
// Use CalendarPicker later
//import CalendarPicker from 'react-native-calendar-picker';

function SearchNewServiceDateScreen({route, navigation}: {route: any, navigation: any}) {
    // Read in trigger parameter
    const { triggers } = route.params;

    // Save date and location
    const [dateText, setDateText] = useState('');
    const [locationText, setLocationText] = useState('');

    const [datePopupVisible, setDatePopupVisible] = useState(false);
    const [locationPopupVisible, setLocationPopupVisible] = useState(false);
    return (
        <SafeAreaView
        // Ensures content doesn't go outside of newer iPhone design
        style={styles.background}>
            <TouchableOpacity
            // Back button press functionality
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
                <Text
                // The actual text content of the back button
                style={styles.backButtonText}>
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
                <View style={styles.dateLocationSpace}/>
                <TouchableOpacity
                // Entire date button
                //onPress={() => setDatePopupVisible(true)}
                style={styles.dateItem}
                >
                    <View
                    // Container for date title and actual date
                    style={styles.dateLocationItemText}
                    >
                        <Text
                        // Date title
                        style={styles.dateLocationItemTextTitle}
                        >
                            Date
                        </Text>
                        <TextInput
                        // Actual date.
                        // When there is a popup menu, this will just be text
                        placeholder='Date'
                        onChangeText={date => setDateText(date)}
                        style={styles.dateLocationItemTextData}
                        >
                        </TextInput>
                    </View>
                    <Text
                    // Right arrow for date
                    style={styles.dateLocationItemArrow}
                    >
                        &#8250;
                    </Text>
                </TouchableOpacity>
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
                        placeholder='Location'
                        onChangeText={location => setLocationText(location)}
                        style={styles.dateLocationItemTextData}
                        >
                        </TextInput>
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
            onPress={() => navigation.navigate("Vendor List", {triggers: triggers, date: dateText, location: locationText})}
            style={styles.nextButton}
            >
                <Text
                // Next button text
                style={styles.nextButtonText}>
                    Next
                </Text>
            </TouchableOpacity>

            <Modal
            // Popup menu for date input
            // Will implement this later.
            animationType='slide'
            transparent={true}
            visible={datePopupVisible}>
                <View
                style={styles.datePopupContainer}
                >
                    <Text>Test</Text>
                </View>
            </Modal>

        </SafeAreaView>
    );
}

export default SearchNewServiceDateScreen;