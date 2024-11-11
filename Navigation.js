import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './pages/HomeScreen';
import MoviesScreen from './pages/MoviesScreen';
import SeriesScreen from './pages/SeriesScreen';
import GamesScreen from './pages/GamesScreen';
import DrawerMenu from './components/DrawerMenu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Movies" component={MoviesScreen} />
            <Drawer.Screen name="Series" component={SeriesScreen} />
            <Drawer.Screen name="Games" component={GamesScreen} />
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <AppDrawer />
        </NavigationContainer>
    );
}