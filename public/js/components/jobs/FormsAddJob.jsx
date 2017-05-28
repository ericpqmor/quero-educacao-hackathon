import React from '../../../node_modules/react/';

class FormsAddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            category: 'pontual'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
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
                me.props.onsubmit();
            },
            error: function (err) {
                console.log(err);
                console.log("Couldn't add new job")
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                    <input
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