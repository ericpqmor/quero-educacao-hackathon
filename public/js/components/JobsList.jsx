import React from '../../node_modules/react';
import requestJobsList from '../requests/requestJobsList.jsx';

class JobsList extends React.Component {
    constructor() {
        super();
        this.jobs = requestJobsList();
    }

    transformJobsIntoHTML(jobs) {
        let data = [];
        for(let i in jobs) {
            if(jobs.hasOwnProperty(i)) {
                data.push(
                    <tr key = {jobs[i].estado}>
                        <td>{jobs[i].estado}</td>
                        <td>{jobs[i].value}</td>
                    </tr>
                );
            }
        }

        return data;
    }

    render() {
        const tableData= this.transformJobsIntoHTML(this.jobs);
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th>Estado</th>
                    <th>População</th>
                </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        )
    }
}

export default JobsList;