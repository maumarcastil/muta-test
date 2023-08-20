import { DefaultTheme, NavigationContainer, type Theme } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme as customTheme } from '../theme';
import RootTabs from './RootTabs';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: customTheme.colors.backgroundPrimary,
    text: customTheme.colors.textSecondary,
  },
};

const RootStack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <RootTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootStack;
