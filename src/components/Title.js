import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={style.title}>Calculadora de IMC</Text>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    };
});

export default Title;