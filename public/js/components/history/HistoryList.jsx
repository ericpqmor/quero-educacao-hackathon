import React from '../../../node_modules/react';

class HistoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    transformHistorysIntoHTML(historys) {
        let data = [];
        if(historys !== undefined) {
            const v = historys.historys;
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

import Job from './History.jsx';


export default HistoryList;