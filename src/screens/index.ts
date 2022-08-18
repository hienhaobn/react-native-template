import { StatusBar } from 'react-native';
import { Navigation } from 'react-native-navigation';

import HomeScreen from './home/home.screen';
import LibraryScreen from './library/library.screen';
import PremiumScreen from './premium/premium.screen';
import ProfileScreen from './profile/profile.screen';
import SearchScreen from './search/search.screen';

export const HOME_SCREEN = 'spotify.HomeScreen';
export const SEARCH_SCREEN = 'spotify.SearchScreen';
export const LIBRARY_SCREEN = 'spotify.LibraryScreen';
export const PREMIUM_SCREEN = 'spotify.PremiumScreen';
export const PROFILE_SCREEN = 'spotify.ProfileScreen';
export const TAB_BOTTOM = 'spotify.TabBottom';

export const Screens = new Map();
Screens.set(HOME_SCREEN, HomeScreen);
Screens.set(SEARCH_SCREEN, SearchScreen);
Screens.set(LIBRARY_SCREEN, LibraryScreen);
Screens.set(PREMIUM_SCREEN, PremiumScreen);
Screens.set(PROFILE_SCREEN, ProfileScreen);

export const startApp = () => {
  StatusBar.setBarStyle('dark-content', true);

  return Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'ROOT',
        children: [
          {
            stack: {
              id: 'BOTTOM_TABS_LAYOUT',
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  testID: 'HOME_TAB',
                  // icon: require('../assets/images/ic_home.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: SEARCH_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  testID: 'SEARCH_TAB',
                  // icon: require('../assets/images/ic_home.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: LIBRARY_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Library',
                  testID: 'LIBRARY_TAB',
                  // icon: require('../assets/images/ic_home.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: PREMIUM_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Premium',
                  testID: 'PREMIUM_TAB',
                  // icon: require('../assets/images/ic_home.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
};
