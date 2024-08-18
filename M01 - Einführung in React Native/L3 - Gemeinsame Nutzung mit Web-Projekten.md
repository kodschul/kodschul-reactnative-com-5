
# Gemeinsame Nutzung von Code zwischen React Native und Web-Projekten

## Einführung

Die gemeinsame Nutzung von Code zwischen Web- und Mobilanwendungen kann die Entwicklungseffizienz erheblich verbessern. Dieses Dokument beschreibt, wie Code zwischen React Native und React (für Web) geteilt werden kann, um wiederverwendbare Komponenten und Logik zu fördern.

## Kernkonzepte

### Plattformübergreifende Komponenten

Das Entwickeln von plattformübergreifenden Komponenten erfordert, dass man bedenkt, welche Elemente in beiden Umgebungen funktionieren. Einige UI-Komponenten können direkt in beiden Plattformen verwendet werden, während andere spezifische Anpassungen benötigen.

### Beispiel: Button-Komponente

```javascript
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button as WebButton } from 'react-bootstrap';

const CustomButton = ({ children, onClick, platform }) => {
  if (platform === 'web') {
    return <WebButton onClick={onClick}>{children}</WebButton>;
  } else {
    return (
      <TouchableOpacity onPress={onClick}>
        <View>
          <Text>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};
```

### Code-Sharing-Strategien

1. **Business Logic**: Logik, die keine UI-Elemente betrifft, wie Datenverarbeitung und API-Anrufe, kann leicht geteilt werden.
2. **Styling**: Während Styling-Anpassungen erforderlich sind, kann die grundlegende Logik für Stile beibehalten und angepasst werden.

### Beispiel: Nutzung von Hooks

Hooks können sowohl in React als auch in React Native verwendet werden, um Zustand und andere reaktive Logik zu handhaben.

```javascript
import { useState, useEffect } from 'react';

const useCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return data;
};
```

## Best Practices

- **Modulare Architektur**: Strukturieren Sie Code in modularen, wiederverwendbaren Einheiten.
- **Plattform-spezifische Dateien**: Verwenden Sie `.web.js` und `.native.js` Erweiterungen für plattform-spezifische Implementierungen.

## Fazit

Durch das Teilen von Code zwischen React und React Native können Teams die Entwicklungsgeschwindigkeit verbessern und konsistentere Anwendungen erstellen. Die Herausforderung liegt in der klaren Trennung von plattformunabhängiger und plattformabhängiger Logik.
