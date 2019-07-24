import React, {Component} from 'react';
import {Header, Left, Button, Body, Icon, Title, Right} from 'native-base';

export default class Navbar extends Component{
	render() {

		const {nav, title, backButton} = this.props;

		return(
			<Header>
	          <Left>
	          	{
	          		backButton == true
			          	? 	(
			          			<Button 
			          				transparent
			          				onPress={ () => nav.goBack() }
			          			>
			          			  <Icon name='arrow-back' />
			          			</Button>
			          		)
			          	: null
	          	}
	          </Left>
	          <Body>
	            <Title>{title}</Title>
	          </Body>
	          <Right>
	            <Button transparent>
	              <Icon name='menu' />
	            </Button>
	          </Right>
	        </Header>
		);
	}
}