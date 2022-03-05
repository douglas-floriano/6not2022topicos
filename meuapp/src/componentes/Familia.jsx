import React from "react";
import { filhosComProps } from "./ComponenteUtil";

export default props =>
    <div>
        <h1>Família</h1>
        
        {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome, endereco: props.endereco, numero: props.numero, cidade: props.cidade, estado: props.estado })} */}
        
        {/* Usando Anotação */}
        {/* {React.cloneElement(props.children, {...props})} */}

        {/* IRÁ MAPEAR TODOS OS NOMES PARA CLONAR */}
        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, {...props})
        })} */}

         {filhosComProps (props)}
    </div>