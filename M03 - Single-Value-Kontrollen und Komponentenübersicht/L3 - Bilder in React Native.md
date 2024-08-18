
# Bilder in React Native

## Einführung

In React Native ist das Arbeiten mit Bildern ein grundlegender Bestandteil der App-Entwicklung. Bilder können zur Verbesserung der Benutzeroberfläche, zur Darstellung von Inhalten und zur Interaktion mit den Benutzern eingesetzt werden.

## Bilder einbinden

### Statische Bilder

Statische Bilder sind die einfachsten, da sie direkt im Projekt gespeichert und referenziert werden. Hier ein Beispiel, wie ein statisches Bild eingebunden wird:

```javascript
import React from 'react';
import { Image, View } from 'react-native';

const LocalImage = () => (
  <View>
    <Image source={require('./path/to/image.png')} />
  </View>
);
```

### Netzwerkbilder

Bilder können auch über das Internet geladen werden, indem man die URL direkt als Quelle angibt:

```javascript
import React from 'react';
import { Image, View } from 'react-native';

const RemoteImage = () => (
  <View>
    <Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 100, height: 100 }} />
  </View>
);
```

## Bildgrößen und Anpassungen

React Native bietet verschiedene Möglichkeiten, die Größe von Bildern anzupassen und zu steuern, wie sie innerhalb einer Ansicht gerendert werden.

```javascript
<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={{ width: 200, height: 200, resizeMode: 'contain' }}
/>
```

## Praktische Anwendungen

### Beispiel: Fotogalerie-App

In einer Fotogalerie-App könnten Sie eine Liste von Bildern anzeigen, die beim Antippen vergrößert werden. Hier könnten Sie Komponenten wie `ScrollView` oder `FlatList` verwenden, um eine effiziente, scrollbare Liste von Bildern zu erstellen.

## Fazit

Das Arbeiten mit Bildern in React Native ist flexibel und ermöglicht es Entwicklern, leistungsstarke, visuell ansprechende Apps zu erstellen. Durch das Verständnis der Grundlagen der Bildverarbeitung können Sie Ihre Apps attraktiver und interaktiver gestalten.
