import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const UserStack = createNativeStackNavigator();
import Welcome from '../components/user/Welcome';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
const UserNavigation = () => {
    return (
        <UserStack.Navigator initialRouteName='WelCome' screenOptions={{headerShown: false}}>
            <UserStack.Screen name="Welcome" component={Welcome} />
            <UserStack.Screen name="Login" component={Login} />
            <UserStack.Screen name="Register" component={Register} />
        </UserStack.Navigator>
    )
}

export default UserNavigation