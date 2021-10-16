import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBSeOyYwx8b3rHanCrR8GRiRAzMhdW_2b0",
  authDomain: "mealstogo-ccdcc.firebaseapp.com",
  projectId: "mealstogo-ccdcc",
  storageBucket: "mealstogo-ccdcc.appspot.com",
  messagingSenderId: "1043742271493",
  appId: "1:1043742271493:web:c2c5107d0bf5b59cffd46c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
