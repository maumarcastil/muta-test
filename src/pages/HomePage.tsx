import CouponCard from '@/src/components/cards/CouponCard';
import { styling } from '@/src/theme';
import VideoPlayer from '@components/video/VideoPlayer';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Buttons/PrimaryButton';

interface Coupon {
  price: number;
  coupon: string;
}

const coupons: Coupon[] = [
  {
    price: 10000,
    coupon: 'asd-asd-dasda-dads - utilizado',
  },
  {
    price: 15000,
    coupon: 'asd6-asd7-dasda8-dads9 - utilizado',
  },
  {
    price: 20000,
    coupon: 'asd2-asd3-dasda4-dads5 - utilizado',
  },
];

const HomePage = () => {
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
      <View style={styles.containerContent}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.containerWelcome}>
            <Text style={[themeStyles.textTertiary, styles.text]}>Buenas tardes mutante,</Text>
            <Text style={[themeStyles.textSecondary, styles.textName]}>Jeffrey Saavedra</Text>
          </View>

          <View style={styles.containerVideo}>
            <VideoPlayer
              urlVideo="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
              textVideo="Conoce nuestra FUERZA MUTANTE"
            />
            <Text style={[themeStyles.textSecondary, styles.text]}>Lo nuevo</Text>
          </View>

          <View style={styles.containerCupons}>
            {coupons.map((coupon, index) => (
              <CouponCard key={index} price={coupon.price} coupon={coupon.coupon} />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.containerCollection}>
        <PrimaryButton text="Solicitar recolección" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  contentContainerStyle: {
    marginHorizontal: 16,
  },
  containerWelcome: {
    gap: 4,
    marginVertical: 16,
    marginBottom: 32,
  },
  text: {
    fontSize: 18,
  },
  textName: {
    fontSize: 22,
  },
  containerVideo: {
    gap: 8,
    marginBottom: 32,
  },
  containerCupons: {
    gap: 8,
  },
  containerCollection: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
