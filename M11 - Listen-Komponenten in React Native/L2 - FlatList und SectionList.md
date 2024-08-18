
# React Native: FlatList & SectionList Schulung

## Einführung

In dieser Schulung werden die Komponenten `FlatList` und `SectionList` von React Native behandelt. Diese Komponenten sind essenziell für die effiziente Darstellung von Listen und Abschnittslisten in mobilen Anwendungen.

## FlatList

`FlatList` ist eine Komponente, die es ermöglicht, lange Listen von Daten effizient anzuzeigen. Die Komponente rendert nur die sichtbaren Elemente und optimiert die Leistung, indem sie Elemente wiederverwendet, die aus dem sichtbaren Bereich scrollen.

### Beispiel

```javascript
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { key: 'A', value: 'Apfel' },
  { key: 'B', value: 'Banane' },
  { key: 'C', value: 'Cherry' }
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const MyFlatList = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => <Item title={item.value} />}
    keyExtractor={item => item.key}
  />
);
```

## SectionList

`SectionList` ist eine weitere Komponente, die ähnlich wie `FlatList` funktioniert, aber zusätzlich Abschnitte mit Überschriften unterstützt. Dies ist ideal für geordnete Daten, die in Gruppen angezeigt werden sollen.

### Beispiel

```javascript
import React from 'react';
import { SectionList, Text, View } from 'react-native';

const sections = [
  { title: 'Obst', data: ['Apfel', 'Banane'] },
  { title: 'Gemüse', data: ['Karotte', 'Tomate'] }
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const MySectionList = () => (
  <SectionList
    sections={sections}
    renderItem={({ item }) => <Item title={item} />}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
    )}
    keyExtractor={(item, index) => item + index}
  />
);
```

## Praktische Tipps

- Verwenden Sie `FlatList` für einfache Listen und `SectionList` für strukturierte Listen mit Überschriften.
- Optimieren Sie die Performance durch die richtige Verwendung von `keyExtractor` und das Vermeiden unnötiger Rerenders.

## Fazit

`FlatList` und `SectionList` sind leistungsstarke Werkzeuge in React Native, die es Entwicklern ermöglichen, komplexe Listenstrukturen effizient zu verwalten und darzustellen.
