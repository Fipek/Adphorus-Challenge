import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
//LOCAL
import { fetchRecords  } from '../../actions';
import Record from './Record';


class RecordList extends React.Component {

	componentDidMount(){
		this.props.fetchRecords();
	}
	
	renderList = () => {
		return this.props.records
			.filter(record => !_.hasIn(record, 'parentID'))
			.map(record => {
				return(
					<Record 
						key={record.ID}
						id={record.ID}
						Name={record.Name}
						Phone={record.Phone}
						City={record.City}
				 	/>
				);
			});
	}
	
	render(){
		return (		
			<div className="ui celled list">
				{this.renderList()}
			</div>
		);	
	}
}

const mapStateToProps = (state) => {
	return {
		records: Object.values(state.records),
	};
}

export default connect(mapStateToProps,{ fetchRecords })(RecordList);