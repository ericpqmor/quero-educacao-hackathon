import React from '../../../node_modules/react/react';

class History extends React.Component {
    constructor(props) {
        super(props);
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