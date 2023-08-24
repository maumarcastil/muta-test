import CouponCard from '@/src/components/cards/CouponCard';
import { styling } from '@/src/theme';
import VideoPlayer from '@components/video/VideoPlayer';
import * as React from 'react';
import { type LayoutChangeEvent, StyleSheet, Text, View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Buttons/PrimaryButton';

interface Coupon {
  price: number;
  coupon: string;
}

const coupons: Coupon[] = [
  {
    price: 10000,
    coupon: 'asd-asd-dasda - utilizado',
  },
  {
    price: 15000,
    coupon: 'asd6-asd7-dasda8 - utilizado',
  },
  {
    price: 20000,
    coupon: 'asd2-asd3-dasda4 - utilizado',
  },
  {
    price: 20000,
    coupon: 'asd2-asd3-dasda4 - utilizado',
  },
  {
    price: 20000,
    coupon: 'asd2-asd3-dasda4 - utilizado',
  },
];

const HomePage = () => {
  const themeStyles = styling();
  const insets = useSafeAreaInsets();
  const [heightView, setHeightView] = React.useState<number>(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeightView(height);
  };

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
        <FlatList
        data={coupons}
        keyExtractor={(_ , index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => (
          <View style={ coupons.length - 1 === index ? {marginBottom: heightView} : {marginBottom: 8} } > 
            <CouponCard price={item.price} coupon={item.coupon} />
          </View>
        )}
        ListHeaderComponent={() => (
          <>
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
          </>
        )}
        />
        <View
          onLayout={handleLayout}
          style={{
            bottom: 0,
            width: '100%',
            alignItems: 'center',
            position: 'absolute',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginVertical: 12,
              backgroundColor: 'transparent',
            }}>
            <PrimaryButton text="Solicitar recolección" />
          </View>
        </View>
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
    position: 'relative',
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
    marginBottom: 16,
  },
  containerCupons: {
    gap: 8,
    marginBottom: 12,
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
