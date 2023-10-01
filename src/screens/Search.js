import React, {useCallback, useRef} from 'react';
import {
  BackHandler,
  StyleSheet,
  Animated,
  Image,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import Bottomsheet from '../components/Bottomsheet';
import TapButton from '../components/TapButton';
import images from '../constants/images';
import SearchRecipes from '../navigation/SearchRecipes';

export default function Search({navigation}) {
  const screenWidth = Dimensions.get('screen').width;

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true;

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );

  const animatedValue = useRef(new Animated.Value(0)).current;
  const {height} = Dimensions.get('window');

  const close = () => {
    Animated.timing(animatedValue, {
      toValue: height + 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const children = (
    <>
      <Pressable style={styles.closeContainer} onPress={close}>
        <Image source={images.close} style={styles.close} />
      </Pressable>

      <Text style={styles.h1}>Welcome to Diet Doctor</Text>
      <Text style={styles.h2}>
        As a free user, you can follow a basic meal plan, explore our recipies,
        and use the food navigator to help guide your food choices.
        {'\n'}
        {'\n'}
        Start your free 30-day free trial and gain full access. Unlock
        personalised food recommendations, educational videos, premium meal
        plans, recipes, nd much more!
      </Text>

      <TapButton
        text="Got it"
        width={screenWidth - 40}
        height={50}
        feedbackColor="white"
        buttonStyle={styles.button}
        onPress={close}
      />
    </>
  );

  return (
    <>
      <SearchRecipes navigation={navigation} />

      <Bottomsheet
        animatedValue={animatedValue}
        children={children}
        close={close}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 40,
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  closeContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: 20,
    right: 30,
  },
  close: {
    width: 20,
    height: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 60,
    textAlign: 'center',
  },
  h2: {
    fontSize: 18,
  },
});
