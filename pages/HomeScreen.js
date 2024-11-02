// HomeScreen.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import NewsCard from '../components/NewsCard';

const newsData = [
    {
        id: '1',
        title: 'Dragon Age: The Veilguard',
        image: require('../assets/DragonAge.png'),
        category: 'Games',
        rating: '84',
    },
    {
        id: '2',
        title: 'Anora',
        image: require('../assets/Anora.png'),
        category: 'Movies',
        rating: '91',
    },
    {
        id: '3',
        title: 'Like Water for Chocolate',
        image: require('../assets/LikeWaterforChocolate.png'),
        category: 'Series',
        rating: '78',
    },
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New and Notable</Text>
            <FlatList
                data={newsData}
                renderItem={({ item }) => (
                    <NewsCard
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        rating={item.rating}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.newsList}
                showsVerticalScrollIndicator={true}
                indicatorStyle="white"
                style={styles.flatList}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    newsList: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    flatList: {
        width: '100%',
        marginVertical: 0,
    },
});
