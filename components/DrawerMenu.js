import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DrawerMenu({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Games')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Games</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Series')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Series</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    button: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#6200EE',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});