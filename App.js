import { StyleSheet, View } from 'react-native';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (
    <View style={styles.container}>
      <FormIMC/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
});
