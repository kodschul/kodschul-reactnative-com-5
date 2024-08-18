
# Einführung in Buttons und Touchables in React Native

## Übersicht

In React Native gibt es verschiedene Möglichkeiten, interaktive Elemente wie Buttons zu erstellen. Diese Komponenten sind essentiell für die Erstellung reaktiver Benutzeroberflächen, die auf Benutzereingaben reagieren.

## Buttons

Der einfache `Button` ist eine vordefinierte Komponente in React Native, die eine einfache und effektive Möglichkeit bietet, eine Schaltfläche in Ihrer App zu implementieren.

```javascript
import React from 'react';
import { Button, View, Alert } from 'react-native';

const SimpleButton = () => (
  <View>
    <Button
      title="Drück mich"
      onPress={() => Alert.alert('Button wurde gedrückt')}
    />
  </View>
);
```

## Touchables

Für komplexere Interaktionen bietet React Native die `Touchable` Komponenten, wie `TouchableOpacity`, `TouchableHighlight` und `TouchableWithoutFeedback`. Diese erlauben mehr Flexibilität im Design und Verhalten.

### TouchableOpacity

`TouchableOpacity` verringert die Deckkraft des Elements beim Drücken, was eine visuelle Rückmeldung für den Benutzer darstellt.

```javascript
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const OpacityButton = () => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => Alert.alert('TouchableOpacity wurde gedrückt')}>
    <Text>Drück mich</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
```

### TouchableHighlight

`TouchableHighlight` ändert den Hintergrund des Elements beim Drücken, was ebenfalls eine visuelle Rückmeldung bietet.

```javascript
import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const HighlightButton = () => (
  <TouchableHighlight
    style={styles.button}
    underlayColor="#DDDDDD"
    onPress={() => Alert.alert('TouchableHighlight wurde gedrückt')}>
    <Text>Drück mich</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
```

## Fazit

Buttons und Touchables sind zentrale Bausteine für die Interaktivität in React Native Apps. Durch das Verständnis und die richtige Anwendung dieser Komponenten können Entwickler benutzerfreundliche und ansprechende Benutzeroberflächen gestalten.
