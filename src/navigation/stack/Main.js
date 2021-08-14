import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {routes} from '../../common/base/index';
import Home from '../../screens/home/Home';
import Details from '../../screens/details/Details';
import Search from '../../screens/search/Search';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName={routes.home}>
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.details}
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.search}
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Main;
