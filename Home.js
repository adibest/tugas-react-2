import React , {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text, View, Container, Content} from 'native-base';

import Navbar from './Navbar';

const articles = [
  {
    title: 'this is title 1',
    excerpt: 'this is excerpt 1 this is excerpt 1'
  },
  {
    title: 'this is title 2',
    excerpt: 'this is excerpt 2 this is excerpt 2'
  },
  {
    title: 'this is title 3',
    excerpt: 'this is excerpt 3 this is excerpt 3'
  },
  {
    title: 'this is title 4',
    excerpt: 'this is excerpt 4 this is excerpt 4'
  },
];

export default class Home extends Component{

  state = {
    loaded: false,
    categories: []
  }

  getData() {
    fetch('http://root1.localhost.run/category')
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
          <FlatList 
            data={articles}
            keyExtractor={ (article, index) => index.toString() }
            renderItem={ (article) => (

              <TouchableOpacity 
                style={s.button}
                onPress={ () => this.keDetail() }
              >
                <View style={s.article}>
                  <Text style={s.title}>{ article.item.title }</Text>
                  <Text style={s.excerpt}>{ article.item.excerpt }</Text>
                </View>
                <View>
                  {this.state.categories.map( (category) => (
                    <Text>{category.name}</Text>
                  ) )}
                </View>
              </TouchableOpacity>

            ) }
          />
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