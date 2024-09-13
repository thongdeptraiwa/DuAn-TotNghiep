import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../rtk/API';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Setting from '../components/Setting';
import EditProfile from '../components/EditProfile';
import UpPost from '../components/UpPost';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// npm install @react-navigation/material-top-tabs react-native-tab-view
// npm install react-native-pager-view


const Tab = createMaterialTopTabNavigator();
const AppNavigation = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(listProducts());
  //   return () => {
  //   }
  // }, [])

  return (
    // <NavigationContainer>
    //   {/* {
    //     user ? <ProductNavigation /> : <UserNavigation />
    //   } */}
    //   {/* <ProductNavigation /> */}
    //   <Home />
    //   {/* <Profile /> */}
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="Edit" component={EditProfile} />
      </Tab.Navigator>
      {/* <UpPost /> */}
    </NavigationContainer>
  )
}

export default AppNavigation