/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FriendNotification from './src/components/screens/FriendNotification';

AppRegistry.registerComponent(appName, () => FriendNotification);
