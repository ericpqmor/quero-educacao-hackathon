import React from '../../../node_modules/react/react';

import DeleteJob from './DeleteJob.jsx';

class JobsList extends React.Component {
    constructor(props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick() {
        const job = this.props.properties;
        const jobsUrl = 'jobs/' + job._id;
        const me = this;

        $.ajax({
            url: jobsUrl,
            dataType: 'json',
            type: 'delete',
            data: {
                id: job.id
            },
            success: function (msg) {
                //console.log(msg);
            },
            error: function (err) {
                //console.log(err);
            }
        });

        this.props.onJobUpdate();
    }

    render() {
        return (
            <tr key={this.props.properties.name} className='btn' onClick={this.handleEditClick}>
                <td>
                    <span>{this.props.properties.name}</span>
                    <DeleteJob onJobUpdate={this.props.onJobUpdate}
                                properties={this.props.properties}/>
                </td>
            </tr>
        )
    }
}

export default JobsList;