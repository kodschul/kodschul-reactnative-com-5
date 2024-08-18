
# Daten laden und Indikatoren anzeigen in React Native

## Einführung

In modernen Anwendungen ist das Laden von Daten und das Feedback über den Ladestatus entscheidend für eine gute Benutzererfahrung. In React Native gibt es mehrere Methoden und Komponenten, die speziell für das asynchrone Laden von Daten und das Anzeigen von Indikatoren während des Ladeprozesses entwickelt wurden.

## Daten Laden

Das Laden von Daten kann durch verschiedene Ansätze erfolgen, von denen `fetch` und `axios` zwei der beliebtesten sind.

### Verwendung von `fetch`

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const DataLoader = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};
```

### Verwendung von `axios`

```javascript
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const fetchDataWithAxios = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    return null;
  }
};

const DataLoaderAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataWithAxios().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};
```

## Indikatoren anzeigen

Während Daten geladen werden, ist es wichtig, dem Benutzer mitzuteilen, dass etwas im Hintergrund passiert. React Native bietet dafür die `ActivityIndicator`-Komponente.

### Beispiel: ActivityIndicator

```javascript
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingIndicator = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);
```

## Fazit

Das effektive Laden von Daten und das Anzeigen von Ladeindikatoren sind wesentliche Aspekte der App-Entwicklung in React Native. Durch die Integration dieser Techniken können Entwickler eine reaktionsschnelle und benutzerfreundliche Oberfläche schaffen.
