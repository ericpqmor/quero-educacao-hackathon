import React from '../../../node_modules/react/react';

import JobsLoading from './JobsLoading.jsx';
import Job from './Job.jsx';
import FormsAddJob from "./FormsAddJob.jsx";

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

                return data;
            },
            error: function (err) {
                console.log(err);
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
                        <Job properties={v[i]}/>
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

            return (
                <div>
                    <table className="table table-striped table-bordered table-hover">
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
}

export default JobsList;