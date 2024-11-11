import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import NewsCard from '../components/NewsCard';
import { useQuery } from '@tanstack/react-query';
import { useState, useMemo, useEffect } from 'react';

const API_URL = 'https://my-json-server.typicode.com/dtseukr/file/news';

const fetchNews = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    return response.json();
};

export default function HomeScreen({ navigation }) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: fetchNews,
    });

    const [searchQuery, setSearchQuery] = useState('');

    const filteredNews = useMemo(() => {
        if (!data) return [];
        return data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [data, searchQuery]);

    useEffect(() => {
        // Можна використовувати для логіки, яка виконується при зміні searchQuery
        console.log('Search query changed:', searchQuery);
    }, [searchQuery]);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New and Notable</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search news..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filteredNews}
                renderItem={({ item }) => (
                    <NewsCard
                        image={{ uri: item.image }}
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
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '90%',
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