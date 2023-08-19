import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    primary: '#d8fc3a',

    iconActive: '#d8fc3a',
    iconInactive: '#9A9A9A',
    backgroundPrimary: '#212121',
    backgroundSecondary: '#171717',

    textPrimary: '#d8fc3a',
    textSecondary: '#F9F9F9',
    textTertiary: '#676767',
  },
};

export const styling = () =>
  StyleSheet.create({
    textPrimary: {
      color: theme.colors.textPrimary,
    },
    textSecondary: {
      color: theme.colors.textSecondary,
    },
    textTertiary: {
      color: theme.colors.textTertiary,
    },
  });
