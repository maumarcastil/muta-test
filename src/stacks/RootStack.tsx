import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootTabs from './RootTabs';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#212121',
    text: '#ffffff',
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
