import { styling, theme } from '@/src/theme';
import { numberFormat } from '@/src/utils/convert';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CuponCardProps {
  price: number;
  coupon: string;
}

const CuponCard = ({ price, coupon }: CuponCardProps) => {
  const themeStyles = styling();

  return (
    <View style={[styles.container]}>
      <View>
        <Text style={[themeStyles.textPrimary, styles.textPriceCoupon]}>
          {`${numberFormat(price)} EN TOM NOODLESHOP`}
        </Text>
        <Text style={[themeStyles.textSecondary]}>Muestra este cupón y obtén tu beneficio</Text>
      </View>

      <View>
        <Text style={[themeStyles.textSecondary, styles.textCoupon]}>{coupon}</Text>
        <Text style={[themeStyles.textSecondary]}>
          * Tendrás 60 días para redimirlo - Valido solo presencial
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 16,
    paddingVertical: 24,
    borderRadius: 10,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  textPriceCoupon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCoupon: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default CuponCard;
