
# Verschiedene Typen von Touchables in React Native

In React Native sind Touchables eine wesentliche Komponente für die Interaktion mit dem Benutzer durch Berührungen. Sie ermöglichen es, verschiedene Aktionen auszuführen, wenn der Benutzer auf Elemente tippt. Hier sind die Haupttypen von Touchables und ihre Anwendungsbereiche:

## TouchableHighlight

`TouchableHighlight` wird verwendet, um eine visuelle Rückmeldung zu geben, indem die Ansicht unter dem Finger des Benutzers abgedunkelt wird, wenn das Touchable gedrückt wird.

```javascript
import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const ButtonHighlight = () => (
  <TouchableHighlight
    onPress={() => alert('Button Pressed!')}
    underlayColor="#DDDDDD">
    <Text>Press Me!</Text>
  </TouchableHighlight>
);
```

## TouchableOpacity

`TouchableOpacity` verringert die Deckkraft des View, wenn es gedrückt wird, was eine subtile visuelle Rückmeldung gibt.

```javascript
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonOpacity = () => (
  <TouchableOpacity onPress={() => alert('Button Pressed!')}>
    <Text>Tap Me!</Text>
  </TouchableOpacity>
);
```

## TouchableWithoutFeedback

`TouchableWithoutFeedback` wird verwendet, wenn keine visuelle Rückmeldung erwünscht ist. Es ermöglicht Interaktionen, ohne dass sich das Aussehen des Elementes ändert.

```javascript
import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

const ButtonNoFeedback = () => (
  <TouchableWithoutFeedback onPress={() => alert('Button Pressed!')}>
    <View>
      <Text>Just Press Me!</Text>
    </View>
  </TouchableWithoutFeedback>
);
```

## TouchableNativeFeedback (Android)

`TouchableNativeFeedback` nutzt die native Feedback-Animation von Android, was für Android-Anwender eine bekannte und angenehme Erfahrung darstellt.

```javascript
import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

const ButtonNative = () => (
  <TouchableNativeFeedback
    onPress={() => alert('Button Pressed!')}
    background={TouchableNativeFeedback.SelectableBackground()}>
    <View>
      <Text>Android Native Press!</Text>
    </View>
  </TouchableNativeFeedback>
);
```

## Zusammenfassung

Diese verschiedenen Typen von Touchables bieten in React Native vielfältige Möglichkeiten für die Interaktion mit Benutzern. Die Auswahl des richtigen Touchable-Typs hängt von der gewünschten Benutzererfahrung und der Art der visuellen Rückmeldung ab, die in der App erforderlich ist.
