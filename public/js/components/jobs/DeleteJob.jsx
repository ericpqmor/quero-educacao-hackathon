import React from '../../../node_modules/react/react';

class DeleteJob extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick() {
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

                $.ajax({
                    url: '/history/',
                    dataType: 'json',
                    type: 'post',
                    data: job,
                    success: function (data) {
                        console.log(data);
                        // me.props.closeForms();
                        // me.props.onJobUpdate();
                    },
                    error: function (err) {
                        console.log(err);
                        console.log("Couldn't edit the job")
                    }
                });



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
            <i className="fa fa-trash-o fa-2x trashIcon btn"
               onClick={this.handleDeleteClick}></i>
        )
    }
}

export default DeleteJob;