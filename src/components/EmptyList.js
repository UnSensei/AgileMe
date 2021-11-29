import React from 'react';
import {Text, View} from 'react-native';
import {background, pink} from '../utils/BaseColors';

const EmptyList = () => {
  return (
    <View
      style={{
        backgroundColor: background,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: pink, fontWeight: 'bold', textAlign: 'center'}}>
        Nothing to show lol
      </Text>
    </View>
  );
};

export default EmptyList;
