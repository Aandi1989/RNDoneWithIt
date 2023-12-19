import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';

function Screen({ children }) {
    return (
       <SafeAreaView style={styles.screen}>
        {children}
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, /*alternative method*/
    }
})


export default Screen;