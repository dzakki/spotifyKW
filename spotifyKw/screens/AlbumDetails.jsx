import React from 'react';
import { 
    View, 
    Text, 
    TouchableHighlight, 
    ScrollView, 
    Image,
    FlatList,
    StyleSheet,
    YellowBox
} from 'react-native';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
import AlbumDetailHeader from '../components/AlbumDetails/AlbumDetailHeader';
import MusicList from '../components/AlbumDetails/MusicList';

import { musicDummies } from '../dummies';

export default class DetailAlbum extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        const { item } = this.props.route.params
        return (
            <ScrollView>
                <View style={{
                    marginTop: 10
                }}></View>
                <AlbumDetailHeader item={item} />
                <View style={styles.bodyContainer}>
                    <FlatList
                        data={musicDummies}
                        renderItem={(music) => <MusicList item={music} /> }
                        keyExtractor={ (music) => music.title }
                    > 
                    </FlatList>       
                </View>
            </ScrollView>
        )
    }

}


const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        marginTop: 10
    }
})