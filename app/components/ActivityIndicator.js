import React from 'react';
import LottieView from 'lottie-react-native';

// this ActivityIndicator crashed app so I used simple ActivityIndicator from react-native

function ActivityIndicator({ visible = false }) {
    const animation = useRef(null);
    if(!visible) return null;

    return <LottieView 
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
    />
}


export default ActivityIndicator;