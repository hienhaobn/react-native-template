import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useAppDispatch, useAppSelector } from 'hooks/useState';

import { increment } from 'stores/counter';

const HomeScreen = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>{count}</Text>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
        }}
        onPress={() => dispatch(increment())}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
