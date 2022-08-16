module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.ios.js', '.android.js'],
        alias: {
          '@app': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console', 'ignite-ignore-reactotron'],
    },
  },
};
