import React from '../../node_modules/react/';

import JobsList from './jobs/JobsList.jsx';
import FormsAddJob from './jobs/FormsAddJob.jsx';
import AddJob from './jobs/AddJob.jsx';

class JobManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: {},
            forms: false,
            formsAdd: false,
            properties: {
                name: '',
                description: '',
                image: '',
                category: 'pontual',
                money: 10
            }
        };

        this.updateJobs = this.updateJobs.bind(this);
        this.openForms = this.openForms.bind(this);
        this.closeForms = this.closeForms.bind(this);
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
                me.setState({
                    jobs: data
                });

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
            jobs: this.requestJobs()
        });
    }

    openForms(properties) {
        this.setState({forms: true, properties: properties});
    }
    closeForms() {
        this.setState({forms: false});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <JobsList jobs={this.state.jobs}
                          onJobUpdate={this.updateJobs}
                          openForms = {this.openForms}
                          closeForms={this.closeForms}/>
                </div>
                <AddJob onJobUpdate={this.updateJobs}
                        closeForms={this.closeForms}/>

                <div className="col-md-offset-3 col-md-6">
                    <FormsAddJob onJobUpdate={this.updateJobs}
                                 jobs={this.state.jobs}
                                 formsVisible={this.state.forms}
                                 closeForms={this.closeForms}
                                 properties={this.state.properties}
                                 mode="edit"/>
                </div>

            </div>
        );
    }
}

export default JobManager;