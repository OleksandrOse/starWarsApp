import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParamsList';
import {SafeAreaView, Button} from 'react-native';

import CharacterList from '../../components/CharacterList/CharacterList';
import {fetchCharacters} from '../../services/api';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {actions as actionsCharacters} from '../../features/characters/Characters';

import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CharactersList'>;
};

const MainScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.characters);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters();
      dispatch(actionsCharacters.set(data));
    };

    loadCharacters();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.parentContainer}>
      <Button
        title="Go to favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
      <CharacterList data={characters} navigation={navigation} />
    </SafeAreaView>
  );
};

export default MainScreen;
