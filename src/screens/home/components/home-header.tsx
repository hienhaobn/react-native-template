import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from 'hooks/useTheme';

import { EThemeColor, getThemeColor } from 'styles/colors';
import { FONTS } from 'styles/fonts';
import { SIZES } from 'styles/sizes';

import { scale } from 'utils/scale';

const HomeHeader = () => {
  const { themeCurrent } = useTheme();
  const styles = customStyles(themeCurrent);

  return (
    <View style={[styles.row, styles.between]}>
      <Text style={{ ...FONTS.h2 }}>Chào buổi tối</Text>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={1}>
          <Image
            source={require('assets/images/delivery-time/ic_delivery_time.png')}
            style={[styles.image, styles.mr12]}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
          <Image source={require('assets/images/setting/ic_setting.png')} style={[styles.image]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const customStyles = (themeCurrent: EThemeColor) => {
  const color = getThemeColor(themeCurrent);
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    between: {
      justifyContent: 'space-between',
    },
    image: {
      tintColor: getThemeColor(themeCurrent).textBase,
    },
    mr12: {
      marginRight: scale(SIZES.font),
    },
  });
};

export default HomeHeader;
