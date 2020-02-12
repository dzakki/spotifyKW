import React from 'react';
import { connect } from 'react-redux';
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
import { getTracks } from '../store/action/spotify';
import AlbumDetailHeader from '../components/AlbumDetails/AlbumDetailHeader';
import MusicList from '../components/AlbumDetails/MusicList';
import { musicDummies } from '../dummies';
import Indicator from '../components/Indicator';
import { TRACKS } from '../store/actionTypes';

class DetailAlbum extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const url = this.props.route.params.item.href
        this.props.dispatch(getTracks(url))
    }

    componentWillUnmount(){
        this.props.dispatch({
            type: TRACKS,
            data: []
        })
    }

    render(){
        const { tracks, onload_tracks } = this.props.spotify
        const { item } = this.props.route.params
        return (
            <ScrollView>
                <View style={{
                    marginTop: 10
                }}></View>
                <AlbumDetailHeader item={item} />
                {
                    onload_tracks
                        ? <Indicator />
                        : tracks.length
                            ? (
                                <View style={styles.bodyContainer}>
                                    <FlatList
                                        data={tracks}
                                        renderItem={(track) => <MusicList item={track} /> }
                                        keyExtractor={ (track) => track.id }
                                    > 
                                    </FlatList>       
                                </View>
                            )
                            : <Indicator /> 
                }
            </ScrollView>
        )
    }

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(DetailAlbum)

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        marginTop: 10
    }
})