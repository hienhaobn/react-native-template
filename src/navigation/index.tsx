import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { withNavigationProvider } from 'react-native-navigation-hooks';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Screens } from 'screens';

import { persistor } from 'stores';

const WrapScreen = (ReduxScreen: any, store: any) => (props: any) =>
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxScreen {...props} />
      </PersistGate>
    </Provider>
  );

export const registerScreens = (store: any) => {
  // Register screens
  // TODO: https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/
  Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(
      key,
      () => withNavigationProvider(WrapScreen(gestureHandlerRootHOC(ScreenComponent), store)),
      () => gestureHandlerRootHOC(ScreenComponent)
    );
  });
};
