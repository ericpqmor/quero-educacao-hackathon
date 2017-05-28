import React from '../../../node_modules/react/react';

import Job from './Job.jsx';

class JobsList extends React.Component {
    constructor(props) {
        super(props);
    }

    transformJobsIntoHTML(jobs) {
        let data = [];
        if(jobs !== undefined) {
            const v = jobs.jobs;
            for (let i in v) {
                if (v.hasOwnProperty(i)) {
                    data.push(
                        <Job properties={v[i]} key={v[i].name}
                             onJobUpdate={this.props.onJobUpdate}
                             openForms={this.props.openForms}/>
                    );
                }
            }
        }

        return data;
    }

    render() {
        const tableData = this.transformJobsIntoHTML(this.props.jobs);
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

export default JobsList;