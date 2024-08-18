
# Einführung in Layout-Komponenten mit React Native

## Übersicht

In dieser Einführung werden die Grundlagen der Layout-Komponenten in React Native behandelt. React Native bietet eine Vielzahl von Komponenten und APIs, um ansprechende und funktionale Layouts für mobile Apps zu gestalten.

## Kernlayout-Komponenten

### View

Die `View`-Komponente ist ein Container, der andere Komponenten umfasst und unterstützt Flexbox-Layout, Style und einige Touch-Handling-Eigenschaften.

```javascript
import { View, Text } from 'react-native';

const App = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Hello, world!</Text>
  </View>
);
```

### Text

Die `Text`-Komponente wird verwendet, um Text auf dem Bildschirm anzuzeigen. Sie kann innerhalb von `View` oder anderen Text-Komponenten verschachtelt werden, um komplexe Designs zu erstellen.

```javascript
import { Text, View } from 'react-native';

const App = () => (
  <View style={{padding: 10}}>
    <Text>Erste Zeile</Text>
    <Text>Zweite Zeile</Text>
  </View>
);
```

### Image

Die `Image`-Komponente zeigt Bilder an. Sie kann für Icons, Fotos und andere grafische Inhalte verwendet werden.

```javascript
import { Image, View } from 'react-native';

const App = () => (
  <View style={{padding: 10}}>
    <Image
      source={{uri: 'https://example.com/image.png'}}
      style={{width: 100, height: 100}}
    />
  </View>
);
```

### ScrollView

`ScrollView` ist eine Scrollbare Container-Komponente, die dazu dient, mehr Inhalte zu zeigen, als auf dem Bildschirm Platz haben.

```javascript
import { ScrollView, Text, View } from 'react-native';

const App = () => (
  <ScrollView style={{padding: 20}}>
    <Text>Scroll mich!</Text>
    <Text>Viele Zeilen hier...</Text>
  </ScrollView>
);
```

## Flexbox-Layout

React Native verwendet Flexbox für das Layout. Es ermöglicht eine flexible Anordnung von Komponenten in einer Container-Komponente, sowohl in vertikaler als auch in horizontaler Richtung.

### Beispiele für Flexbox

- **Flex Direction**: Bestimmt die Hauptachse des Layouts.
- **Justify Content**: Definiert die Verteilung der Kinder entlang der Hauptachse.
- **Align Items**: Bestimmt die Ausrichtung der Kinder entlang der Kreuzachse.

```javascript
import { View } from 'react-native';

const FlexExample = () => (
  <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
  </View>
);
```

## Fazit

Das Verständnis der Layout-Komponenten und des Flexbox-Modells ist entscheidend für das Erstellen ansprechender und reaktionsfähiger Layouts in React Native. Durch praktische Beispiele und Übungen können Entwickler diese Techniken effektiv nutzen, um komplexe Benutzeroberflächen zu gestalten.
