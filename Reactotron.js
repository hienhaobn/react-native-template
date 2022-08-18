import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let scriptHostname = 'localhost';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

Reactotron.clear();
const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: `${Config.APP_NAME} React Native`,
    host: scriptHostname,
  })
  .use(reactotronRedux())
  .useReactNative({})
  .connect();

console.tron = __DEV__ ? Reactotron : { log: () => {} };

export default reactotron;

//TODO: https://github.com/williamnvk/react-native-starter-kit/blob/master/src/config/configureReactotron.js

// import Reactotron, {
//   trackGlobalErrors,
//   openInEditor,
//   overlay,
//   asyncStorage,
//   networking
// } from "reactotron-react-native";
// import { reactotronRedux } from "reactotron-redux";
// import sagaPlugin from "reactotron-redux-saga";
// import apisaucePlugin from "reactotron-apisauce";

// console.disableYellowBox = true; // eslint-disable-line no-console

// const reactotron = Reactotron.configure({
//   name: "ReactNativeStarterKit"
// })
//   .useReactNative()
//   .use(reactotronRedux())
//   .use(sagaPlugin())
//   .use(apisaucePlugin())
//   .use(trackGlobalErrors())
//   .use(openInEditor())
//   .use(overlay())
//   .use(asyncStorage())
//   .use(networking());

// if (__DEV__) {
//   reactotron.connect();
//   reactotron.clear();
//   console.tron = Reactotron; // eslint-disable-line no-console
// }

// export default reactotron;
