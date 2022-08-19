import { getThemeColor } from 'styles/colors';

import { scale } from 'utils/scale';

import { SIZES } from './sizes';

export const FONTS = {
  largeTitle: {
    fontFamily: 'CircularSpotifyText-Black',
    fontSize: SIZES.largeTitle,
    color: getThemeColor().textBase,
  },
  h1: {
    fontFamily: 'CircularSpotifyText-Bold',
    fontSize: SIZES.h1,
    lineHeight: scale(36),
    color: getThemeColor().textBase,
  },
  h2: {
    fontFamily: 'CircularSpotifyText-Bold',
    fontSize: SIZES.h2,
    lineHeight: scale(30),
    color: getThemeColor().textBase,
  },
  h3: {
    fontFamily: 'CircularSpotifyText-Bold',
    fontSize: SIZES.h3,
    lineHeight: scale(22),
    color: getThemeColor().textBase,
  },
  h4: {
    fontFamily: 'CircularSpotifyText-Bold',
    fontSize: SIZES.h4,
    lineHeight: scale(22),
    color: getThemeColor().textBase,
  },
  h5: {
    fontFamily: 'CircularSpotifyText-Bold',
    fontSize: SIZES.h5,
    lineHeight: scale(22),
    color: getThemeColor().textBase,
  },
  body1: {
    fontFamily: 'CircularSpotifyText-Light',
    fontSize: SIZES.body1,
    lineHeight: scale(36),
    color: getThemeColor().textBase,
  },
  body2: {
    fontFamily: 'CircularSpotifyText-Light',
    fontSize: SIZES.body2,
    lineHeight: scale(30),
    color: getThemeColor().textBase,
  },
  body3: {
    fontFamily: 'CircularSpotifyText-Light',
    fontSize: SIZES.body3,
    lineHeight: scale(22),
  },
  body4: {
    fontFamily: 'CircularSpotifyText-Light',
    fontSize: SIZES.body4,
    lineHeight: scale(22),
    color: getThemeColor().textBase,
  },
  body5: {
    fontFamily: 'CircularSpotifyText-Light',
    fontSize: SIZES.body5,
    lineHeight: scale(22),
    color: getThemeColor().textBase,
  },
  CircularSpotifyText_Black: 'CircularSpotifyText-Black',
  CircularSpotifyText_BlackItalic: 'CircularSpotifyText-BlackItalic',
  CircularSpotifyText_Book: 'CircularSpotifyText-Book',
  CircularSpotifyText_BookItalic: 'CircularSpotifyText-BookItalic',
  CircularSpotifyText_Bold: 'CircularSpotifyText-Bold',
  CircularSpotifyText_Light: 'CircularSpotifyText-Light',
  CircularSpotifyText_Medium: 'CircularSpotifyText-Medium',
  CircularSpotifyText_MediumItalic: 'CircularSpotifyText-MediumItalic',
};
