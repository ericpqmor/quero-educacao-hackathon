import React from '../../../node_modules/react/';

class FormsAddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.properties.name,
            description: this.props.properties.description,
            image: this.props.properties.image,
            category: this.props.properties.category,
            money: this.props.properties.money,
            assigned: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestEditJob = this.requestEditJob.bind(this);
        this.requestNewJob = this.requestNewJob.bind(this);
        this.getPeople = this.getPeople(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.properties.name,
            description: nextProps.properties.description,
            image: nextProps.properties.image,
            category: nextProps.properties.category,
            money: nextProps.properties.money,
            assigned: nextProps.properties.assigned
        });
    }

    handleInputChange(event) {
        const target = event.target;

        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name === 'money') {
            value = parseFloat(value);
        }

        this.setState({
            [name]: value
        });
    }

    handleOptionChange(event) {
        this.setState({category: event.target.value});
    }

    requestEditJob(object, properties) {
        const jobsUrl = '/jobs/' + properties._id;
        const me = this;

        $.ajax({
            url: jobsUrl,
            dataType: 'json',
            type: 'put',
            data: object,
            success: function (data) {
                me.props.closeForms();
                me.props.onJobUpdate();
            },
            error: function (err) {
                console.log(err);
                console.log("Couldn't edit the job")
            }
        });

        console.log(object);
    }

    requestNewJob() {
        const jobsUrl = '/jobs/';
        const me = this;

        $.ajax({
            url: jobsUrl,
            dataType: 'json',
            type: 'post',
            data: this.state,
            success: function (data) {
                me.setState({
                    name: '',
                    description: '',
                    image: '',
                    money: 0,
                    category: 'pontual',
                    assigned: []
                });
                me.props.closeForms();
                me.props.onJobUpdate();
            },
            error: function (err) {
                console.log(err);
                console.log("Couldn't add new job")
            }
        });

    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.props.mode === 'edit') {
            this.requestEditJob(this.state, this.props.properties);
        } else {
            this.requestNewJob();
        }
    }

    getPeople() {
        const jobsUrl = '/users/';
        const me = this;
        $.ajax({
            url: jobsUrl,
            dataType: 'json',
            type: 'get',
            success: function (data) {
                let finalData = [];
                for(let i in data) {
                    if(data.hasOwnProperty(i)) {
                        finalData.push(
                            <option value={data[i].username} key={data[i].username + Math.random().toString()}>
                                {data[i].username}
                            </option>
                        );
                    }
                }
                me.setState({
                    people: finalData
                });
                me.props.closeForms();
                me.props.onJobUpdate();
            },
            error: function (err) {
                console.log(err);
                console.log("Couldn't load users")
            }
        });

    }

    render() {
        const style = {
            visibility: this.props.formsVisible ? 'visible' : 'hidden'
        };
        console.log(this.state);
        return (
            <form className="bodyStyleBack" onSubmit={this.handleSubmit} style={style}>
                <label>
                    Nome: &nbsp;
                    <input
                        className="formClass"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <br />
                <label>
                    Descrição: &nbsp;
                    <textarea
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Url da imagem: &nbsp;
                    <input
                        name="image"
                        type="text"
                        value={this.state.image}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Dinheiro: &nbsp;
                    <input
                        name="money"
                        type="number"
                        value={parseFloat(this.state.money)}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Tipo de tarefa: &nbsp;
                    <select value={this.state.category} onChange={this.handleOptionChange}>
                        <option value="pontual">Pontual</option>
                        <option value="cyclic">Cíclica</option>
                    </select>
                </label>
                <br />
                <label>
                    Número de Pessoas: &nbsp;
                    <select value={this.state.assigned} onChange={this.handleOptionChange}>
                        {this.state.people}
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormsAddJob;