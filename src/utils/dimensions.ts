import { Dimensions, Platform, StatusBar } from 'react-native';

export const getScreenWidth = () => {
  return Dimensions.get('window').width;
};

export const getScreenHeight = () => {
  return Dimensions.get('window').height;
};

export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
};

export function ifIphoneX(iPhoneXHeight: number, iPhoneNormalHeight: number) {
  if (isIphoneX()) {
    return iPhoneXHeight;
  }
  return iPhoneNormalHeight;
}

export const getStatusBarHeight = (safe = true) => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
};

export const getBottomSpace = (): number => {
  return isIphoneX() ? 34 : 0;
};
