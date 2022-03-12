import React from "react"
import Filho from "./filho";

export default props => {
    const notificarSaidaFilho = Lugar => alert(`Liberado para ${Lugar}`)
    return (
        <div>
            <Filho notificarSaida={notificarSaidaFilho} />
        </div>
    )
}