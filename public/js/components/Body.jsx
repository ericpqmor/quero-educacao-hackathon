import React from '../../node_modules/react';

import Footer from './Footer.jsx';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.changeBodyState = this.changeBodyState.bind(this);
        this.state = {
            bodyState: "tarefas"
        }
    }

    changeBodyState() {
        if (this.bodyState === "tarefas") {
            this.setState({
                bodyState: "historico"
            });
        }
        else {
            this.setState({
                bodyState: "tarefas"
            });
        }
    }


    render() {
        if (this.state.bodyState === "tarefas"){
            return (

                    <div className="col-md-offset-2">
                        <div className="bodyStyleBack col-md-8">
                            ijljkçjl
                        </div>

                        <div className="col-md-12"></div>
                        <Footer/>
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