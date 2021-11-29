import {Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import React from 'react';
import {background, pink} from '../utils/BaseColors';

export const AddTaskBtn = ({navigation}) => {
  return (
    <Ripple
      onPress={() => navigation.navigate('AddTask')}
      rippleColor={pink}
      rippleDuration={500}
      style={{backgroundColor: background, marginVertical: 10, padding: 10}}>
      <Text style={{color: pink, fontWeight: 'bold', textAlign: 'center'}}>
        + Add New Task
      </Text>
    </Ripple>
  );
};

export const aa = () => {};
