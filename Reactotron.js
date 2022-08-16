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
