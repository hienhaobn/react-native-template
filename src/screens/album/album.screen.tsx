import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { PROFILE_SCREEN } from '../';

interface IProps {
  componentId: string;
}
const AlbumScreen = (props: IProps) => {
  const handlePress = () => {
    Navigation.push(props.componentId, {
      component: {
        name: PROFILE_SCREEN,
      },
    });
  };

  const goBack = () => {
    Navigation.pop(props.componentId);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goBack}>
        <Text>back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text>Go to profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AlbumScreen;
