import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import images from '../constants/images';
import TapButton from '../components/TapButton';

export default function Intro({navigation}) {
  const screenWidth = Dimensions.get('screen').width;

  const [language, setLanguage] = useState('English');
  const languages = ['English', 'Español', 'Svenska'];

  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const dropdown = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      borderRadius: 5,
      backgroundColor: 'white',

      zIndex: 10,
      position: 'absolute',
      top: 10,
      left: 0,
    };
  });
  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const handleLanguages = () => {
    width.value = withTiming(180, {duration: 100});
    height.value = withTiming(100, {duration: 100});
    opacity.value = withDelay(100, withTiming(1));
  };

  const chooseLang = l => {
    setLanguage(l);
    opacity.value = 0;
    width.value = withTiming(0, {duration: 100});
    height.value = withTiming(0, {duration: 100});
  };

  const goToLogin = l => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={images.homescreen} style={{flex: 1}}>
      <LinearGradient
        locations={[0, 0.4, 1]}
        colors={['transparent', 'transparent', '#000']}
        style={styles.container}>
        <Pressable style={styles.language} onPress={handleLanguages}>
          <Animated.View style={dropdown}>
            <Animated.View style={opacityStyle}>
              {languages.map(l => (
                <Text
                  key={l}
                  style={styles.dropdownText}
                  onPress={() => chooseLang(l)}>
                  {l}
                </Text>
              ))}
            </Animated.View>
          </Animated.View>
          <Text style={styles.text}>{language} ▼</Text>
        </Pressable>

        <View style={styles.footer}>
          <TapButton
            width={screenWidth - 40}
            height={50}
            text="Sign up and try it for free"
            feedbackColor="black"
            buttonStyle={styles.signUpButton}
          />

          <TapButton
            width={screenWidth - 40}
            height={50}
            text="Already a member? Log in"
            feedbackColor="black"
            buttonStyle={styles.logInButton}
            onPress={goToLogin}
          />

          <Pressable style={styles.skipText}>
            <Text style={styles.text}>Skip for now</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  dropdownText: {
    fontSize: 20,
    marginVertical: 3,
    marginHorizontal: 10,
  },
  language: {
    width: 180,
    height: 40,
    marginTop: 40,
    backgroundColor: 'grey',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 6,
  },
  logInButton: {
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    borderRadius: 40,
    marginVertical: 20,
  },
  signUpButton: {
    backgroundColor: 'lime',
    alignSelf: 'center',
    borderRadius: 40,
  },
  skipText: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
