import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    item: {
        height: 2,
        alignItems: 'stretch',
    },
});

const Divider = ({ color, style }) => {
    return( <View style={[styles.item, style, {backgroundColor: color? color : '#cecece'}]} /> );
};

export default Divider;