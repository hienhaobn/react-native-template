import { StatusBar } from 'react-native';
import { Navigation } from 'react-native-navigation';

import AlbumScreen from './album/album.screen';
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
export const ALBUM_SCREEN = 'spotify.AlbumScreen';

export const Screens = new Map();

Screens.set(HOME_SCREEN, HomeScreen);
Screens.set(SEARCH_SCREEN, SearchScreen);
Screens.set(LIBRARY_SCREEN, LibraryScreen);
Screens.set(PREMIUM_SCREEN, PremiumScreen);
Screens.set(PROFILE_SCREEN, ProfileScreen);
Screens.set(ALBUM_SCREEN, AlbumScreen);

export const startApp = () => {
  StatusBar.setBarStyle('dark-content', true);

  return Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_ROOT',
        children: [
          {
            stack: {
              id: 'HOME_TAB_STACK',
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
              id: 'SEARCH_TAB_STACK',
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
              id: 'LIBRARY_TAB_STACK',
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
              id: 'PREMIUM_TAB_STACK',
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
