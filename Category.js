import React , {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, TextInput, Button} from 'react-native';
import {Container, Content} from 'native-base';
import axios from 'axios';

import Navbar from './Navbar';

export default class Category extends Component{

  state = {
    loaded: false,
    categories: [],
    form: ''
  }

  getData() {
    axios.get('http://root.localhost.run/category')
    .then( (responseJson) => {

      this.setState({
        loaded: true,
        categories: responseJson.data,
      })

    })
  }

  sendData() {
    this.setState({loaded: false});

    let dataKirim = {
      name: this.state.form
    }

    axios.post('http://root.localhost.run/category/create', dataKirim)
    .then( (response) => {
      let hasil = JSON.stringify(response.data);
      alert(hasil);
      this.getData();
    })
    .catch( (error) => {
      let hasil = JSON.stringify(error);
      alert(hasil);
    })
  }

  delData(id) {
    this.setState({loaded: false});

    axios.delete(`http://root.localhost.run/category/delete/${id}`)
    .then( () => {
      alert('data terhapus');
      this.getData();
    })
  }

  handleInput(text) {
    this.setState({
      form: text
    })
  }

  loading() {
    if (this.state.loaded == false) {
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={50} color="#DB4437" style={{position: 'absolute'}}/>
          <ActivityIndicator size={20} color="#0F9D58" style={{position: 'absolute'}}/>
        </View>
      );
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {  

    return(

      
      <Container>
        {this.loading()}
        <Navbar 
          title="Category"
          nav={this.props.navigation}
          backButton={true}
        />
        <Content>
          <Text style={s.title}>List of Category</Text>
          <View style={{flex: 1}}>
            {this.state.categories.map( (category) => (
              <Text style={s.body}>
              {category.name}
              </Text>
            ) )}
            <TextInput
              style={s.ti}
              onChangeText={ (text) => this.handleInput(text) }
            />
            <Button
              title='kir data'
              onPress={ () => this.sendData() }
            />
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
  },
  ti: {
    width: '90%', 
    borderWidth: 1, 
    borderColor: '#000',
    alignItems: 'center'
  }
})