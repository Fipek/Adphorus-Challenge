import React from 'react';
import { Accordion, Icon, Item ,Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
//LOCAL
import { deleteRecord  } from '../../actions';
import RecordChildList from './RecordChildList';
import { findChildRecord, submitConfirm } from '../../utils';
//CSS
import 'react-confirm-alert/src/react-confirm-alert.css'
import '../../style/Record.css';


class Record extends React.Component {
	state = { activeIndex: -1 }

	handleClick = (e, titleProps) => {
    	const { index } = titleProps
    	const { activeIndex } = this.state
    	const newIndex = activeIndex === index ? -1 : index

    	this.setState({ activeIndex: newIndex });
  	}
	
	renderDeleteButton = () =>{
		return (
			<div className="right floated" onClick={this.onClickDeleteButton}>
				<Button icon className="negative">
    				<Icon name='trash' />
  				</Button>
			</div>	   
		);
	}

	onClickDeleteButton = (e) =>{
		submitConfirm(this.removeRecord);
		e.stopPropagation();
	}

	removeRecord = () => {
		let deleteRecordList = [];
		let index = 0;
		deleteRecordList.push(this.props.id);
		
		while(true){
			let childRecordList = findChildRecord(deleteRecordList[index], this.props.records);
			if(childRecordList.length === 0){
				break;
			}
			deleteRecordList = deleteRecordList.concat(childRecordList);
			index++;
		}
		this.props.deleteRecord(deleteRecordList);
	}

	renderRecord = (activeIndex) => {
		return(   
			<div key={this.props.key}>
				<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          			<Item.Group>
						<Item>
						    <Item.Image size='tiny'><div className="record-image">{this.props.Name.charAt(0)}</div></Item.Image>
						    <Item.Content>
						    	<Item.Header style={{"color":"#018ded"}}>{this.props.Name}</Item.Header>
						        <Item.Meta>
						        	<span className='price'><b>City:</b></span>
						        	<span className='stay'>{this.props.City}</span>
						        </Item.Meta>
						        <Item.Description><b>Phone: </b>{this.props.Phone}</Item.Description>
						    </Item.Content>
						    {this.renderDeleteButton()}
						</Item>
					</Item.Group>
        		</Accordion.Title>
        		<Accordion.Content active={activeIndex === 0}>
          			{activeIndex === 0 ? <RecordChildList id={this.props.id}/> : ""}	
        		</Accordion.Content>
        	</div>
		);
	}
	
	render(){
		const { activeIndex } = this.state
		return (
			<div>
				<Accordion fluid styled>
					{this.renderRecord(activeIndex)}
				</Accordion>
			</div>
		);	
	}
}

const mapStateToProps = (state) => {
	return {
		records: Object.values(state.records),
	};
}

export default connect(mapStateToProps,{ deleteRecord })(Record);