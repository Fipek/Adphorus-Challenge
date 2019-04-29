import _ from 'lodash';
import {
	FETCH_RECORDS,
	DELETE_RECORD,
} from '../actions/types';

export default (state = {}, action) => {
	switch(action.type){
		case FETCH_RECORDS: 
			return {...state, ..._.mapKeys(action.payload,'ID') };
		
		case DELETE_RECORD:
			return _.omit(state, action.payload);
		
		default:
			return state;
	}
};