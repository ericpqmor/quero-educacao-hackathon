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
            mainPage: 'projects',
            projectName: 'Escolha um projeto'
        };

        this.changeMainPage = this.changeMainPage.bind(this);
    }

    changeMainPage(newMainPage, name) {
        this.setState({
            mainPage: newMainPage,
            projectName: name
        })
    }

    render() {
        console.log(this.state);
        if(this.state.mainPage === 'projects') {
            return (
                <div>
                    <Header changeMainPage={this.changeMainPage} projectName={this.state.projectName}/>
                    <Projects changeMainPage={this.changeMainPage}/>
                    <Footer/>
                </div>
            )
        } else if (this.state.mainPage === 'job') {
            return (
                <div>
                    <Header changeMainPage={this.changeMainPage} projectName={this.state.projectName}/>
                    <JobManager/>
                    <Footer/>
                </div>
            )
        } else {
            return (
                <div>
                    <Header changeMainPage={this.changeMainPage} projectName={this.state.projectName}/>
                    <HistoryManager/>
                    <Footer/>
                </div>
            )
        }
    }
}

export default App;