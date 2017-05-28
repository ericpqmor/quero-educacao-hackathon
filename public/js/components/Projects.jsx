import React from '../../node_modules/react';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const job = this.props.properties;
        if(e.target.className !== 'fa fa-trash-o fa-2x trashIcon btn') {
            this.props.openForms(job);
        }
    }

    render() {
        return (
            <tr key={this.props.properties.name +this.props.properties.description + Math.random().toString()}
                className='btn'>
                <td onClick={this.handleEditClick}>
                    <span>{this.props.properties.name}</span>
                    <DeleteJob onJobUpdate={this.props.onJobUpdate}
                               properties={this.props.properties}/>
                </td>
            </tr>
        )
    }
}

export default Projects;