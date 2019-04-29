import React,{ Component } from 'react';
import { Header,Image } from 'semantic-ui-react'

class HeaderComponent extends Component{
	render(){
		return (
			<div className="ui secondary pointing menu">
				<Header as='h1' icon textAlign='center'>
      				<Image src='./adphoruslogo.png' size='massive' style={{"width":"4em"}}circular />
      				<Header.Content>Hierarchy Table</Header.Content>
    			</Header>
			</div>
		);
	}
}

export default HeaderComponent;