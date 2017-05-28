import React from '../../../node_modules/react';

import History from './History.jsx';

class HistoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    transformHistorysIntoHTML(historys) {
        let data = [];

        if(historys !== undefined) {
            const v = historys.jobs;
            for (let i in v) {
                if (v.hasOwnProperty(i)) {
                    data.push(
                        <History properties={v[i]} key={v[i].name + v[i].description + Math.random().toString()}
                             onHistoryUpdate={this.props.onHistoryUpdate}/>
                    );
                }
            }
        }

        return data;
    }

    render() {
        const tableData = this.transformHistorysIntoHTML(this.props.history);
        console.log('Renderizando o HistoryList com table data = ');
        console.log(tableData);
        return (
            <div>
                <table className="table table-striped table-bordered table-hover taskTable">
                    <thead>
                    <tr>
                        <th>Tarefas</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default HistoryList;