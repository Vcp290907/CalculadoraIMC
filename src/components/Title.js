import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={StyleSheet.titulo}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;