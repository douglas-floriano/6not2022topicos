import React from "react";
import ReactDOM from "react-dom";
// import  Componente1  from "./componentes/Componente1";
// import  {CompA, CompB as B}  from "./componentes/DoisComponentes";
// import  {Teste1,Teste2,Teste3}  from "./componentes/MultiElementos";
// import  FamiliaGomes  from "./componentes/FamiliaGomes";
// import  Familia  from "./componentes/Familia";
// import  Nome  from "./componentes/Nome";
// import ComponentesComFuncao from "./componentes/ComponentesComFuncao";
import Pai from "./componentes/pai"



const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/* <Componente1 valor="Olá pessoal" soma={3+4}/>
        {/* <CompA valor="Primeiro componente"/>
        <B valor="Segundo componente"/> */}
        {/* <MultiElementos/> */}
        {/* <Teste1/>
        <Teste2/>
        <Teste3/> */}
        {/* <FamiliaGomes/>  */}
        {/* <Familia sobrenome="Floriano" endereco=" Rua Teste" numero=" nº 123 " cidade="Franca" estado="/SP">

            <Nome nome="Douglas "/>
            <Nome nome="Marcos " sobrenome=" Costa"/>
            <Nome nome="Paula " sobrenome=" Costa"/>
            <Nome nome="Amanda " sobrenome=" Costa"/>
        </Familia>  */}
        {/* <Familia>
            <Nome nome="Daniela" sobrenome=" Costa"/>
            <Nome nome="Mirian" sobrenome=" Costa"/>
            <Nome nome="Hana" sobrenome=" Costa"/>
        </Familia>  */}

        {/* <FamiliaGomes sobrenome=" Costa"/> */}
        {/* <ComponentesComFuncao /> */}
        <Pai/>

    </div>
    , element
)