import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const cartoonsData = [
    { id: '1', title: 'Tom and Jerry' },
    { id: '2', title: 'SpongeBob SquarePants' },
    { id: '3', title: 'The Simpsons' },
];

export default function CartoonsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cartoons Screen</Text>
            <FlatList
                data={cartoonsData}
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
