import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BaseStyles, black} from '../utils/BaseColors';

const BaseBody = ({children}) => (
  <SafeAreaView style={BaseStyles.container}>
    <StatusBar barStyle="light-content" backgroundColor={black} translucent />
    {children}
  </SafeAreaView>
);

export default BaseBody;
