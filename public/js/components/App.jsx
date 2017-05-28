import React from '../../node_modules/react';

import JobManager from './JobManager.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <JobManager/>
                <Footer/>
            </div>
        )
    }
}

export default App;