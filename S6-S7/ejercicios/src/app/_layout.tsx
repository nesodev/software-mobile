import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ej 1: Hooks',
          tabBarLabel: 'Hooks',
        }}
      />
      <Tabs.Screen
        name="ejercicio2"
        options={{
          title: 'Ej 2: Navegación',
          tabBarLabel: 'Navegación',
        }}
      />
      <Tabs.Screen
        name="ejercicio3"
        options={{
          title: 'Ej 3: API',
          tabBarLabel: 'API',
        }}
      />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
