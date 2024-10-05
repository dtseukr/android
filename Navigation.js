import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MoviesScreen from './MoviesScreen';
import SeriesScreen from './SeriesScreen';
import CartoonsScreen from './CartoonsScreen';
import OtherScreen from './OtherScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Movies" component={MoviesScreen} />
                <Stack.Screen name="Series" component={SeriesScreen} />
                <Stack.Screen name="Cartoons" component={CartoonsScreen} />
                <Stack.Screen name="Other" component={OtherScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
