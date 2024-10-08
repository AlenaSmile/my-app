import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( 
        <View style = { styles.container } >
            <Text style = { styles.text } > Hi!My name is(ваше имя) </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3498db', // Замените на понравившийся цвет
    },
    text: {
      color: 'white',
      fontSize: 24,
    },
});
