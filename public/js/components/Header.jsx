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
                            <div className="HeaderImage">
                                <img src="/dashboard/img/Logo/LogoComplete.png" height={48}/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-6" onClick={()=>this.props.changeMainPage('projects')}>
                            <div className="HeaderMiddle">
                                <div className="HeaderText">
                                    Projeto 1
                                </div>
                                <div className="HeaderText">
                                    <span className="glyphicon glyphicon-triangle-bottom" ></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-xs-3">
                            <div className="HeaderMiddle">
                            <div className="HeaderText">
                                <span className="glyphicon glyphicon-adjust" ></span>
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