import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/SearchNewServiceScreenStyles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

function SearchNewServiceScreen({navigation}: {navigation: any}) {
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
            style={styles.triggerSelectionTopText}
            >
                What trigger do you want to work on?
            </Text>
            <ScrollView
            // For scrolling through the list of triggers
            style={styles.triggerSelectionScroll}
            >
                <View style={styles.triggerSelectionSpace}/>
                <TouchableOpacity
                // "Other Dogs" trigger button
                style={styles.triggerSelectionItem}>
                    <View
                    style={styles.triggerSelectionItemContent}>
                        <Image
                        style={styles.triggerSelectionItemContentImage}
                        source={require('../assets/favicon.png')}/>
                        <Text
                        style={styles.triggerSelectionItemContentText}>
                            Other Dogs
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.triggerSelectionSpace}/>
                <TouchableOpacity
                // "Cars" trigger button
                style={styles.triggerSelectionItem}>
                    <View
                    style={styles.triggerSelectionItemContent}>
                        <Image
                        style={styles.triggerSelectionItemContentImage}
                        source={require('../assets/favicon.png')}/>
                        <Text
                        style={styles.triggerSelectionItemContentText}>
                            Cars
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.triggerSelectionSpace}/>
                <TouchableOpacity
                // "Skateboards" trigger button
                style={styles.triggerSelectionItem}>
                    <View
                    style={styles.triggerSelectionItemContent}>
                        <Image
                        style={styles.triggerSelectionItemContentImage}
                        source={require('../assets/favicon.png')}/>
                        <Text
                        style={styles.triggerSelectionItemContentText}>
                            Skateboards
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.triggerSelectionSpace}/>
                <TouchableOpacity
                // "Bicycles" trigger button
                style={styles.triggerSelectionItem}>
                    <View
                    style={styles.triggerSelectionItemContent}>
                        <Image
                        style={styles.triggerSelectionItemContentImage}
                        source={require('../assets/favicon.png')}/>
                        <Text
                        style={styles.triggerSelectionItemContentText}>
                            Bicycles
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.triggerSelectionSpace}/>
                <TouchableOpacity
                // "More" trigger button
                style={styles.triggerSelectionItem}>
                    <View
                    style={styles.triggerSelectionItemContent}>
                        <Image
                        style={styles.triggerSelectionItemContentImage}
                        source={require('../assets/favicon.png')}/>
                        <Text
                        style={styles.triggerSelectionItemContentText}>
                            More
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SearchNewServiceScreen;