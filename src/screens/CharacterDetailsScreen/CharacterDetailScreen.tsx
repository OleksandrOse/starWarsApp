import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {Avatar, Card} from 'react-native-paper';

type Props = {
  route: any;
};

const CharacterDetailsScreen: React.FC<Props> = ({route}) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    birth_year,
    eye_color,
    gender,
  } = route.params;

  const label = name
    .split(' ')
    .map((v: string) => v.slice(0, 1))
    .join('');

  return (
    <Card>
      <Card.Title
        title={name}
        subtitle={gender}
        // eslint-disable-next-line react/no-unstable-nested-components
        left={() => <Avatar.Text label={label} size={34} />}
      />
      <Card.Content>
        <View key={name} style={styles.userContainer}>
          <View style={styles.user}>
            <Text style={styles.name}>Height: {height}</Text>
            <Text style={styles.name}>Mass: {mass}</Text>
            <Text style={styles.name}>Hair color: {hair_color}</Text>
            <Text style={styles.name}>Skin color: {skin_color}</Text>
          </View>
          <View style={styles.user}>
            <Text style={styles.name}>Eye color: {eye_color}</Text>
            <Text style={styles.name}>Birth year: {birth_year}</Text>
            <Text style={styles.name}>Gender: {gender}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CharacterDetailsScreen;
