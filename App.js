import { StyleSheet, Text, View } from 'react-native';
import FormIMC from './src/components/FormIMC.js';
import Title from './src/components/Title.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title>
        <FormIMC />
      </Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
