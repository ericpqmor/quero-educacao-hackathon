import React from '../../../node_modules/react/react';

import requestUsers from '../../requests/requestUsers.jsx'

class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            assigned: 0,
            people: []
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }


    render() {
        const finalData = this.getAllPeople();
        return (
            <select value={this.state.assigned} onChange={this.handleOptionChange}>
                {finalData}
            </select>
        )
    }
}

export default People;