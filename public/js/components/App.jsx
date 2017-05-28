import React from '../../node_modules/react';

import JobManager from './JobManager.jsx';
import Header from './Header.jsx';
import HistoryManager from './HistoryManager.jsx';
import Body from './Body.jsx';
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            mainPage: 'projects'
        };

        this.changeMainPage = this.changeMainPage.bind(this);
    }

    changeMainPage(newMainPage) {
        this.setState({
            mainPage: newMainPage
        })
    }

    render() {
        if(this.state.mainPage === 'projects') {
            return (
                <div>
                    <Header changeMainPage={this.changeMainPage}/>
                    <Projects/>
                    <Footer/>
                </div>
            )
        } else if (this.state.mainPage === 'job') {
            return (
                <div>
                    <Header changeMainPage={this.changeMainPage}/>
                    <JobManager/>
                    <Footer/>
                </div>
            )
        } else {
            return (
                <div>
                    <Header changeMainPage={this.changeMainPage}/>
                    <HistoryManager/>
                    <Footer/>
                </div>
            )
        }
    }
}

export default App;