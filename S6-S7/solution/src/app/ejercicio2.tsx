import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Pantallas del Stack
function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Pantalla Home (Stack)</Text>
      <Button title="Ir a Detalles" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Pantalla Detalles (Stack)</Text>
    </View>
  );
}

// Stack Navigator
function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Pantallas de los Tabs
function SettingsScreen() {
  return <View style={styles.center}><Text style={styles.title}>Settings (Tab)</Text></View>;
}

function ProfileScreen() {
  return <View style={styles.center}><Text style={styles.title}>Profile (Tab)</Text></View>;
}

// Tab Navigator
function TabNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Ejercicio2() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1 }}>
        <NavigationIndependentTree>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="StackNav">
              <Drawer.Screen name="StackNav" component={StackNav} options={{ title: 'Home & Details' }} />
              <Drawer.Screen name="TabNav" component={TabNav} options={{ title: 'Settings & Profile' }} />
            </Drawer.Navigator>
          </NavigationContainer>
        </NavigationIndependentTree>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});

