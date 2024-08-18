
# Erstellung und Ausführung einer neuen Anwendung mit React Native

## Einleitung

Diese Anleitung zeigt, wie man eine neue Anwendung mit React Native von Grund auf erstellt und ausführt. Sie richtet sich an Entwickler, die mit den Grundlagen von JavaScript vertraut sind und nun praktische Erfahrung in der Entwicklung von mobilen Anwendungen sammeln möchten.

## Voraussetzungen

- Node.js installiert (empfohlen ist die neueste LTS-Version)
- npm oder yarn als Paketmanager
- Einrichtung der React Native CLI (Command Line Interface)

## Erstellung einer neuen Anwendung

1. **Installation der React Native CLI**

   Falls noch nicht geschehen, installieren Sie die React Native CLI global mit npm:

   ```bash
   npm install -g react-native-cli
   ```

2. **Erstellen eines neuen Projekts**

   Um ein neues React Native Projekt zu erstellen, führen Sie folgenden Befehl aus:

   ```bash
   react-native init MeinProjekt
   ```

   Dieser Befehl erstellt ein neues Verzeichnis namens `MeinProjekt` mit allen notwendigen Dateien und Abhängigkeiten für Ihr Projekt.

3. **Navigieren in das Projektverzeichnis**

   Wechseln Sie in das neu erstellte Projektverzeichnis:

   ```bash
   cd MeinProjekt
   ```

## Ausführen der Anwendung

1. **Starten des Metro-Bundlers**

   Der Metro-Bundler ist ein JavaScript-Bundler, der speziell für React Native entwickelt wurde. Starten Sie ihn mit:

   ```bash
   npm start
   ```

2. **Ausführen der App auf einem Android-Gerät**

   Stellen Sie sicher, dass Android Studio korrekt konfiguriert ist und ein Gerät oder Emulator bereit ist. Starten Sie die Anwendung mit:

   ```bash
   react-native run-android
   ```

3. **Ausführen der App auf einem iOS-Gerät**

   Um die App auf einem iOS-Gerät auszuführen, benötigen Sie Xcode auf einem Mac. Starten Sie die Anwendung mit:

   ```bash
   react-native run-ios
   ```

## Fazit

Die Erstellung und Ausführung einer neuen Anwendung mit React Native ist ein geradliniger Prozess, der durch die Nutzung der React Native CLI vereinfacht wird. Diese Anleitung bietet Ihnen die Grundlage, um mit der Entwicklung Ihrer eigenen mobilen Anwendungen zu beginnen.
