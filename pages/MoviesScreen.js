import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import ContentCard from '../components/ContentCard';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://my-json-server.typicode.com/dtseukr/file/movies';

const fetchMovies = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    return response.json();
};

export default function MoviesScreen({ navigation }) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies,
    });

    const [searchQuery, setSearchQuery] = useState('');

    const filteredMovies = useMemo(() => {
        if (!data) return [];
        return data.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [data, searchQuery]);

    useEffect(() => {
        console.log('Search query changed:', searchQuery);
    }, [searchQuery]);

    const handleSearchChange = useCallback((text) => {
        setSearchQuery(text);
    }, []);

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>The best movies for rating</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={handleSearchChange}
            />
            <FlatList
                data={filteredMovies}
                renderItem={({ item }) => (
                    <ContentCard
                        image={{ uri: item.image }}
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
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});