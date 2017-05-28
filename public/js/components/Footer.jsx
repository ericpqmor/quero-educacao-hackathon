import React from '../../node_modules/react';

import JobsList from './jobs/JobsList.jsx';
import Header from './Header.jsx';

class Footer extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            tarefasActive: true
        }
    }

    handleClick() {
        this.state.tarefasAvtive = !this.state.tarefasAvtive;
    }


    render() {
        if (this.state.tarefasAvtive === true)
        return (
            <div>
                <button type="button" className="btn">Basic</button>
            </div>
        )
    }
}

export default Footer;