import React from '../../node_modules/react';

import JobManager from './JobManager.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <JobManager/>
                <JobsList/>
                <Footer/>
            </div>
        )
    }
}

export default App;