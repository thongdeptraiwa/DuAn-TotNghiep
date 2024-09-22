import React, { useState, useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import { ThemeContext } from './src/assets/context/ThemeContext';
import { Provider } from 'react-redux'
import { store, persistor, storeData, getData } from './src/rtk/Store';

import { PersistGate } from 'redux-persist/integration/react'

function App(): React.JSX.Element {
   const [theme, setTheme] = useState({mode: "dark"});

   const updateTheme = (newTheme: {mode: string } | null) => {
    let mode;
      if(!newTheme) {
        mode = theme.mode === "dark" ? "light" : "dark";
        newTheme = {mode};
      }
      setTheme(newTheme)
      storeData("UserTheme", newTheme)
   }
   
   const fetchStoredTheme = async () => {
    const themeData = await getData("UserTheme");
      if (themeData) {
        updateTheme(themeData);
      }
  }

 useEffect(() => {
   fetchStoredTheme();
 }, [])
 

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default App;
