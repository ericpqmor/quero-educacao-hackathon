import React from '../../node_modules/react';

import JobsList from './JobsList.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <JobsList/>
            </div>
        )
    }
}

export default App;