import React from 'react';
import {View, Text} from 'react-native';
import {Person} from '../types/Person';

type Props = {
  character: Person;
};

const CharacterDetails: React.FC<Props> = ({character}) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    homeworld,
    species,
  } = character;
  return (
    <>
      <div className="flex-row">
        <p className="font-bold">Name: </p>
        <p>{name}</p>
      </div>
      <div className="flex-row">
        <Text>Birth year: </Text>
        <Text>{birth_year}</Text>
      </div>
      <View>
        <Text>Height: </Text>
        <Text>{height}</Text>
      </View>
      <View>
        <Text>Mass: </Text>
        <Text>{mass}</Text>
      </View>
      <View>
        <Text>Hair color: </Text>
        <Text>{hair_color}</Text>
      </View>
      <View>
        <Text>Eye color: </Text>
        <Text>{eye_color}</Text>
      </View>
      <View>
        <Text>Skin color: </Text>
        <Text>{skin_color}</Text>
      </View>
      <View>
        <Text>Homeworld: </Text>
        <Text>{homeworld}</Text>
      </View>

      {species && species && (
        <View>
          <Text>Species: </Text>
          <Text>{species}</Text>
        </View>
      )}
    </>
  );
};

export default CharacterDetails;
