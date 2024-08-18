
# Text-Komponenten in React Native

## Einführung

Die `Text`-Komponente ist ein grundlegendes UI-Element in React Native, das zum Anzeigen von Text verwendet wird. Sie ist vergleichbar mit dem `<span>` oder `<div>` in HTML, bietet jedoch zusätzliche Funktionalitäten und Eigenschaften, die für die mobile Entwicklung optimiert sind.

## Grundlegende Verwendung

Um Text in React Native darzustellen, verwenden Sie die `Text`-Komponente. Hier ist ein einfaches Beispiel:

```javascript
import React from 'react';
import { Text } from 'react-native';

const SimpleText = () => <Text>Willkommen bei React Native!</Text>;
```

## Styling

Text-Komponenten können mit einem Style-Objekt gestaltet werden, das zahlreiche Eigenschaften wie `fontSize`, `fontWeight`, `color` usw. unterstützt.

```javascript
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textBig: {
    fontSize: 24,
    color: 'blue'
  }
});

const StyledText = () => <Text style={styles.textBig}>Großer blauer Text</Text>;
```

## Verschachtelung von Text-Komponenten

Text-Komponenten können ineinander verschachtelt werden, um komplexe Textlayouts zu erstellen. Styles werden von der äußeren Komponente an die inneren Komponenten vererbt.

```javascript
import React from 'react';
import { Text } from 'react-native';

const NestedText = () => (
  <Text style={{fontWeight: 'bold'}}>
    Dies ist <Text style={{color: 'red'}}>roter</Text> Text in einem fettgedruckten Text.
  </Text>
);
```

## Anpassung der Textausrichtung

Die Ausrichtung des Textes kann über das `textAlign`-Attribut gesteuert werden, das Werte wie `center`, `left` und `right` akzeptiert.

```javascript
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 18
  }
});

const CenteredText = () => <Text style={styles.centerText}>Zentrierter Text</Text>;
```

## Fazit

Die `Text`-Komponente ist ein vielseitiges Werkzeug in React Native, das für die Darstellung von Text unerlässlich ist. Durch Anpassen des Stils und Strukturieren des Inhalts können Entwickler attraktive und effektive Benutzeroberflächen schaffen.
