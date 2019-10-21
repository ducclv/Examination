/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigation from './App/Navigation/AppNavigation';
AppRegistry.registerComponent(appName,()=> AppNavigation);
