import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Matriz() {
  const matriz = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Matriz 3x2</Text>
      {matriz.map((fila, i) => (
        <View key={i} style={styles.fila}>
          {fila.map((num) => (
            <View key={num} style={styles.celda}>
              <Text style={styles.texto}>{num}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fila: {
    flexDirection: 'row',
  },
  celda: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: '#f0f0f0',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});