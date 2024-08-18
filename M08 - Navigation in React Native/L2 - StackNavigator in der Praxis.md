
# StackNavigator in der Praxis

## Einführung in den StackNavigator

Der StackNavigator ist ein Teil der React Navigation Bibliothek, die es ermöglicht, verschiedene Bildschirme in einer hierarchischen Art und Weise zu organisieren, wie ein Stapel von Karten. Dies ist besonders nützlich für Apps mit mehreren Ebenen der Navigation.

## Grundkonfiguration

Um den StackNavigator zu verwenden, muss zunächst die `react-navigation` Bibliothek installiert und importiert werden.

```bash
npm install @react-navigation/native @react-navigation/stack
```

```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Navigationsmethoden

Navigation zwischen den Bildschirmen kann durch die `navigation` Prop gesteuert werden, die jeder Bildschirmkomponente von StackNavigator zur Verfügung gestellt wird.

```javascript
function HomeScreen({ navigation }) {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  );
}

function DetailsScreen({ navigation }) {
  return (
    <Button
      title="Go Back"
      onPress={() => navigation.goBack()}
    />
  );
}
```

## Anpassung des Headers

Der Header, der von StackNavigator automatisch bereitgestellt wird, kann angepasst werden, um spezifische Funktionen oder Styling hinzuzufügen.

```javascript
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'My Home Screen', headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff' }}
/>
```

## Praktische Beispiele

- **Profil-Bildschirm Navigation**: Aufbau einer App mit einem Hauptbildschirm, der zu einem detaillierten Profilbildschirm navigiert.
- **Einstellungen-Menü**: Navigation durch ein Menü von Einstellungen, wobei jeder Bildschirm spezifische Optionen anzeigt.

## Fazit

Der StackNavigator bietet eine robuste Lösung für die Verwaltung der Bildschirmnavigation in React Native Apps, wodurch komplexe Navigationsmuster einfach und effizient implementiert werden können.
