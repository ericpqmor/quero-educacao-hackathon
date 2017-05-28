import React from '../../node_modules/react/';

import HistoryList from './history/HistoryList.jsx';

class HistoryManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: {},
            forms: false,
            properties: {
                name: '',
                description: '',
                image: '',
                category: 'pontual',
                money: 10
            }
        };

        this.updateHistory = this.updateHistory.bind(this);
        this.openForms = this.openForms.bind(this);
        this.closeForms = this.closeForms.bind(this);
    }

    componentDidMount() {
        this.setState({
            history: this.requestHistory()
        });
    }

    requestHistory() {
        const historyUrl = '/jobs/history';
        const me = this;
        $.ajax({
            url: historyUrl,
            dataType: 'json',
            type: 'get',
            success: function (data) {
                me.setState({
                    history: data
                });

                return data;
            },
            error: function (err) {
                console.log(err);
                console.log("Couldn't load history from server")
            }
        });
    }

    updateHistory() {
        this.setState({
            history: this.requestHistory()
        });
    }

    openForms(properties) {
        this.setState({forms: true, properties: properties});
    }
    closeForms() {
        this.setState({forms: false});
    }

    render() {
        return (
            <div>
                <HistoryList history={this.state.history}
                          onJobUpdate={this.updateHistory}
                          openForms = {this.openForms}
                          closeForms={this.closeForms}/>
            </div>
        );
    }
}

export default HistoryManager;