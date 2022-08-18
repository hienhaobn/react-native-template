import { LogBox, Platform, UIManager } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './navigation';
import { startApp } from './screens';
import { store } from './stores';
import { getThemeColor } from './styles/colors';

// Ignore yellow box
LogBox.ignoreLogs([
  'Warning: isMounted(...) is deprecated',
  "Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.",
  'Could not find image',
  'RCTBridge required dispatch_sync',
  'Required dispatch_sync to load constants',
  'Require cycle: node_modules/',
  'Require cycle: src',
  'Possi',
  'Sending `onAnimatedValueUpdate',
  'Non-se',
  'ViewPr',
]);

// Enable LayoutAnimation on android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Register Screen
registerScreens(store);

// start application
Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});

// set detault options
Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    drawBehind: true,
    animate: false,
  },
  // TODO: custom bottom bar
  bottomTabs: {
    backgroundColor: getThemeColor().backgroundBase,
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    textColor: getThemeColor().textBase,
    selectedTextColor: getThemeColor().textBase,
    fontSize: 12,
  },
  statusBar: {
    backgroundColor: 'white',
    style: 'dark',
  },
});
