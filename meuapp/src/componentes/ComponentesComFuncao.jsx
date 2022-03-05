import React from "react"

const aprovados = ["Douglas", "Daniela", "Amanda", "Marcos"]

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}