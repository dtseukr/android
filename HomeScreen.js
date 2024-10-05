import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My App!</Text>
            <Button title="Go to Movies" onPress={() => navigation.navigate('Movies')} />
            <Button title="Go to Cartoons" onPress={() => navigation.navigate('Cartoons')} />
            <Button title="Go to Series" onPress={() => navigation.navigate('Series')} />
            <Button title="Go to Other" onPress={() => navigation.navigate('Other')} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});
