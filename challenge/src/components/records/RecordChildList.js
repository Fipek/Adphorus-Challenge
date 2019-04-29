import React from 'react';
import { connect } from 'react-redux';
//LOCAL
import { fetchRecords } from '../../actions';
import Record from './Record';

class RecordChildList extends React.Component {
	componentDidMount(){
		this.props.fetchRecords();
	}
	
	renderChildList = () => {
			return this.props.records
				.filter(record => record.parentID === this.props.id)
				.map(record => {
					return(
						<Record key={record.ID} id={record.ID} Name={record.Name} Phone={record.Phone} City={record.City} />
					);
			});
	}
	
	render(){
		return (
			<div className="ui container child-record-container">	
				<div className="ui celled list">{this.renderChildList()}</div>
			</div>
		);	
	}
}

const mapStateToProps = (state) => {
	return {
		records: Object.values(state.records),
	};
}

export default connect(mapStateToProps,{ fetchRecords })(RecordChildList);