import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../components/Screens/Login';
import Welcome from '../components/Screens/Welcome';
import Home from '../components/Screens/Home';
import Profile from '../components/Screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(listProducts());
  //   return () => {
  //   }
  // }, [])

  return (
    <NavigationContainer>
      {/* {
        user ? <ProductNavigation /> : <UserNavigation />
      } */}
      {/* <ProductNavigation /> */}
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation