import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    divider: {
    	marginTop: 5,
        backgroundColor: '#cecece', 
        height: 1, 
        flex: 1, 
        alignSelf: 'center'
    },

    text: {
    	alignSelf:'center', 
    	paddingHorizontal: 10, 
    	fontSize: 12
    }
});

const TextDivider = ({ color, style, text = "text" }) => {
    return( 
    	<View style={[style, {flexDirection: 'row'}]}> 
			<View style={styles.divider} />
			<Text style={styles.text}>{text}</Text> 
			<View style={styles.divider} /> 
		</View>
    );
};


export { TextDivider };