import React from 'react';
import { 
    View, 
    ScrollView, 
    Text, 
    StyleSheet, 
    Image,
    FlatList,
} from 'react-native';
import AlbumCard from '../components/Albums/AlbumCard';

const AlbumsDummies = [
    {
        title: 'Avenged sevenfold',
        url: 'https://yt3.ggpht.com/a/AGF-l795x6DhDU9NkZFUw_6dqoiBtR9yQc7GaBtBhQ=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
        title: 'Alan walker',
        url: 'https://images-na.ssl-images-amazon.com/images/I/315aCYIpI2L._AC_SX425_.jpg'
    },
    {
        title: 'IU Hotel del luna',
        url: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/15/c436a58e-73e5-11e9-b91a-87f62b76a5ee_image_hires_115320.jpg?itok=3c74LGuO&v=1557892405'
    }
]

export default function Albums() {
    return (
        <View>
            <ScrollView>
                <View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>Made for you</Text>
                    </View>
                    <View style={styles.row}>

                        <FlatList
                            data={AlbumsDummies}
                            numColumns={2}
                            columnWrapperStyle={styles.row}
                            renderItem={(item) => {
                                return (
                                    <View style={styles.col}>
                                        <AlbumCard item={item} />
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.url}
                        >

                        </FlatList>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleWrapper: {
        marginTop: 10,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: '#fff'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    col: {
        width: '50%',
        height: 220,
        padding: 8
    },
})