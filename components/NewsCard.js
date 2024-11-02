// components/NewsCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function NewsCard({ image, title, category, rating }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.category}>Category: {category}</Text>
                <Text style={styles.rating}>Rating: {rating}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        maxWidth: 320,
        height: 245,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignSelf: 'center',
    },
    image: {
        width: 275,
        height: 155,
        alignSelf: 'center',
        marginTop: 10,
    },
    infoContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    category: {
        fontSize: 14,
        color: '#666',
    },
    rating: {
        fontSize: 14,
        color: '#666',
    },
});
