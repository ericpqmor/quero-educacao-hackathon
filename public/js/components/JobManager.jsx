import React from '../../node_modules/react/';

import JobsList from './jobs/JobsList.jsx';
import FormsAddJob from './jobs/FormsAddJob.jsx';

class JobManager extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <JobsList/>
                <FormsAddJob/>
            </div>
        );
    }
}

export default JobManager;