// pages/MoviesScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ContentCard from '../components/ContentCard';

const moviesData = [
    {
        id: '1',
        title: '1. Dekalog (1988)',
        image: require('../assets/Dekalog.png'),
        releaseDate: 'MAR 22, 1996',
        rating: '100',
        description: 'A ten-part series exploring moral dilemmas faced by residents of a Warsaw apartment complex, each episode inspired by a different Ten Commandment.',
    },
    {
        id: '2',
        title: '2. Citizen Kane',
        image: require('../assets/CitizenKane.png'),
        releaseDate: 'SEP 4, 1941',
        rating: '100',
        description: 'A groundbreaking film that follows the life of newspaper magnate Charles Foster Kane, delving into themes of power, loss, and the complexity of human experience.',
    },
    {
        id: '3',
        title: '3. The Leopard',
        image: require('../assets/TheLeopard.png'),
        releaseDate: 'AUG 13, 2004',
        rating: '100',
        description: 'A historical drama set in 19th-century Sicily, chronicling the decline of the aristocracy during Italy’s unification through the eyes of a noble family.',
    },
];

export default function MoviesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The best movies for rating</Text>
            <FlatList
                data={moviesData}
                renderItem={({ item }) => (
                    <ContentCard
                        image={item.image}
                        title={item.title}
                        releaseDate={item.releaseDate}
                        rating={item.rating}
                        description={item.description}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
});