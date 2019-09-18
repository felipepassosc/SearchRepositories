import React, { Component } from 'react';

class PesquisaRepositories extends Component {
    constructor(props) {
        super(props);

        this.imputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            list: []
        }

    }



    handleSubmit(event) {
        event.preventDefault()
        fetch(`https://api.github.com/search/repositories?q=${this.imputName.current.value}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.items
                })
                console.log(this.state.list)
            })
            
    }

    render() {
        const { state } =this;
        return (
            <form onSubmit={this.handleSubmit}>
                    <h4>Peaquise um reporsitorio</h4>
                    <input type="text" name="name" ref={this.imputName} />
                <input type="submit" value="enviar" />
                <ul>
                    {state.list.map(item => <li>{item.full_name }</li>)}
                </ul>
            </form>
        )
    }
}

export default PesquisaRepositories;