// *******************************************
// *
// *     Espero ter acertado as cores :)     *
// *
// *******************************************



import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';

const FormIMC = () => {
  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(170);
  const [genero, setGenero] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (peso <= 0 || altura <= 0) {
      setResultado(null);
      return;
    }

    // Cálculo do IMC
    const imc = (peso * 10000) / (altura * altura);
    const imcArredondado = parseFloat(imc.toFixed(1));

    let cat;
    let cor;

    if (genero === "homem") {
      if (imc < 18.5) {
        cat = "Abaixo do peso";
        cor = "#3498db";
      } else if (imc >= 18.5 && imc < 25) {
        cat = "Peso normal";
        cor = "#2ecc71";
      } else if (imc >= 25 && imc < 30) {
        cat = "Sobrepeso";
        cor = "#f1c40f";
      } else if (imc >= 30 && imc < 35) {
        cat = "Obesidade 1";
        cor = "#e67e22";
      } else if (imc >= 35 && imc < 40) {
        cat = "Obesidade 2";
        cor = "#e74c3c";
      } else {
        cat = "Obesidade 3";
        cor = "#c0392b";
      }
    } else {
      if (imc < 18.5) {
        cat = "Abaixo do peso";
        cor = "#3498db";
      } else if (imc >= 18.5 && imc < 24) {
        cat = "Peso normal";
        cor = "#2ecc71";
      } else if (imc >= 24 && imc < 29) {
        cat = "Sobrepeso";
        cor = "#f1c40f";
      } else if (imc >= 29 && imc < 35) {
        cat = "Obesidade 1";
        cor = "#e67e22";
      } else if (imc >= 35 && imc < 40) {
        cat = "Obesidade 2";
        cor = "#e74c3c";
      } else {
        cat = "Obesidade 3";
        cor = "#c0392b";
      }
    }

    // Cálculo do Peso Ideal
    let pesoIdeal;
    if (genero === "homem") {
      pesoIdeal = 52 + (0.75 * (altura - 152.4));
    } else {
      pesoIdeal = 49 + (0.67 * (altura - 152.4));
    }
    const pesoIdealArredondado = parseFloat(pesoIdeal.toFixed(1));

    // Cálculo do Peso Mínimo e Máximo Ideais
    const alturaEmMetros = altura / 100;
    const pesoMinIdeal = 18.5 * (alturaEmMetros * alturaEmMetros);
    const pesoMaxIdeal = 24.9 * (alturaEmMetros * alturaEmMetros);
    const pesoMinIdealArredondado = parseFloat(pesoMinIdeal.toFixed(1));
    const pesoMaxIdealArredondado = parseFloat(pesoMaxIdeal.toFixed(1));

    setResultado({
      imc: imcArredondado,
      cat,
      cor,
      pesoIdeal: pesoIdealArredondado,
      pesoMinIdeal: pesoMinIdealArredondado,
      pesoMaxIdeal: pesoMaxIdealArredondado
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.resultados}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <Text style={styles.info}>
          By - Coanzitos - 2025
        </Text>

        {/* Seletor de Gênero */}
        <View style={styles.section}>
          <Text style={styles.sectionTitulo}>Gênero</Text>
          <View style={styles.grupoRadio}>
            <TouchableOpacity 
              style={[styles.textoSelecaoBotao, genero === "homem" && styles.radioSelecionado]} 
              onPress={() => setGenero("homem")}
            >
              <Text style={styles.textoSelecao}>Masculino</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.textoSelecaoBotao, genero === "mulher" && styles.radioSelecionado]} 
              onPress={() => setGenero("mulher")}
            >
              <Text style={styles.textoSelecao}>Feminino</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ajuste de Altura */}
        <View style={styles.section}>
          <Text style={styles.label}>Altura (cm):</Text>
          <Slider
            style={styles.slider}
            minimumValue={100}
            maximumValue={220}
            step={1}
            value={altura}
            onValueChange={setAltura}
            minimumTrackTintColor="#1abc9c"
            maximumTrackTintColor="#ecf0f1"
          />
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={String(altura)}
            onChangeText={text => setAltura(Number(text))}
          />
        </View>

        {/* Ajuste de Peso */}
        <View style={styles.section}>
          <Text style={styles.label}>Peso (kg):</Text>
          <Slider
            style={styles.slider}
            minimumValue={30}
            maximumValue={200}
            step={0.5}
            value={peso}
            onValueChange={setPeso}
            minimumTrackTintColor="#1abc9c"
            maximumTrackTintColor="#ecf0f1"
          />
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={String(peso)}
            onChangeText={text => setPeso(Number(text))}
          />
        </View>

        <TouchableOpacity onPress={calcularIMC} style={styles.botao}>
          <Text style={styles.textoBt}>Calcular IMC</Text>
        </TouchableOpacity>
      </View>

      {resultado && (
        <View style={[styles.resultados, { borderColor: resultado.cor }]}>
          <Text style={styles.tituloResultado}>Seu Resultado</Text>
          <Text style={styles.textoResultado}>IMC: {resultado.imc}</Text>
          <Text style={[styles.textoResultado, { color: resultado.cor }]}>{resultado.cat}</Text>
          <Text style={styles.textoResultado}>Peso Ideal: {resultado.pesoIdeal} kg</Text>
          <Text style={styles.textoResultado}>Peso Mínimo Ideal: {resultado.pesoMinIdeal} kg</Text>
          <Text style={styles.textoResultado}>Peso Máximo Ideal: {resultado.pesoMaxIdeal} kg</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  resultados: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#ddd'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 10
  },
  info: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20
  },
  section: {
    marginBottom: 15
  },
  sectionTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  grupoRadio: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textoSelecaoBotao: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ecf0f1'
  },
  radioSelecionado: {
    backgroundColor: '#1abc9c'
  },
  textoSelecao: {
    color: '#2c3e50'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  slider: {
    width: '100%',
    height: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginTop: 5,
    textAlign: 'center'
  },
  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10
  },
  textoBt: {
    color: '#fff',
    fontSize: 16
  },
  tituloResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  textoResultado: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default FormIMC;