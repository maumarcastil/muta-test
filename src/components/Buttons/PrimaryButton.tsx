import { theme } from '@/src/theme';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.containerContentButton}>
        <View>
          <FontAwesome name="recycle" size={24} color="black" />
        </View>
        <Text style={[styles.textButton]}>{text}</Text>
        <View>
          <Feather name="arrow-right" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: theme.colors.primary,
    borderRadius: 100,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerContentButton: {
    gap: 12,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerIcon: {},
});

export default PrimaryButton;
