
## Picker-Komponente und ihre Verwendung

Die Picker-Komponente in React Native ermöglicht es den Benutzern, aus einer Reihe von Optionen in einem Dropdown-Menü zu wählen. Dies ist nützlich für Formulare, Einstellungen oder jede andere Art von Auswahlsteuerung.

### Beispiel

```javascript
import React, { useState } from 'react';
import { Picker, View } from 'react-native';

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={{ flex: 1, paddingTop: 40, alignItems: "center" }}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};
```

### Verwendungszweck

- **Formulare:** Sammeln von Benutzereingaben durch Auswahl.
- **Einstellungen:** Anpassen von App-Einstellungen durch Benutzerauswahl.
- **Filter:** Anwenden von Filtern auf Daten oder Inhalte in der App.

Die Picker-Komponente ist einfach zu verwenden und kann leicht an die visuellen Anforderungen der App angepasst werden, was sie zu einem unverzichtbaren Werkzeug in der mobilen Entwicklung macht.
