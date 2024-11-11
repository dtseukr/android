// components/ContentCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ContentCard({ image, title, rank, releaseDate, rating, description }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.details}>Release Date: {releaseDate}</Text>
                <Text style={styles.details}>Rating: {rating}</Text>
                <Text style={styles.description} numberOfLines={5}>
                    {description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        maxWidth: 315,
        height: 185,
        flexDirection: 'row',
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
        width: 88,
        height: 129,
        margin: 10,
    },
    infoContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    details: {
        fontSize: 14,
        color: '#666',
    },
    description: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
});