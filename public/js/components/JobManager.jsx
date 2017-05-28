import React from '../../node_modules/react/';

import JobsList from './jobs/JobsList.jsx';
import FormsAddJob from './jobs/FormsAddJob.jsx';

class JobManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingJobs: true,
            jobs: {}
        };

        this.updateJobs = this.updateJobs.bind(this);
    }

    componentDidMount() {
        this.setState({
            jobs: this.requestJobs(),
            loadingJobs: true
        });
    }

    // componentDidUpdate() {
    //     console.log('on componentDidUpdate');
    //     this.setState({
    //         jobs: this.requestJobs(),
    //         loadingJobs: true
    //     });
    // }

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

    updateJobs() {
        this.setState({
            jobs: this.requestJobs(),
            loadingJobs: true
        });
    }

    render() {
        return (
            <div>
                <JobsList jobs={this.state.jobs} loadingJobs={this.state.loadingJobs}/>
                <FormsAddJob onsubmit={this.updateJobs}/>
            </div>
        );
    }
}

export default JobManager;