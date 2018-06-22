import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';

class ProfilePage extends Component {
    render() {
        return (
            <View>
                <Icon name="ios-trash" size={30} color="#900" />
                <Text>Profile Page</Text>
            </View>
        );
    }
}

export default ProfilePage;