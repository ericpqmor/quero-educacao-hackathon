import React from '../../../node_modules/react/react';

class FormsAddJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            task: 'pontual'
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
        this.setState({task: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input
                        name="name"
                        type="text"
                        checked={this.state.name}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <br />
                <label>
                    Descrição
                    <input
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Url da imagem
                    <input
                        name="image"
                        type="text"
                        value={this.state.image}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Tipo de tarefa
                    <select value={this.state.value} onChange={this.handleOptionChange}>
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