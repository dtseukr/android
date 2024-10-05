import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const moviesData = [
    { id: '1', title: 'Inception' },
    { id: '2', title: 'Interstellar' },
    { id: '3', title: 'The Dark Knight' },
];

export default function MoviesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movies Screen</Text>
            <FlatList
                data={moviesData}
                renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
                keyExtractor={item => item.id}
            />
            <Button title="Go Back Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginVertical: 5,
    },
});
