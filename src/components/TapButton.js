import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function TapButton({
  width = 0,
  height = 0,
  text,
  feedbackColor = 'black',
  textColor = 'white',
  buttonStyle,
  onPress,
}) {
  const scale = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0.2);
  const radius = Math.sqrt(width ** 2 + height ** 2);

  const style = useAnimatedStyle(() => {
    return {
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius * 2,
      backgroundColor: feedbackColor,
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {scale: scale.value},
      ],
      opacity: opacity.value,
    };
  });

  const handleGesture = useAnimatedGestureHandler({
    onStart: ({x, y}) => {
      opacity.value = 0.2;
      scale.value = 0;
      translateX.value = x - radius;
      translateY.value = y - radius;

      scale.value = withTiming(1, {duration: 300});
      opacity.value = withTiming(0, {duration: 300});
    },
    onActive: () => {},
    onEnd: () => {},
  });

  return (
    <PanGestureHandler onGestureEvent={handleGesture} onBegan={onPress}>
      <Animated.View style={[styles.button, {width, height, ...buttonStyle}]}>
        <View style={styles.textContainer}>
          <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
        </View>
        <Animated.View style={style} />
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
