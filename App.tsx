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
        <Text style={[styles.watermarkText, position]}>Watermark Text</Text>

        <View style={styles.buttonContainer}>
        <Text style={styles.text}>Apply watermark on</Text>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Button title="Top Left" onPress={() => moveWatermark('top-left')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Top Right" onPress={() => moveWatermark('top-right')} />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Button title="Bottom Left" onPress={() => moveWatermark('bottom-left')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Bottom Right" onPress={() => moveWatermark('bottom-right')} />
            </View>
          </View>
        </View>
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
  watermarkText: {
    position: 'absolute',
    right: 10,
    top: 10, 
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    opacity:0.7,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 400,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1,
    margin: 5,
  },
});

export default App;
