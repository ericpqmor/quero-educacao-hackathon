import React from '../../node_modules/react';

import JobManager from './JobManager.jsx';
import Header from './Header.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <JobManager/>
            </div>
        )
    }
}

export default App;