import React from '../../../node_modules/react/react';

import DeleteJob from './DeleteHistory.jsx';

class History extends React.Component {
    constructor(props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
    }


    render() {
        return (
            <tr key={this.props.properties.name +this.props.properties.description + Math.random().toString()}
                className='btn'>
                <td>
                    <span>{this.props.properties.name}</span>
                </td>
            </tr>
        )
    }
}

export default History;