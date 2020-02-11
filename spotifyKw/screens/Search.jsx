import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import CategoryCard from '../components/Search/CategoryCard';
import { searchDummies } from '../dummies';

export default function Search() {
    return (
        <View style={styles.row}>
            <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                data={searchDummies}
                renderItem={(category) => {
                    return <CategoryCard category={category} />
                }}
                keyExtractor={category => category.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center'
    },
})