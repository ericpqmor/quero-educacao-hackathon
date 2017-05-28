import React from '../../../node_modules/react/';

class FormsAddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.properties.name,
            description: this.props.properties.description,
            image: this.props.properties.image,
            category: this.props.properties.category
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.requestEditJob = this.requestEditJob.bind(this);
        this.requestNewJob = this.requestNewJob.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.properties.name,
            description: nextProps.properties.description,
            image: nextProps.properties.image,
            category: nextProps.properties.category
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

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
                    category: 'pontual'
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

    render() {
        const style = {
            visibility: this.props.formsVisible ? 'visible' : 'hidden'
        };
        return (
            <form onSubmit={this.handleSubmit} style={style}>
                <label>
                    Nome: &nbsp;
                    <input
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
                    Tipo de tarefa: &nbsp;
                    <select value={this.state.category} onChange={this.handleOptionChange}>
                        <option value="pontual">Pontual</option>
                        <option value="cyclic">Cíclica</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormsAddJob;