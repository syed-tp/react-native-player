/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {useRef, useState} from 'react'
import VideoPlayer, { type VideoPlayerRef } from 'react-native-video-player';




function App(): React.JSX.Element {
  const playerRef = useRef<VideoPlayerRef>(null);
  const [position, setPosition] = useState({ top: 10, right: 10 });

  const moveWatermark = (positionType) => {
    switch (positionType) {
      case 'top-right':
        setPosition({ top: 10, right: 10 });
        break;
      case 'bottom-right':
        setPosition({ top: 200, right: 10 });
        break;
      case 'top-left':
        setPosition({ top: 10, left: 10 });
        break;
      case 'bottom-left':
        setPosition({ top: 200, left: 10 });
        break;
    }
  };
  

  return (
      <View style={styles.container}>
        <Text><Text><Text><Text><Text></Text></Text></Text></Text></Text>
        <VideoPlayer
          ref={playerRef}
          endWithThumbnail
          thumbnail={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
          }}
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          onError={(e) => console.log(e)}
          showDuration={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    margin:10,
    fontSize:30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
