
# React Native Navigation Schulung

## TabNavigators und DrawerNavigator

### TabNavigators

Ein TabNavigator ermöglicht es Benutzern, zwischen verschiedenen Bildschirmen, Ansichten oder Funktionsbereichen innerhalb einer App durch Tabs zu wechseln. Diese Tabs können am oberen oder unteren Rand des Bildschirms angeordnet werden.

#### Beispiel für einen BottomTabNavigator:

```javascript
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
```

### DrawerNavigator

Ein DrawerNavigator bietet eine seitliche Navigationsmenüleiste, die durch Ziehen von der Seite oder durch Tippen auf ein Menüsymbol geöffnet werden kann. Dies ist nützlich für Apps mit mehreren Navigationspfaden und Funktionen.

#### Beispiel für einen DrawerNavigator:

```javascript
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
```

## Praktische Anwendung

### Anwendungsfälle:

- **TabNavigators**: Ideal für einfache Navigationsaufgaben, wo die Benutzer schnell zwischen wenigen Hauptansichten wechseln können.
- **DrawerNavigator**: Geeignet für komplexere Navigationsstrukturen mit vielen Optionen, einschließlich Untersektionen und Werkzeugen, die nicht sofort sichtbar sein müssen.

### Best Practices:

- Halten Sie die Navigation intuitiv und zugänglich.
- Verwenden Sie Icons und Labels konsistent in den Tabs.
- Implementieren Sie Sicherheitsmaßnahmen, wie z.B. Authentifizierungskontrollen, beim Zugriff auf persönliche oder sicherheitsrelevante Informationen über das Navigationsmenü.

## Fazit

Die Wahl zwischen einem TabNavigator und einem DrawerNavigator hängt von der Art der App und den spezifischen Anforderungen an die Benutzerinteraktion ab. Durch das Verständnis und die Implementierung dieser Navigationskomponenten können Entwickler die Benutzererfahrung erheblich verbessern.
