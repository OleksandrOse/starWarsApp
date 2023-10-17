import {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VectorIcon extends Component {
  state: {};
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          <Icon name="home" size={30} color="#900" />
        </Text>
      </View>
    );
  }
}
