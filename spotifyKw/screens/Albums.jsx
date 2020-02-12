import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    View, 
    ScrollView, 
    Text, 
    StyleSheet, 
    FlatList,
    ActivityIndicator
} from 'react-native';
import Indicator from '../components/Indicator';
import { getRecentlyPlayed } from "../store/action/spotify";
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
    const { recentlyPlayed, onload_recentlyPlayed } = useSelector(state => state.spotify)
    const dispatch = useDispatch()
    // console.log('spotifyState ==========>' ,recentlyPlayed && recentlyPlayed.length ? recentlyPlayed[0].track.album : 'belum ada')
    useEffect(() => {
        dispatch(getRecentlyPlayed())
    }, [])

    const render = () => {
        return (
            <View style={styles.row}>
                <FlatList
                    data={recentlyPlayed}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    renderItem={({item}) => {
                        // console.log(item, '===================')
                        return (
                            <View style={styles.col}>
                                <AlbumCard item={item.track.album} />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.track.album.id}
                />
            </View>
        )
    }

    return (
        <View>
            <ScrollView>
                <View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>Made for you</Text>
                    </View>
            {
                onload_recentlyPlayed
                    ? <Indicator />
                    : recentlyPlayed && recentlyPlayed.length
                        ?  render()
                        : <Text style={[styles.title, { fontSize: 15 }]}>Empty playlist</Text>
            }
            
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