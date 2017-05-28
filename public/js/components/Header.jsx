import React from '../../node_modules/react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="thisNavbar">
                <div className="container">
                    <div className="row thisNavbar" >
                        <div className="col-lg-3 col-xs-0 ">
                        </div>
                        <div className="col-lg-1 col-xs-3">
                            <div className="HeaderMiddle">
                                <div className="HeaderImage">
                                    <a href="#" className="smoothScroll">
                                        <img src="/dashboard/img/Logo/LogoComplete.png" height={48}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-6" onClick={()=>this.props.changeMainPage('projects', 'Escolha um projeto')}>
                            <div className="HeaderMiddle">
                                <div className="HeaderText">
                                    {this.props.projectName}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-xs-3">
                            <div className="HeaderMiddle">
                            <div className="HeaderText">
                                <i className="fa fa-user-circle-o" ></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-0">
                        </div>
                    </div>
                </div>
            </div>



        )
    }

}

export default Header;