import React from '../../../node_modules/react/react';

import GetMoney from './GetMoney.jsx';
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
      //  const myId = this.props.properties._id;
      //  const str = "/jobs" + myId + "/assigned";
        return (
            <tr key={this.props.properties.name +this.props.properties.description + Math.random().toString()}
                className='btn'>
                <td onClick={this.handleEditClick}>
                    <span>{this.props.properties.name}</span>
                    <DeleteJob onJobUpdate={this.props.onJobUpdate}
                                properties={this.props.properties}/>
                </td>

                <form action={"/jobs/" + this.props.properties._id + "/assigned/send"} method="post">
                    <button name="foo" value="upvote">Notification</button>
                </form>
            </tr>
        )
    }
}

export default Job;