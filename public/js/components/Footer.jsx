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
                     <button type="button" className="btn col-md-offset-2 col-md-4 col-xs-6 footerbutton tarefas" onClick={this.handleClick}>Tarefas</button>
                     <button type="button" className="btn col-md-4 col-xs-6 footerbutton historico">Historico</button>
                </div>
            )
        }
        else {
            return (
                <div className="container force-to-bottom">
                    <button type="button" className="btn col-md-offset-2 col-md-4 col-sm-6 footerbutton tarefas">Tarefas</button>
                    <button type="button" className="btn col-md-4 col-sm-6 footerbutton historico" onClick={this.handleClick}>Historico</button>
                </div>
            )
        }
    }
}

export default Footer;