import React from '../../../node_modules/react/';

import FormsAddJob from './FormsAddJob.jsx';

class AddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: false,
            properties: {
                name: '',
                description: '',
                image: '',
                category: 'pontual',
                money: 10
            }
        };
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick() {
        this.setState({
           forms: true
        });

        this.props.onJobUpdate();
    }

    render() {
        const style = {
            right: '45px'
        };
        if(this.state.forms) {
            return (
                <div>
                    <i className="fa fa-plus fa-2x trashIcon btn"
                       onClick={this.handleAddClick} style={style}></i>
                    <FormsAddJob onJobUpdate={this.props.onJobUpdate}
                                 jobs={this.state.jobs}
                                 formsVisible={this.state.forms}
                                 closeForms={this.props.closeForms}
                                 properties={this.state.properties}
                                 mode="add"/>
                </div>
            )
        } else {
            return (
                <i className="fa fa-plus fa-2x trashIcon btn"
                   onClick={this.handleAddClick} style={style}></i>
            )
        }
    }
}

export default AddJob;