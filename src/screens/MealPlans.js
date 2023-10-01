import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function MealPlans() {
  return (
    <>
      <View style={{height: 110}} />
      <View style={styles.block} />
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});
