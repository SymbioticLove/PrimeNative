import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import Header from './components/Header';
import { useFonts } from 'expo-font';

export default function App() {
  const scrollViewRef = useRef(null);
  const [loaded] = useFonts({
    Mont: require('./assets/fonts/mont/Montserrat-Regular.ttf'),
    Open: require('./assets/fonts/sans/OpenSans-Regular.ttf'),
    Rale: require('./assets/fonts/rale/Raleway-Medium.ttf'),
  });

  if (!loaded) {
    return null; // You can also return a loading indicator while fonts are loading
  }

  // Function to scroll to the top of the ScrollView
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View>
      <Header scrollToTop={scrollToTop} />
      <ScrollView ref={scrollViewRef} >
        {/* Other content */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
