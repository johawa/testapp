import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('ios-contact', 30, 'black'),
        Icon.getImageSource('ios-send', 30, 'black')
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'hausverwaltung.ProfilPageScreen',
                    label: 'Profile',
                    title: 'Profile',
                    icon: sources[0]
                },
                {
                    screen: 'hausverwaltung.SendMessagePageScreen',
                    label: 'Send A Message',
                    title: 'Send A Message',
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;