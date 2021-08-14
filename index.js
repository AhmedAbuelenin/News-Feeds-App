import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configApp} from './src/utils/configApp';

configApp();
AppRegistry.registerComponent(appName, () => App);
