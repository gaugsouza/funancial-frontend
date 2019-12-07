import React, { useEffect } from 'react';
//import ElementosDeAcesso from './ElementosDeAcesso';
import GameUtils from './GameUtils';
import CadastroSucesso from './CadastroSucesso';



const TelaInicial = ({setTitle, isLogado}) => {
    useEffect(() =>{
        setTitle("Economy for Kids");
        console.log(isLogado)
    });
    return(
        <div>
           { isLogado ? <GameUtils /> :<CadastroSucesso/> }           
        </div>
    )
};

export default TelaInicial;
