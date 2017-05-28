import React from '../../../node_modules/react/';

class AddJob extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick() {
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
            <i className="fa fa-plus fa-2x trashIcon btn"
               onClick={this.handleAddClick}></i>
        )
    }
}

export default AddJob;