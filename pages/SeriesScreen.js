// pages/SeriesScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ContentCard from '../components/ContentCard';

const seriesData = [
    {
        id: '1',
        title: '1. Planet Earth: Blue Planet II',
        image: require('../assets/PlanetEarthBluePlanetII.png'),
        releaseDate: 'JAN 20, 2018',
        rating: '97',
        description: 'A stunning documentary series exploring the beauty and fragility of ocean life through breathtaking cinematography.',
    },
    {
        id: '2',
        title: '2. The Office',
        image: require('../assets/TheOffice.png'),
        releaseDate: 'JAN 23, 2003',
        rating: '97',
        description: 'A mockumentary sitcom centered on the daily lives of office employees at Dunder Mifflin, blending humor with relatable workplace scenarios.',
    },
    {
        id: '3',
        title: '3. America to Me',
        image: require('../assets/AmericatoMe.png'),
        releaseDate: 'AUG 26, 2018',
        rating: '96',
        description: 'A documentary series examining race and identity in education through the experiences of students at a diverse high school.',
    },
];

export default function SeriesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The best series for rating</Text>
            <FlatList
                data={seriesData}
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
