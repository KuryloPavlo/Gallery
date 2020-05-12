import React from 'react';
import {AppNavigator} from './src/navigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/state/store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
