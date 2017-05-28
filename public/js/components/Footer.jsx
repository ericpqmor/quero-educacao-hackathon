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
        this.setState({
            tarefasActive: !this.state.tarefasActive
        });
    }


    render() {
        if (this.state.tarefasActive === true){
            return (
                <div className="container force-to-bottom">
                    <button type="button" className="btn col-md-6 footerbutton" onClick={this.handleClick}>Basigc</button>
                    <button type="button" className="btn col-md-6 footerbutton">Basic2</button>
                </div>
            )
        }
        else {
            return (
                <div className="container force-to-bottom">
                    <button type="button" className="btn col-md-6 footerbutton">Basic1</button>
                    <button type="button" className="btn col-md-6 footerbutton" onClick={this.handleClick}>Basic2</button>
                </div>
            )
        }
    }
}

export default Footer;