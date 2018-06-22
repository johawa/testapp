import { Navigation } from 'react-native-navigation';

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: 'hausverwaltung.ProfilPageScreen',
                label: 'Profile',
                title: 'Profile'
            },
            {
                screen: 'hausverwaltung.SendMessagePageScreen',
                label: 'SendMessagePage',
                title: 'SendMessagePage'
            }
        ]
    });
};

export default startTabs;