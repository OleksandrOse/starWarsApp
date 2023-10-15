/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen/MainScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen/CharacterDetailScreen';
import FavoritesScreen from '../screens/FavoriteScreen/FavoritesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Main',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
            },
            headerTitleStyle: {
              fontWeight: '500',
            },
          }}
        />

        <Stack.Screen
          name="CharacterInfo"
          component={CharacterDetailsScreen}
          options={{
            title: 'CharacterInfo',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
              flex: 1,
            },
            headerTitleStyle: {
              fontWeight: '500',
            },
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: 'Favorites',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
            },
            headerTitleStyle: {
              fontWeight: '500',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
