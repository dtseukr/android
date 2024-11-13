import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProfilePage = ({ route, navigation }) => {
    const { user } = route.params || {};
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4837/4837857.png' }}
            />
            <Text style={styles.name}>{user || 'Guest'}</Text>
            <Button title="Sign Out" onPress={() => navigation.navigate('Login')} color="#6200EE" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    logoutButton: {
        padding: 15,
        fontSize: 18,
        backgroundColor: '#6200EE',
        color: '#fff',
    },
});

export default ProfilePage;
