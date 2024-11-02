// pages/GamesScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ContentCard from '../components/ContentCard';

const gamesData = [
    {
        id: '1',
        title: '1. The Legend of Zelda: Ocarina of Time',
        image: require('../assets/TheLegendOfZelda.png'),
        releaseDate: 'NOV 23, 1998',
        rating: '99',
        description: 'An iconic action-adventure game where Link must save Hyrule from the evil Ganondorf by solving puzzles and battling foes.',
    },
    {
        id: '2',
        title: '2. SoulCalibur',
        image: require('../assets/SoulCalibur.png'),
        releaseDate: 'MAY 19, 2015',
        rating: '98',
        description: 'A renowned weapon-based fighting game featuring diverse characters and fast-paced battles for the legendary Soul Blade.',
    },
    {
        id: '3',
        title: '3. Grand Theft Auto IV',
        image: require('../assets/GrandTheftAuto.png'),
        releaseDate: 'APR 29, 2008',
        rating: '98',
        description: 'An open-world action-adventure game following Niko Bellic as he navigates crime and ambition in Liberty City.',
    },
];

export default function GamesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The best games for rating</Text>
            <FlatList
                data={gamesData}
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
