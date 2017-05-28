import React from '../../../node_modules/react/react';

class JobsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <td>
                {this.props.properties.name}
            </td>
        )
    }
}

export default JobsList;