import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabNavigatioIcon({ icon }) {
    return (
        <Ionicons name={icon} size={29} color="white"/>
    )
}