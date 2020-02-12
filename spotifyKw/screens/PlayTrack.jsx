import React from 'react';
import { View, ScrollView, Text } from "react-native";
import { WebView } from 'react-native-webview';

export default function PlayTrack(props){
    const playButton = () => {
        return `
            <div id="text">
                <iframe 
                    id="btnPlay"
                    src="https://open.spotify.com/embed/track/${props.route.params.id}" 
                    width="310" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                    style="width:100%;"
                >
                </iframe>
            </div>
            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    document.querySelectorAll('button')[0].click();
                });
            </script>
        `
    }
    return (
        <View style={{flex: 1, justifyContent: 'flex-end', bottom: 0}}>
            <View style={{flex: 1}}>
                <WebView 
                    style={{
                        width: '100%',
                        height: 80,
                        backgroundColor: 'black',
                        flex: 1,
                        position: 'absolute',
                        justifyContent: 'flex-end',
                        bottom:0,
                        marginBottom: 5
                    }}
                    originWhitelist={['*']}
                    source={{uri: `https://open.spotify.com/embed/track/${props.route.params.id}`}}
                />
            </View>
        </View>
    )
}









// https://josephkhan.me/iframe-with-react-native/
// https://developer.spotify.com/documentation/widgets/generate/play-button/