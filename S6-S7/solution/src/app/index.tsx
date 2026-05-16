import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function Ejercicio1() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState('Componente Montado');

  // Montaje y desmontaje del temporizador
  useEffect(() => {
    console.log('Efecto: Componente montado');
    const timer = setInterval(() => {
      console.log('Timer ejecutándose...');
    }, 2000);

    return () => {
      console.log('Efecto: Componente desmontado, limpiando timer');
      clearInterval(timer);
    };
  }, []);

  // Actualización del contador
  useEffect(() => {
    if (count > 0) {
      setMensaje(`Contador actualizado a: ${count}`);
      console.log(`Efecto: Contador actualizado a: ${count}`);
    }
  }, [count]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Ejercicio 1: Ciclo de Vida (Hooks)</Text>
        
        <View style={styles.box}>
          <Text style={styles.mensaje}>{mensaje}</Text>
          <Text style={styles.counter}>Valor: {count}</Text>
          <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
    paddingTop: 10,
  },
  box: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  mensaje: {
    fontSize: 16,
    color: '#E02020',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 24,
    marginBottom: 20,
  }
});

