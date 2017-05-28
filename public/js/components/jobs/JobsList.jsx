import React from '../../../node_modules/react/react';

import JobsLoading from './JobsLoading.jsx';
import Job from './Job.jsx';

class JobsList extends React.Component {
    constructor(props) {
        super(props);
    }

    transformJobsIntoHTML(jobs) {
        let data = [];
        const v = jobs.jobs;
        for(let i in v) {
            if(v.hasOwnProperty(i)) {
                data.push(
                    <Job properties={v[i]} key={v[i].name}
                         onJobDeletion={this.props.onJobDeletion}/>
                );
            }
        }

        return data;
    }

    render() {
        if (this.props.loadingJobs) {
            return (
                <JobsLoading name="tarefas"/>
            )
        }
        else {
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
}

export default JobsList;