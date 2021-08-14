import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppDrawer from './src/navigation/drawer/Drawer';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
