import React from 'react';
import { 
    View, 
    ActivityIndicator
} from 'react-native';

export default function Indicator (){
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <ActivityIndicator size="large" color="#fff"  />
        </View>
    )
}