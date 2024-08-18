
# Grundlagen der Navigation in React Native

## Einführung

In React Native ist die Navigation zwischen verschiedenen Bildschirmen oder Ansichten eine grundlegende Anforderung für die meisten Apps. Es gibt mehrere Bibliotheken, die für die Implementierung der Navigation verwendet werden können, wie z.B. React Navigation, eine der beliebtesten.

## Kernkonzepte der Navigation

### Navigation Stack

Der Navigation Stack ist ein grundlegendes Konzept, bei dem Bildschirme wie in einem Stapel (engl. stack) übereinandergelegt werden. Wenn ein neuer Bildschirm geöffnet wird, wird er oben auf den Stapel gelegt. Wenn der Benutzer zurückgeht, wird der oberste Bildschirm vom Stapel genommen.

```javascript
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Tab Navigation

Tab Navigation ermöglicht es Benutzern, zwischen mehreren Bildschirmen hin und her zu wechseln, indem sie auf Tabs am unteren Rand des Bildschirms tippen.

```javascript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstPage} />
        <Tab.Screen name="Second" component={SecondPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

## Praktische Beispiele

Die praktische Umsetzung der Navigation erfordert ein Verständnis für die unterschiedlichen Arten von Navigatoren und deren Einsatzmöglichkeiten in einer App.

### Beispielprojekt: Einkaufsliste App

- Navigation Stack: Wechsel zwischen der Einkaufsliste und Detailansichten von Produkten.
- Tab Navigation: Wechsel zwischen verschiedenen Kategorien von Produkten.

## Fazit

Die Beherrschung der Navigation in React Native ist entscheidend für die Erstellung moderner und intuitiver Apps. Durch das Verständnis und die Implementierung verschiedener Navigationsmethoden können Entwickler die Benutzererfahrung ihrer Apps erheblich verbessern.
