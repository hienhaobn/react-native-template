import { Navigation } from 'react-native-navigation';

import App from './App';

Navigation.registerComponent('spotify.App', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'spotify.App',
            },
          },
        ],
      },
    },
  });
});
