import React from '../../../node_modules/react/react';

import JobsLoading from './JobsLoading.jsx';

class JobsList extends React.Component {
    constructor() {
        super();
        this.state = {
            loadingJobs: true,
            jobs: null
        };
        this.requestJobs = this.requestJobs.bind(this);
    }

    componentDidMount() {
        this.setState({
            jobs: this.requestJobs()
        });
    }

    requestJobs() {
        const jobsUrl = '/jobs/';
        const me = this;
        $.ajax({
            url: jobsUrl,
            dataType: 'json',
            type: 'get',
            success: function (data) {
                if(me.state.loadingJobs === true) {
                    me.setState({
                        loadingJobs: false,
                        jobs: data
                    });
                }
                console.log(data);
                return data;
            },
            error: function (err) {
                console.log("Couldn't load jobs from server")
            }
        });
    }

    transformJobsIntoHTML(jobs) {
        let data = [];
        const v = jobs.jobs;
        for(let i in v) {
            if(v.hasOwnProperty(i)) {
                data.push(
                    <tr key = {v[i].name}>
                        <td>{v[i].name}</td>
                        <td>{v[i].description}</td>
                    </tr>
                );
            }
        }

        return data;
    }

    render() {
        if (this.state.loadingJobs) {
            return (
                <JobsLoading name="tarefas"/>
            )
        }
        else {
            const tableData = this.transformJobsIntoHTML(this.state.jobs);
            console.log(tableData);
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
}

export default JobsList;