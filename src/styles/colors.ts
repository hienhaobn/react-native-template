import { GlobalVariable } from 'constants/global-variable';

export enum EThemeColor {
  Light = 'Light',
  Dark = 'Dark',
}

const Light = {
  transparent: 'transparent',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',

  backgroundBase: '#121212',
  backgroundPress: '#181818',
  textBase: '#FFFFFF',
  textDescription: '#A7A7A7',
};

const Dark = {};

export const getThemeColor = (theme = EThemeColor.Light) => {
  // Todo

  // if (theme === EThemeColor.Dark) {
  //   return Dark;
  // }
  return Light;
};

export const isThemeLight = () => {
  return GlobalVariable.themeCurrent === EThemeColor.Light;
};
