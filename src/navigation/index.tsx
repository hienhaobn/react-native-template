import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Screens } from 'screens';

const WrapScreen = (ReduxScreen, store) => (props) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxScreen {...props} />
      </PersistGate>
    </Provider>
  );
};

export const registerScreens = (store) => {
  // Register screens
  // TODO: https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/
  Screens.forEach((ScreenComponent, key) => {
    return Navigation.registerComponent(
      key,
      () => withNavigationProvider(WrapScreen(gestureHandlerRootHOC(ScreenComponent), store)),
      () => gestureHandlerRootHOC(ScreenComponent)
    );
  });
};
