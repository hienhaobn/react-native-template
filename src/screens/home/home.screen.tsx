import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { useTheme } from 'hooks/useTheme';

import { EThemeColor, getThemeColor } from 'styles/colors';

import { scale } from 'utils/scale';

import HomeHeader from './components/home-header';

interface IProps {
  componentId: string;
}

const HomeScreen = (props: IProps) => {
  const { themeCurrent } = useTheme();
  const styles = customStyles(themeCurrent);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.content}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

const customStyles = (themeCurrent: EThemeColor) => {
  const color = getThemeColor(themeCurrent);
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor().backgroundBase,
    },
    content: {
      marginHorizontal: scale(12),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};

export default HomeScreen;
