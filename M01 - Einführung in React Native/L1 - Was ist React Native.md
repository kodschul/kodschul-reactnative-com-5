
# React Native Schulung

## Was ist React Native?

React Native ist ein Open-Source-Framework von Facebook, das es Entwicklern ermöglicht, native Apps für iOS und Android mit JavaScript zu erstellen. Es verwendet die gleichen Designprinzipien wie React, ermöglicht aber eine plattformübergreifende Entwicklung, sodass der gleiche Codebase auf verschiedenen Plattformen funktionieren kann.

## Kernkonzepte

### Komponenten

Komponenten sind die Bausteine jeder React Native App. Eine Komponente kann als eine Funktion oder Klasse definiert werden, die eine Ansicht zurückgibt, die auf dem Bildschirm gerendert werden kann.

```javascript
import React from 'react';
import { Text, View } from 'react-native';

const HelloWorld = () => (
  <View>
    <Text>Hello, world!</Text>
  </View>
);
```

### State Management

Der Zustand (state) einer Komponente ist ein Objekt, das Daten enthält, die sich im Laufe der Zeit ändern können. React Native verwendet den Zustand, um bei Änderungen eine Neuzeichnung der Komponente zu veranlassen.

```javascript
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

### Styling

Styling in React Native wird typischerweise durch JavaScript-Objekte erreicht, die CSS-ähnliche Eigenschaften verwenden.

```javascript
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 24,
  },
});

const StyledComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Stylish Text</Text>
  </View>
);
```

## Praktische Anwendung

Die praktische Anwendung der Methoden in React Native umfasst den Aufbau von Benutzeroberflächen, das Management von Daten und die Interaktion mit APIs. Für eine effektive Schulung ist es wichtig, echte Projekte zu entwickeln, die diese Elemente enthalten.

### Beispielprojekt: Wetter-App

- UI-Komponenten: Anzeige von Wetterdaten
- State Management: Speicherung der Benutzereingaben
- API-Interaktion: Abrufen von Wetterdaten über eine öffentliche API

## Fazit

React Native ist eine mächtige Technologie für die Entwicklung nativer Apps auf iOS und Android mit einer einzigen Codebase. Durch das Erlernen der Grundlagen von React Native können Entwickler effiziente und performante Anwendungen erstellen.
