import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../../app/hooks';
import {styles} from './styles';
import CharacterList from '../../components/CharacterList/CharacterList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParamsList';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Favorites'>;
};

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const favorites = useAppSelector(state => state.favorites.favorites);

  return (
    <View style={styles.parentContainer}>
      <CharacterList data={favorites} navigation={navigation} />
    </View>
  );
};

export default FavoritesScreen;
