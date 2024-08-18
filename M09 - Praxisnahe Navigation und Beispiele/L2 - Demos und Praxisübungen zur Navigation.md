
# Demos und Praxisübungen zur Navigation in React Native

## Einführung

In dieser Schulung konzentrieren wir uns auf die Implementierung von Navigationslösungen in React Native Apps. Navigation ist ein wesentlicher Bestandteil der meisten mobilen Apps, und React Native bietet mehrere Methoden und Bibliotheken, um dies zu realisieren.

## Grundlegende Navigationskonzepte

### React Navigation

React Navigation ist eine beliebte Bibliothek für die Navigation in React Native Apps. Sie ermöglicht eine Vielzahl von Navigationsmustern wie Stapelnavigation (Stack), Registerkartennavigation (Tab) und Schubladennavigation (Drawer).

#### Installation

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

#### Grundlegende Stapelnavigation

```javascript
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Tab Navigation

Tab-Navigation ermöglicht den schnellen Wechsel zwischen verschiedenen Bildschirmen.

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

## Demos und Praxisübungen

### Übung 1: Stapelnavigation

- Erstellen Sie eine App mit zwei Bildschirmen: Home und Details.
- Implementieren Sie Übergänge zwischen den Bildschirmen.

### Übung 2: Tab Navigation

- Entwickeln Sie eine App mit Tab-Navigation zwischen mindestens drei verschiedenen Bildschirmen.
- Veranschaulichen Sie die Anwendung von Icons und Anpassungsoptionen in den Tabs.

## Fazit

Die Navigation ist ein kritischer Bereich in der Entwicklung mobiler Anwendungen. Durch praktische Übungen können Entwickler die Techniken besser verstehen und effektiv in ihren Projekten anwenden.
