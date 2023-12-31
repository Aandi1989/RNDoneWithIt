import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native'

// this ActivityIndicator crashed app we so far we can just download animation without editing the

function ActivityIndicator({ visible = false }) {
    const animation = useRef(null);
    if(!visible) return null;

    return (<View style={styles.animationContainer}>
        <LottieView 
        source={require('../assets/animations/Animation.json')}
        ref={animation}
        autoPlay
        loop
        style={{
            width: 250,
            height: 250,
          }}
    />
    </View>);
    
}
const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, /* if apply this string loader will be in the midle of screen under other content */
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });


export default ActivityIndicator;