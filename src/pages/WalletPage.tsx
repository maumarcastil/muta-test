import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styling } from '../theme';

const WalletPage = () => {
  const insets = useSafeAreaInsets();

  const themeStyles = styling();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      <Text style={[themeStyles.textPrimary, styles.textPrimary]}>Welcome</Text>
      <Text style={[themeStyles.textSecondary, styles.textSecondary]}>Wallet Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#212121',
  },
  textPrimary: {
    fontSize: 52,
    fontWeight: 'bold',
  },
  textSecondary: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default WalletPage;
