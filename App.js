import { Navigation } from 'react-native-navigation';

import Authscreen from './src/screens/Auth/Auth';
import ProfilPageScreen from './src/screens/Profile/Profile';
import SendMessagePageScreen from './src/screens/SendMessage/SendMessage';;

//Register Screens
Navigation.registerComponent("hausverwaltung.AuthScreen", () => Authscreen);
Navigation.registerComponent("hausverwaltung.ProfilPageScreen", () => ProfilPageScreen);
Navigation.registerComponent("hausverwaltung.SendMessagePageScreen", () => SendMessagePageScreen);


//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'hausverwaltung.AuthScreen',
    title: 'Login'
  }
});