//rcc
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (event) => {
        //console.log(event.target.value)
        //atualizar a variavel de estado termoDeBusca para que ela armazene aquilo que foi 
        // digitado pelo usuário até então
        this.setState({termoDeBusca: event.target.value})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} >
                <div
                    className='flex flex-column'>
                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search'/>
                        <InputText
                            className='w-full'
                            placeholder={this.props.dica}
                            onChange={this.onTermoAlterado}
                            //value={this.state.termoDeBusca.toUpperCase}/>
                            value={this.state.termoDeBusca} />
                    </IconField>
                    <Button
                        label="OK"
                        outlined />
                </div>
            </form>
        )
    }
}
Busca.defaultProps = {
    dica: 'Buscar algo...'
}