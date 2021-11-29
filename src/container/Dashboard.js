import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import BaseBody from '../components/BaseBody';
import {AddTaskBtn} from '../components/Buttons';
import EmptyList from '../components/EmptyList';
import {background, pink} from '../utils/BaseColors';

const DummyTasks = [
  {
    id: 1,
    title: 'Work on Dashboard style',
    priority: 2,
    created: 1637985600,
    deadline: 1638178786,
    comments: 'Think about a standard design system',
  },
  {
    id: 2,
    title: 'Launchpad redisign',
    priority: 0,
    created: 1637985600,
    comments: '',
  },
  {
    id: 3,
    title: 'Redux Integration',
    priority: 1,
    created: 1637985600,
    comments: 'Do we even need redux??',
  },
];

const Dashboard = () => {
  const navigation = useNavigation();

  const renderTasks = rowData => {
    console.log(rowData, 'rd');
    return (
      <View style={{backgroundColor: background, padding: 10}}>
        <Text style={{color: pink}}>{rowData.title} </Text>
      </View>
    );
  };
  return (
    <BaseBody>
      <AddTaskBtn navigation={navigation} />
      <Text style={{color: pink, fontWeight: 'bold'}}>IN Progress</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={DummyTasks}
        renderTasks={renderTasks}
        ListEmptyComponent={<EmptyList />}
      />
    </BaseBody>
  );
};

export default Dashboard;
