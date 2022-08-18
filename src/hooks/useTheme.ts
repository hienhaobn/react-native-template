import { useColorScheme } from 'react-native';

import { GlobalVariable } from 'constants/global-variable';

import { EThemeColor } from 'styles/colors';

export const useTheme = () => {
  const colorScheme = useColorScheme();

  // Todo
  const themeCurrent = EThemeColor.Light;

  if (colorScheme === 'dark') {
    // Todo
    // themeCurrent = EThemeColor.Dark;
  }

  GlobalVariable.themeCurrent = themeCurrent;

  return {
    themeCurrent,
  };
};
