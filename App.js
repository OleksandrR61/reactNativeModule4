import { useState, useEffect } from 'react';

import * as Font from 'expo-font';

import CommentsScreen from './Screens/main/CommentsScreen/CommentsScreen';
import { Container } from './components';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"), //500
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"), //400
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"), //700
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
    <CommentsScreen />
  );
};