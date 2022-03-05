import React from "react";
import  ReactDOM  from "react-dom";
// import  Componente1  from "./componentes/Componente1";
// import  {CompA, CompB as B}  from "./componentes/DoisComponentes";
// import  {Teste1,Teste2,Teste3}  from "./componentes/MultiElementos";
// import  FamiliaGomes  from "./componentes/FamiliaGomes";
import  Familia  from "./componentes/Familia";
import  Nome  from "./componentes/Nome";






const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor="Olá pessoal" soma={3+4}/> */}
        {/* <CompA valor="Primeiro componente"/>
        <B valor="Segundo componente"/> */}
        {/* <MultiElementos/> */}
        {/* <Teste1/>
        <Teste2/>
        <Teste3/> */}
        {/* <FamiliaGomes/> */}
        <Familia>
            <Nome nome="Douglas" sobrenome=" Costa"/>
            <Nome nome="Marcos" sobrenome=" Costa"/>
            <Nome nome="Paula" sobrenome=" Costa"/>
            <Nome nome="Amanda" sobrenome=" Costa"/>
        </Familia>
    </div>
    ,element
)