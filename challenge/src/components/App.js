import React from 'react';
import RecordList from './records/RecordList';
import HeaderComponent from './HeaderComponent';

const App = () => {
	return (
		<div>
			<div className="ui container">		
				<HeaderComponent />
				<RecordList />
			</div>
		</div>
	);
};

export default App;