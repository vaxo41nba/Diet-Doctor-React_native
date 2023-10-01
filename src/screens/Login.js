import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import TapButton from '../components/TapButton';
import images from '../constants/images';

export default function Login({navigation}) {
  const screenWidth = Dimensions.get('screen').width;
  const loginMethods = ['Facebook', 'Google', 'Apple'];

  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const toggle = () => setHidden(!hidden);
  const handleEmail = e => setEmail(e);
  const handlePass = p => setPass(p);

  const handleLogin = () => {
    if (!email.trim() || !pass.trim()) {
      Alert.alert("Couldn't log in", 'Enter valid credentials');
    } else {
      navigation.navigate('Search');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=" Enter Email"
        style={styles.email}
        dataDetectorTypes="address"
        onChangeText={handleEmail}
        value={email}
      />
      <View style={styles.pass}>
        <TextInput
          secureTextEntry={hidden}
          placeholder="Password"
          style={styles.flex}
          onChangeText={handlePass}
          value={pass}
        />
        <Text onPress={toggle}>{hidden ? 'Show' : 'Hide'}</Text>
      </View>
      <Text style={styles.blue}>Forgotten Password</Text>

      <TapButton
        text="Log in"
        height={50}
        width={screenWidth - 30}
        feedbackColor="white"
        buttonStyle={styles.loginButton}
        onPress={handleLogin}
      />
      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={{marginHorizontal: 15}}>or</Text>
        <View style={styles.line} />
      </View>

      {loginMethods.map(m => (
        <TapButton
          key={m}
          text={
            <Text>
              <Image source={images[m]} style={styles.icon} />
              {'  '}Continue with {m}
            </Text>
          }
          width={screenWidth - 30}
          height={50}
          buttonStyle={styles.loginMethods}
          textColor="black"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  blue: {
    fontSize: 16,
    color: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  email: {
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 30,
    marginBottom: 15,
  },
  flex: {
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'black',
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 20,
  },
  loginMethods: {
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 2,
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  pass: {
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
