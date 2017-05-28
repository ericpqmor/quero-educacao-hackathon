import React from '../../../node_modules/react/react';

class JobsList extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
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
            success: function (data) {
                if(me.state.loadingJobs === true) {
                    me.setState({
                        loadingJobs: false,
                        jobs: data
                    });
                }

                return data;
            },
            error: function (err) {
                console.log(err);
            }
        });

        this.props.onJobDeletion();
    }

    render() {
        return (
            <tr key={this.props.properties.name} onClick={this.handleClick} className="btn taskRow">
                <td>
                    {this.props.properties.name}
                </td>
            </tr>
        )
    }
}

export default JobsList;