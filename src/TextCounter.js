import React, { Component } from 'react';

class TextCounter extends Component {
    //valores padrões, se não passar a propriedade limit, será esse o valor
    static defaultProps = {
        limit : 15
    }

    constructor(props){ // Recebe as propriedades do objeto
        super(props); // Passa valores que esta recebendo para classe pai 
        // Props Valores que recebe 

        this.state = { // Variveis internas ficam em state
            totalChars:0,
            text : ''
        }
       this.handleChange = this.handleChange.bind(this) // acessar o proprio componente
    }

    // this.setState({ // Altera o estado, render é executado novamente
    //     totalChars: 5
    // })

    handleChange(event){
        const element = event.target, // target é o textarea
        text = element.value;

        if(text.length <= this.props.limit){
            this.setState({
                totalChars: text.length,
                text: text
            })
        }
    }

    render() {
        // const state = this.state
        // const {state, props} = this;

        return (
            <div>
                <h1>Meu contador</h1>
                <textarea onChange={this.handleChange} value={ this.state.text}/>
                <div>
                    <strong>Total:</strong> { this.state.totalChars } / { this.props.limit }
                </div>
            </div>
        )
    }
}

export default TextCounter;