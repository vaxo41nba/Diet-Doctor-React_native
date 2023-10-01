import React from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Recipes from '../screens/Recipes';
import images from '../constants/images';
import MealPlans from '../screens/MealPlans';

const Tab = createMaterialTopTabNavigator();

export default function SearchRecipes({navigation}) {
  const goToFilters = () => navigation.navigate('Filters');

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput placeholder="Search" style={{flex: 1}} />
        <Pressable style={styles.filter} onPress={goToFilters}>
          <Image source={images.filter} style={styles.icon} />
        </Pressable>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Recipes" component={Recipes} />
        <Tab.Screen name="Meal Plans" component={MealPlans} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 5,

    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    zIndex: 1,
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
});
