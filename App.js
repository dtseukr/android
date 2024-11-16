import React from 'react';
import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SQLiteProvider } from 'expo-sqlite';
import Navigation from './Navigation';

const queryClient = new QueryClient();

const initializeDatabase = async (db) => {
  try {
    await db.execAsync(`
          CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              username TEXT UNIQUE,
              password TEXT,
              profileImage TEXT
          );
      `);

    await db.execAsync(`
          ALTER TABLE users ADD COLUMN profileImage TEXT;
      `).catch((error) => {
      if (!error.message.includes('duplicate column')) throw error;
    });

    console.log('Database initialized!');
  } catch (error) {
    console.log('Error while initializing database!', error);
  }
};


export default function App() {
  return (
    <SQLiteProvider databaseName='auth.db' onInit={initializeDatabase}>
      <QueryClientProvider client={queryClient}>
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </QueryClientProvider>
    </SQLiteProvider>
  );
}