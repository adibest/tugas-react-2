import React , {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text, View, Container, Content, Button, Icon} from 'native-base';

import Navbar from './Navbar';

export default class Home extends Component{

  state = {
    loaded: false,
    categories: []
  }

  getData() {
    fetch('http://root.localhost.run/category')
    .then( (response) => response.json() )
    .then( (responseJson) => {

      this.setState({
        loaded: true,
        categories: responseJson,
      })

    })
  }

  componentDidMount() {
    this.getData();
  }

  keDetail() {
    this.props.navigation.navigate('Detail')
  }

  keCat() {
    this.props.navigation.navigate('Category')
  }

  keBook() {
    this.props.navigation.navigate('Book')
  }

  render() {

    if (this.state.loaded == false) {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#DB4437" style={{position: 'absolute'}}/>
          <ActivityIndicator size={20} color="#0F9D58" style={{position: 'absolute'}}/>
        </View>
      );
    }

    return(
      <Container>
        <Navbar 
          title="Home"
          nav={this.props.navigation}
        />
        <Content>

          <Button danger
            title="keCat"
            onPress={ () => this.keCat() }
          >
            <Icon name='bookmark' />
            <Text>Go to category</Text>
          </Button>
          <Button info
            title="keBook"
            onPress={ () => this.keBook() }
          >
            <Icon name='book' />
            <Text>Go to book</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 15,
    alignItems: 'center'
  },
  article: {
    padding: 10,
    width: '95%',
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  excerpt: {
    textAlign: 'center',
  }
})