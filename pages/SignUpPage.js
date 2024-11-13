import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const SignUpPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const db = useSQLiteContext();

    const handleSignUp = async () => {
        if (username.length === 0 || password.length === 0) {
            Alert.alert('Attention!', 'You need to complete all fields!');
            return;
        }
        try {
            const existingUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [username]);
            if (existingUser) {
                Alert.alert('Error', 'This username is already taken!');
                return;
            }
            await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
            Alert.alert('Success', 'You have successfully registered!');
            navigation.navigate('ProfilePage', { user: username });
        } catch (error) {
            console.log('Error during registration!', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Your Account</Text>
            <TextInput
                placeholder="Choose a Username"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Create a Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignUp} color="#6200EE" />
            <View style={styles.buttonContainer}>
                <Button
                    title="Already registered? Log in here"
                    onPress={() => navigation.navigate('Login')}
                    color="#6200EE"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 15,
    },
});

export default SignUpPage;
