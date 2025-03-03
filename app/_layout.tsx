import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
export default function RootLayout() {
  const [fontLoaded] = useFonts({
    Rubik_Bold: require("../assets/fonts/Rubik-Bold.ttf"),
    Rubik_ExtraBold: require("../assets/fonts/Rubik-ExtraBold.ttf"),
    Rubik_Light: require("../assets/fonts/Rubik-Light.ttf"),
    Rubik_Medium: require("../assets/fonts/Rubik-Medium.ttf"),
    Rubik_Regular: require("../assets/fonts/Rubik-Regular.ttf"),
    Rubik_SemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
