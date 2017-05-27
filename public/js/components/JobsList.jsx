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
                    <tr key = {jobs[i].name}>
                        <td>{jobs[i].name}</td>
                        <td>{jobs[i].description}</td>
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
                    <th>Nome</th>
                    <th>Descrição</th>
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