import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../components/user/Login';
import Welcome from '../components/user/Welcome';
import Home from '../components/home/Home';
import Profile from '../components/user/Profile';
import Register from '../components/user/Register';
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
         <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation