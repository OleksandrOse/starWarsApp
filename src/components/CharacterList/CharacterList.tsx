import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import {Person} from '../../types/Person';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParamsList';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

import {actions as actionsFavorites} from '../../features/favorites/Favorites';

import styles from './styles';

type Props = {
  data: Person[];
  navigation: StackNavigationProp<
    RootStackParamList,
    'CharactersList' | 'Favorites'
  >;
};

const CharacterList: React.FC<Props> = ({data, navigation}) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state: {favorites: {favorites: Person[]}}) => state.favorites.favorites,
  );

  const handleAddToFavorites = (character: Person) => {
    dispatch(actionsFavorites.add(character));
  };

  const handleRemoveFromFavorites = (character: Person) => {
    dispatch(actionsFavorites.remove(character));
  };

  return (
    <FlatList
      style={styles.flatList}
      data={data}
      showsVerticalScrollIndicator={true}
      keyExtractor={item => item.name}
      scrollEnabled
      renderItem={({item}) => {
        const isFavorite = favorites.find(
          (person: {name: string}) => person.name === item.name,
        );
        return (
          <View style={styles.listContainer}>
            <TouchableOpacity
              style={styles.listContent}
              key={item.name}
              onPress={() => navigation.navigate('CharacterInfo', item)}>
              <Text style={styles.listText}>Name: {item?.name}</Text>
              <Pressable
                onPress={() => {
                  if (isFavorite) {
                    handleRemoveFromFavorites(item);
                  } else {
                    handleAddToFavorites(item);
                  }
                }}>
                <Image
                  style={styles.image}
                  source={
                    !isFavorite
                      ? require('../../images/heart.png')
                      : require('../../images/heart-like.png')
                  }
                />
              </Pressable>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default CharacterList;
