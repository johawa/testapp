import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import Authscreen from './src/screens/Auth/Auth';
import ProfilPageScreen from './src/screens/Profile/Profile';
import SendMessagePageScreen from './src/screens/SendMessage/SendMessage';

import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent("hausverwaltung.AuthScreen", () => Authscreen, store, Provider);
Navigation.registerComponent("hausverwaltung.ProfilPageScreen", () => ProfilPageScreen, store, Provider);
Navigation.registerComponent("hausverwaltung.SendMessagePageScreen", () => SendMessagePageScreen, store, Provider);


//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'hausverwaltung.AuthScreen',
    title: 'Login'
  }
});