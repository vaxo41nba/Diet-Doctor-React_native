import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../constants/images';

const Item = ({type}) => (
  <TouchableOpacity style={styles.type}>
    <Image source={images[type]} style={styles.image} />
    <Text style={styles.typeText}>{type}</Text>
  </TouchableOpacity>
);

const {width} = Dimensions.get('window');
const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 0.6;

export default function Recipes() {
  const popular = ['Chicken', 'Keto', 'Cake', 'Bread', 'Salad', 'Pizza'];

  return (
    <>
      <View style={{height: 110}} />

      <View style={styles.block}>
        <ScrollView>
          <Text>Popular</Text>

          <View style={styles.typeWrapper}>
            {popular.map(p => (
              <Item key={p} type={p} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  input: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 5,
  },
  filter: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  image: {
    height: imageHeight,
    width: imageWidth,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  typeWrapper: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 15,
  },
  type: {
    width: imageWidth,
    height: imageHeight + 30,
    alignItems: 'center',
  },
});
