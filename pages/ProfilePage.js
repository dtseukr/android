import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSQLiteContext } from 'expo-sqlite';

const ProfilePage = ({ navigation, route }) => {
    const { user } = route.params || {};
    const [profileImage, setProfileImage] = useState(null);
    const db = useSQLiteContext();

    useEffect(() => {
        const loadProfileImage = async () => {
            const result = await db.getFirstAsync('SELECT profileImage FROM users WHERE username = ?', [user]);
            if (result) {
                setProfileImage(result.profileImage);
            }
        };
        loadProfileImage();
    }, [user, db]);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert("Permission to access the photo library is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const newImageUri = result.assets[0].uri;
            setProfileImage(newImageUri);

            try {
                await db.runAsync('UPDATE users SET profileImage = ? WHERE username = ?', [newImageUri, user]);
                console.log('Profile image updated successfully');
            } catch (error) {
                console.error('Error updating profile image:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: profileImage || 'https://cdn-icons-png.flaticon.com/512/4837/4837857.png' }}
            />
            <Text style={styles.name}>{user || 'Guest'}</Text>
            <Button title="Update Profile Picture" onPress={pickImage} color="#6200EE" />
            <View style={styles.buttonSpacing} />
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
    buttonSpacing: {
        height: 20,
    },
});

export default ProfilePage;