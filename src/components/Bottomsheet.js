import React from 'react';
import {Animated, Dimensions, Pressable, StyleSheet} from 'react-native';

export default function Bottomsheet({close, animatedValue, children}) {
  const {height} = Dimensions.get('window');

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, height],
    outputRange: ['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)'],
  });
  const translateY = animatedValue.interpolate({
    inputRange: [0, height - 1, height],
    outputRange: [0, 0, height],
  });

  const animatedShadow = {backgroundColor, transform: [{translateY}]};
  const animatedStyles = {transform: [{translateY: animatedValue}]};

  return (
    <Animated.View style={[styles.modalShadow, animatedShadow]}>
      <Pressable style={styles.cancelArea} onPress={close} />
      <Animated.View style={[styles.modal, animatedStyles]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cancelArea: {
    flex: 1,
  },
  modalShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,

    justifyContent: 'flex-end',
  },
  modal: {
    height: '75%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
  },
});
