import React from '../../../node_modules/react'


class JobsLoading extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            zIndex: 10,
            backgroundColor: '#6B6C6A',
            margin: 'auto'
        };
        this.state = {
            point: '' ///tells how many point the loading is currently in
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            ()=>this.tick(),
            100
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if(this.state.point === '...')
            this.setState({point: ''});
        else
            this.setState({point: this.state.point + '.'})
    }

    render() {
        return (
            <div>
                <h2> Carregando a lista de {this.props.name} {this.state.point}</h2>
            </div>
        )

    }
}

export default JobsLoading;