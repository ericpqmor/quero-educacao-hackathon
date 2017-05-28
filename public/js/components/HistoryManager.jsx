import React from '../../node_modules/react/';

import HistoryList from './history/HistoryList.jsx';

class HistoryManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: {},
            properties: {
                name: '',
                description: '',
                image: '',
                category: 'pontual',
                money: 10
            }
        };

        this.updateHistory = this.updateHistory.bind(this);
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
                console.log('Teve da request, data = ');
                console.log(data);
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