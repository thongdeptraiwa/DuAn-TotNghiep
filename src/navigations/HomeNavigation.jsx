import React, { useEffect } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from '../assets/context/ThemeContext';
//tab tổng
import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';
import Notification from '../components/screens/Notification';
import FriendNotification from '../components/screens/FriendNotification';

const oTab = {
  Home: { name: 'Home', component: Home },
  FriendNotification: { name: 'FriendNotification', component: FriendNotification },
  Notification: { name: 'Notification', component: Notification },
  Profile: { name: 'Profile', component: Profile },
}
const Tab = createBottomTabNavigator();
const TabHome = () => {
  const {theme} = useContext(ThemeContext)
  let activeColors = colors[theme.mode]  //console.log(theme);
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let name;
          if (route.name === 'Home') {
            name = "home"
            theme ? (
              color = focused
                ? "#121212"
                : "gray"
            ) : (
              color = focused
                ? "white"
                : "gray"
            )
          } else if (route.name === 'FriendNotification') {
            name = "users";
            theme ? (
              color = focused
                ? "#121212"
                : "gray"
            ) : (
              color = focused
                ? "white"
                : "gray"
            )
          } else if (route.name === 'Notification') {
            name = "bell-o";
            theme ? (
              color = focused
                ? "#121212"
                : "gray"
            ) : (
              color = focused
                ? "white"
                : "gray"
            )
          } else if (route.name === 'Profile') {
            name = "user-circle-o";
            theme ? (
              color = focused
                ? "#121212"
                : "gray"
            ) : (
              color = focused
                ? "white"
                : "gray"
            )
          }

          return <FontAwesome name={name} size={size} color={color} />;
        },
        headerShown: false,
        
        tabBarActiveTintColor: '#D17842',
        // tabBarActiveBackgroundColor: "white",
        // tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: activeColors.tertiary,
        tabBarInactiveBackgroundColor: activeColors.tertiary,
        //ẩn bottom khi bàn phím xuất hiện
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: activeColors.tint, // Màu nền
          borderRadius: 50, // Bo góc
          borderColor: activeColors.tint, // Màu viền
          height: 50, // Chiều cao của thanh tab
        }
      })}
      
    >
      {
        Object.keys(oTab).map((item, index) => {
          return <Tab.Screen
            key={index}
            name={oTab[item].name}
            component={oTab[item].component}
            options={{ title: "" }} />
        })
      }
      {/* <Tab.Screen name="Home" component={Home} options={{ title: '' }} />
      <Tab.Screen name="Search" component={Search} options={{ title: '' }} />
      <Tab.Screen name="AddPostNavigation" component={AddPostNavigation} options={{ title: '' }} />
      <Tab.Screen name="AddFriend" component={Welcome} options={{ title: '' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: '' }} /> */}
    </Tab.Navigator >
  )
}

//stack home
import SelectImage from '../components/screens/SelectImage';
import UpPost from '../components/screens/UpPost';
import Search from '../components/screens/Search';
import Setting from '../components/screens/Setting';
import colors from '../assets/colors';
const oStackHome = {
  TabHome: { name: 'TabHome', component: TabHome },
  SelectImage: { name: 'SelectImage', component: SelectImage },
  UpPost: { name: 'UpPost', component: UpPost },
  Search: { name: 'Search', component: Search },
  Setting: {name: 'Setting', component: Setting}
}
const StackHome = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <StackHome.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabHome'>
      {/* bottom navigation (TabHome)*/}
      {
        Object.keys(oStackHome).map((item, index) => {
          return <StackHome.Screen
            key={index}
            name={oStackHome[item].name}
            component={oStackHome[item].component} />
        })
      }
      {/* <StackHome.Screen name="TabHome" component={TabHome} />
      <StackHome.Screen name="Chi_tiet_san_pham" component={Chi_tiet_san_pham} />
      <StackHome.Screen name="Chinh_sua_thong_tin_ca_nhan" component={Chinh_sua_thong_tin_ca_nhan} /> */}
    </StackHome.Navigator>
  )
}

//stack add post
// import SelectImage from '../components/screens/SelectImage';
// import UpPost from '../components/screens/UpPost';
// const oStackAddPost = {
//   SelectImage: { name: 'SelectImage', component: SelectImage },
//   UpPost: { name: 'UpPost', component: UpPost },
// }
// const StackProfile = createNativeStackNavigator();
// const AddPostNavigation = () => {
//   return (
//     <StackProfile.Navigator screenOptions={{ headerShown: false }} initialRouteName='SelectImage'>
//       {
//         Object.keys(oStackAddPost).map((item, index) => {
//           return <StackProfile.Screen
//             key={index}
//             name={oStackAddPost[item].name}
//             component={oStackAddPost[item].component} />
//         })
//       }
//       {/* <StackProfile.Screen name="Thong_tin_ca_nhan" component={Thong_tin_ca_nhan} />
//       <StackProfile.Screen name="QandA" component={QandA} /> */}
//     </StackProfile.Navigator>
//   )
// }

export { oTab, oStackHome }
export default HomeNavigation