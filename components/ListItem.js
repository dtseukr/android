// components/ListItem.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ListItem({ title }) {
    return <Text style={styles.item}>{title}</Text>;
}

const styles = StyleSheet.create({
    item: {
        fontSize: 18,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        textAlign: 'center',
    },
});