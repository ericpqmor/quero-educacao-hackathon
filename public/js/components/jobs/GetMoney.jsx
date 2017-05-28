import React from '../../../node_modules/react/react';

import DeleteJob from './DeleteJob.jsx';

class Job extends React.Component {
    constructor(props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(e) {
        const job = this.props.properties;
        if(e.target.className !== 'fa fa-trash-o fa-2x trashIcon btn') {
            this.props.openForms(job);
        }
    }

    render() {
        return (
            <i className="fa fa-trash-o fa-2x trashIcon btn"
               onClick={this.handleDeleteClick}></i>
        )
    }
}

export default Job;