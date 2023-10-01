import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import sections from '../constants/sections';

const Variant = ({variant}) => (
  <Pressable style={styles.variant}>
    <Text>{variant}</Text>
  </Pressable>
);

const Section = ({section}) => (
  <View style={styles.section}>
    <Text style={styles.h1}>{section.title}</Text>
    <View style={styles.variants}>
      {section?.variants?.map(v => (
        <Variant key={v} variant={v} />
      ))}
    </View>
  </View>
);

export default function Filters() {
  return (
    <ScrollView style={styles.container}>
      {sections?.map(s => (
        <Section key={s.title} section={s} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  h1: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 15,
  },
  variant: {
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    padding: 10,
  },
  variants: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});
