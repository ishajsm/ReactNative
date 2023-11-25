import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Intialscreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    )
}

export default Intialscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})