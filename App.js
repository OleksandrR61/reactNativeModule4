import { useState, useEffect } from 'react';

import * as Font from 'expo-font';

import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { Container } from './components';



export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      };
    };

    loadFonts();
  }, [setIsReady]);
  
  if (!isReady) {
    return <Container />;
  };

  return (
    <LoginScreen />
  );
};