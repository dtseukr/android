import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const otherData = [
    { id: '1', title: 'Miscellaneous 1' },
    { id: '2', title: 'Miscellaneous 2' },
    { id: '3', title: 'Miscellaneous 3' },
];

export default function OtherScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Other Screen</Text>
            <FlatList
                data={otherData}
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
