import React from '../../node_modules/react';

import JobsList from './jobs/JobsList.jsx';
import Header from './Header.jsx';

class Body extends React.Component {
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
                <div className="container bodyStyleBasic">

                </div>
            )
        }
        else {
            return (
                <div className="container force-to-bottom">
                    <button type="button" className="btn col-md-offset-2 col-md-4 col-sm-6 footerbutton tarefasInactive">Tarefas</button>
                    <button type="button" className="btn col-md-4 col-sm-6 footerbutton historicoActive" onClick={this.handleClick}>Historico</button>
                </div>
            )
        }
    }
}

export default Body;