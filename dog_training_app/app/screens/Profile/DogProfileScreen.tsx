import React, { useState } from 'react';
import { View, Image, Text, Pressable, TextInput } from 'react-native';
import styles from '../../styles/DogProfileScreenStyles.js';

function DogProfileScreen({navigation}: {navigation: any}) {
    return (
        <View
        style={styles.background} >
            <View 
            style={styles.logoContainer}>
                <Text
                style={styles.logoText}>
                    Test:)
                </Text>
            </View>
        </View>
    );
}

export default DogProfileScreen;