
# Modale Ansichten und Statusleiste Steuern in React Native

## Modale Ansichten

Modale Ansichten in React Native sind Popup-Fenster, die Informationen oder Interaktionen über dem Hauptinhalt der Anwendung anzeigen, um die Aufmerksamkeit des Benutzers auf sich zu ziehen.

### Beispiel: Einfache Modale Ansicht

```javascript
import React, { useState } from 'react';
import { Modal, View, Text, Button } from 'react-native';

const SimpleModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text>Hello World!</Text>

          <Button
            title="Hide Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>

      <Button
        title="Show Modal"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};
```

## Statusleiste Steuern

Die Statusleiste ist ein wichtiges Element in mobilen Anwendungen, das Systeminformationen wie Uhrzeit, Batteriestand und Netzwerkstatus anzeigt. React Native ermöglicht es Entwicklern, die Statusleiste anzupassen.

### Beispiel: Statusleiste Farbe und Sichtbarkeit Ändern

```javascript
import React from 'react';
import { View, StatusBar } from 'react-native';

const AppStatusBar = () => (
  <View>
    <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
  </View>
);
```

## Fazit

Die Kontrolle über modale Ansichten und die Statusleiste ermöglicht eine bessere Benutzererfahrung und eine angepasste Oberfläche, die den Anforderungen und dem Branding der App entspricht. Durch das Verständnis dieser Elemente können Entwickler die Interaktivität und das visuelle Erscheinungsbild ihrer Anwendungen erheblich verbessern.
