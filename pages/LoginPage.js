import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const db = useSQLiteContext();

    const handleLogin = async () => {
        if (username.length === 0 || password.length === 0) {
            Alert.alert('Warning!', 'All fields need to be filled in!');
            return;
        }
        try {
            const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
            if (validUser) {
                Alert.alert('Success', 'You have logged in successfully!');
                navigation.navigate('ProfilePage', { user: username });
            } else {
                Alert.alert('Error', 'The username or password is incorrect!');
            }
        } catch (error) {
            console.log('Error during login process!', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log Into Your Account</Text>
            <TextInput
                placeholder="Enter Username"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Enter Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Log In" onPress={handleLogin} color="#6200EE" />
            <View style={styles.buttonContainer}>
                <Button
                    title="No account? Create one now"
                    onPress={() => navigation.navigate('SignUpPage')}
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

export default LoginPage;
