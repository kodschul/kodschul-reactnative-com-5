
# React Native Navigation Beispiele

## Einführung in Navigation

In React Native ist die Navigation zwischen verschiedenen Bildschirmen und Ansichten ein zentraler Aspekt der App-Entwicklung. Hierfür wird oft die Bibliothek `react-navigation` verwendet, die eine Vielzahl von Navigationslösungen wie Stack-Navigation, Tab-Navigation und Schubladen-Navigation bietet.

## Installation von React Navigation

Um mit React Navigation zu beginnen, müssen Sie das Paket und seine Abhängigkeiten installieren:

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
```

## Beispiele für Navigationsmuster

### Stack Navigation

Stack Navigation ermöglicht das Navigieren zwischen Bildschirmen, wobei jeder neue Bildschirm auf den vorherigen gestapelt wird.

```javascript
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Tab Navigation

Tab Navigation bietet die Möglichkeit, zwischen verschiedenen Bildschirmen zu wechseln, indem Benutzer auf Tabs am unteren Rand des Bildschirms tippen.

```javascript
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
```

### Schubladen-Navigation (Drawer Navigation)

Schubladen-Navigation ermöglicht es Benutzern, durch das Ziehen einer Seitenleiste, die von einer Seite des Bildschirms gleitet, zwischen Menüpunkten zu wechseln.

```javascript
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
```

## Fazit

Die Beherrschung der verschiedenen Navigationsmuster in React Native ist entscheidend für die Entwicklung moderner und intuitiver mobiler Anwendungen. Mit React Navigation können Entwickler effiziente und benutzerfreundliche Navigationslösungen erstellen.
