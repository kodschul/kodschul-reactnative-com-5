
# Erweiterte Flexbox-Features

## Einführung

Flexbox ist ein leistungsstarkes Layoutmodell in CSS, das es Entwicklern ermöglicht, komplexe Layouts einfach und effizient zu gestalten. Es bietet eine Reihe von Eigenschaften, die eine präzise Ausrichtung und flexible Größenanpassung von Elementen innerhalb eines Containers ermöglichen.

## Kernkonzepte

### Flex-Container

Ein Flex-Container wird definiert, indem die `display`-Eigenschaft eines Elements auf `flex` oder `inline-flex` gesetzt wird. Innerhalb des Containers werden die Kinderelemente (Flex-Items) nach den Flexbox-Regeln ausgerichtet.

```css
.container {
  display: flex;
  justify-content: center; /* Zentriert die Items horizontal */
  align-items: center; /* Zentriert die Items vertikal */
}
```

### Flex-Items

Die Flex-Items können mit spezifischen Eigenschaften wie `flex-grow`, `flex-shrink` und `flex-basis` angepasst werden, um ihre Größe und das Wachstumsverhalten im Container zu steuern.

```css
.item {
  flex-grow: 1; /* Erlaubt dem Item, den verfügbaren Raum auszufüllen */
  flex-basis: 100px; /* Setzt eine Basisgröße von 100px */
}
```

## Erweiterte Features

### Flex-Wrap

Die `flex-wrap`-Eigenschaft ermöglicht es, Flex-Items auf mehrere Zeilen zu verteilen, falls sie nicht in eine einzige Zeile passen.

```css
.container {
  flex-wrap: wrap; /* Items werden umgebrochen, falls notwendig */
}
```

### Align-Self

Die `align-self`-Eigenschaft erlaubt es einem einzelnen Flex-Item, unabhängig von anderen Items im Container vertikal ausgerichtet zu werden.

```css
.item {
  align-self: flex-start; /* Richtet das Item am Anfang des Containers aus */
}
```

### Order

Mit der `order`-Eigenschaft kann die Reihenfolge der Flex-Items innerhalb des Containers unabhängig von ihrer Position im HTML geändert werden.

```css
.item {
  order: 2; /* Setzt dieses Item an die zweite Position */
}
```

## Praktische Beispiele

Erstellen wir ein responsives Layout, das unterschiedliche Spaltenanordnungen bei verschiedenen Bildschirmgrößen ermöglicht.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 200px; /* Flex-Wachstum, Schrumpfung und Basisgröße */
}

@media (max-width: 600px) {
  .item {
    flex: 1 1 100%; /* Nimmt auf kleinen Bildschirmen die volle Breite ein */
  }
}
```

## Fazit

Erweiterte Flexbox-Features ermöglichen es, komplexe und responsive Layouts mit einfacher und sauberer Code-Struktur zu erstellen. Durch das Verständnis und die Nutzung dieser Features können Entwickler leistungsstarke und flexible Webdesigns effizient umsetzen.
