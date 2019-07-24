import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Home';
import CategoryScreen from './Category';
import BookScreen from './Book';

const a = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Category: {
    screen: CategoryScreen
  },
  Book: {
    screen: BookScreen
  }
}, {
  defaultNavigationOptions: {
    header: null,
  }
});

const AppContainer = createAppContainer( a );

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    );
  }
}