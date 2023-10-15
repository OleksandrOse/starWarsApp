/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import {PaperProvider} from 'react-native-paper';

import {store} from './src/app/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}

export default App;
