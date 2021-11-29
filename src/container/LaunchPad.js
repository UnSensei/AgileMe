import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BaseBody from '../components/BaseBody';
import {blue, green} from '../utils/BaseColors';

class LaunchPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Raju',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.name) {
      return {
        name: state.name,
      };
    }
    if (props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return null;
  }

  render() {
    const {name} = this.state;
    const {navigation} = this.props;
    console.log(navigation, 'nav');

    return (
      <BaseBody>
        <View
          style={{
            backgroundColor: green,
            padding: 20,
            margin: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            onPress={() =>
              navigation.navigate('Primary', {screen: 'Dashboard'})
            }
            style={{color: blue}}>
            Hi how you {name}
          </Text>
        </View>
      </BaseBody>
    );
  }
}

export default LaunchPad;
