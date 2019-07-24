import React , {Component} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Text, View, Container, Content} from 'native-base';

import Navbar from './Navbar';


export default class Book extends Component{

  state = {
    loaded: false,
    books: []
  }

  getData() {
    fetch('http://root1.localhost.run/book')
    .then( (response) => response.json() )
    .then( (responseJson) => {

      this.setState({
        loaded: true,
        books: responseJson,
      })

    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    if (this.state.loaded == false) {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#DB4437" style={{position: 'absolute'}}/>
          <ActivityIndicator size={40} color="#4285F4" style={{position: 'absolute'}}/>
          <ActivityIndicator size={30} color="#F4B400" style={{position: 'absolute'}}/>
          <ActivityIndicator size={20} color="#0F9D58" style={{position: 'absolute'}}/>
        </View>
      );
    }

    return(
      <Container>
        <Navbar 
          title="Book"
          nav={this.props.navigation}
          backButton={true}
        />
        <Content>
          <Text style={s.title}>This is Book</Text>
          <Text style={s.body}>Yhis is bpdu</Text>
          <View>
            {this.state.books.map( (book) => (
              <Text>{book.title}</Text>
            ) )}
          </View>
        </Content>
      </Container>
    );
  }
}

const s = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  body: {
    textAlign: 'center'
  }
})