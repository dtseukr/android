import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const seriesData = [
    { id: '1', title: 'Breaking Bad' },
    { id: '2', title: 'Game of Thrones' },
    { id: '3', title: 'Stranger Things' },
];

export default function SeriesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Series Screen</Text>
            <FlatList
                data={seriesData}
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
