import records from '../apis/records';
import { 
	FETCH_RECORDS,
	DELETE_RECORD
} from './types';

export const fetchRecords = () => async dispatch => {
	const response = await records.get('/records');
	dispatch({type: FETCH_RECORDS, payload: response.data});
};

export const deleteRecord = idList => async dispatch => {
	//BAD Approach. Json-server just only take one argument and the server cannot be manipulated.
	for(const id of idList){
		await records.delete(`/records/${id}`);
	}
	
	dispatch({type: DELETE_RECORD, payload: idList});
};
