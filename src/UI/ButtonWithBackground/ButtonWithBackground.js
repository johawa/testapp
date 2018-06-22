import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}, props.disabled ? null : styles.disabled]}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"
    },
    disabled: {
        color: '#eee',
        borderColor: "grey"
    }
});

export default buttonWithBackground;