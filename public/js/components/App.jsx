import React from '../../node_modules/react';

import JobManager from './JobManager.jsx';
import Header from './Header.jsx';
import HistoryManager from './HistoryManager.jsx';
import Body from './Body.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <JobManager/>
                <HistoryManager/>
                <Body/>
            </div>
        )
    }
}

export default App;