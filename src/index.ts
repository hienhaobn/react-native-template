import { LogBox } from 'react-native';

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
