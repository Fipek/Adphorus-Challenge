import { confirmAlert } from 'react-confirm-alert';

export const findChildRecord = (recordId, records) => {
	return records
		.filter(record => record.parentID === recordId)
		.map(record => record.ID );
};

export const submitConfirm = (func) => {
	confirmAlert({
            title: "Do you really want to delete?",
            message: 'If you confirm, the transaction cannot be undone.',
            buttons: [
                        {
                            label: 'Yes',
                            onClick: () => func()
                        },
                        {
                            label: 'No'
                        }
                    ]
        })
};


