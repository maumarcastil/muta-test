/* eslint-disable @typescript-eslint/no-misused-promises */
import { styling } from '@/src/theme';
import { Ionicons } from '@expo/vector-icons';
import { type AVPlaybackStatusSuccess, ResizeMode, Video } from 'expo-av';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface VideoPlayerProps {
  urlVideo: string;
  textVideo?: string;
}

const VideoPlayer = ({ urlVideo, textVideo }: VideoPlayerProps) => {
  const themeStyles = styling();
  const video = React.useRef<Video | null>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatusSuccess | null>(null);

  const handlePlayPause = async () => {
    if (status?.isPlaying === true) {
      await video?.current?.pauseAsync();
    } else {
      await video?.current?.playAsync();
    }
  }


  return (
    <View style={styles.containerVideo}>
      <TouchableOpacity
        disabled={status?.isPlaying === null || status?.isPlaying === undefined}
        onPress={handlePlayPause}
        >
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: urlVideo,
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={(status) => { setStatus(() => status as AVPlaybackStatusSuccess); }}
        />

        {(status?.isPlaying === null || status?.isPlaying === undefined) && (
          <View style={styles.containerControls}>
            <View style={styles.containerControlsInner}>
              <View style={styles.containerTextVideo}>
                {textVideo !== null && (
                  <Text style={[themeStyles.textSecondary, styles.textVideo]}>{textVideo}</Text>
                )}
              </View>

              <View style={styles.containerIconPlay}>
                <TouchableOpacity
                  style={styles.iconPLay}
                  onPress={handlePlayPause}
                  >
                  <Ionicons name="play" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  containerVideo: {
    position: 'relative',
    borderRadius: 10,
  },
  containerControls: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#00000099',
  },
  containerControlsInner: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  video: {
    width: '100%',
    height: 200,
    marginHorizontal: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
  },

  containerTextVideo: {
    flexGrow: 1,
    flexShrink: 1,
    width: '100%',
    flexBasis: 'auto',
  },
  textVideo: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  containerIconPlay: {
    flexGrow: 1,
    width: '50%',
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'flex-end',
  },
  iconPLay: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#CECECE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoPlayer;
