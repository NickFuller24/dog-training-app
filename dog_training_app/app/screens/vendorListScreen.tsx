import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../styles/SearchNewServiceDateScreenStyles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
// Use CalendarPicker later
//import CalendarPicker from 'react-native-calendar-picker';

function VendorListScreen({route, navigation}: {route: any, navigation: any}) {
    // Read in trigger parameter
    const { triggers, date, location } = route.params;

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
        </SafeAreaView>
    );
}

export default VendorListScreen;