import React, { Fragment, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/HomeScreenStyles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen({navigation}: {navigation: any}) {
    return (
        <Fragment>
            <SafeAreaView
            // Every other part of the screen
            style={styles.background}>
                <View
                // Where the navigation bar will go
                style={styles.navBarContainer}
                >
                    <TouchableOpacity
                    style={styles.navBarContainerButton}>
                        <Image source={require('../assets/favicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.navBarContainerButton}>
                        <Image source={require('../assets/favicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.navBarContainerButton}>
                        <Image source={require('../assets/favicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.navBarContainerButton}>
                        <Image source={require('../assets/favicon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.navBarContainerButton}>
                        <Image source={require('../assets/favicon.png')}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <View
            // Bottom of screen that should be the same color as nav bar
            >
            </View>
        </Fragment>
    );
}

export default HomeScreen;