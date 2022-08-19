import { Dimensions } from 'react-native';

import { scale } from 'utils/scale';

const { width, height } = Dimensions.get('window');

export const SIZES = {
  // global sizes
  base: scale(8),
  font: scale(14),
  radius: scale(12),
  padding: scale(24),

  // font sizes
  largeTitle: scale(40),
  h1: scale(30),
  h2: scale(20),
  h3: scale(16),
  h4: scale(14),
  h5: scale(12),
  body1: scale(30),
  body2: scale(22),
  body3: scale(16),
  body4: scale(14),
  body5: scale(12),

  // app dimensions
  width,
  height,
};
