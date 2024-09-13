import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';

import { Provider } from 'react-redux'
import { store, persistor } from './src/rtk/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppNavigation />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  }
});

export default App;
