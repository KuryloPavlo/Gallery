import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main, PictureFull} from '../view';

const Stack = createStackNavigator();

class AppNavigator extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Unsplash Gallery" component={Main} />
        <Stack.Screen name="PictureFull" component={PictureFull} />
      </Stack.Navigator>
    );
  }
}

export default AppNavigator;
