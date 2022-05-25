import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
// https://www.npmjs.com/package/@expo-google-fonts/ubuntu
import StartPage from './src/pages/StartPage'
import EnterMobilePage from './src/pages/LoginPage'

/*
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  */

let customFonts = {
  'Ubuntu_700Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  'Ubuntu_700Bold_Italic': require('./assets/fonts/Ubuntu-BoldItalic.ttf'),
  'Ubuntu_500Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
  'Ubuntu_500Medium_Italic': require('./assets/fonts/Ubuntu-MediumItalic.ttf'),
  'Ubuntu_400Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  'Ubuntu_400Regular_Italic': require('./assets/fonts/Ubuntu-Italic.ttf'),
  'Ubuntu_300Light': require('./assets/fonts/Ubuntu-Light.ttf'),
  'Ubuntu_300Light_Italic': require('./assets/fonts/Ubuntu-LightItalic.ttf'),  
};
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null
  } else {
      return (
        <View style={styles.rootContainer} 
          onLayout={onLayoutRootView}
          >
          <StatusBar style="auto" />
          <ImageBackground 
            source={require("./assets/images/background.png")}
            resizeMode='cover'
            style={styles.rootContainer}
          >
            <SafeAreaView style={styles.rootContainer}>
                <StartPage />               
            </SafeAreaView>
          </ImageBackground>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,    
  },
});
