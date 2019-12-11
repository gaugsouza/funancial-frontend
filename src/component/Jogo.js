import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {usuario} from '../util/usuario';
import {historias} from '../util/fases';
import defaultAvatar from '../images/default-avatar.png';
import '../css/Jogo.css'
import UserStatus from './UserStatus';

const Jogo = () =>{
    const [usuarioGame, setUsuarioGame] = useState(usuario);
    const [nivel, setNivel] = useState(1);
    const [fase, setFase] = useState(1);
    let [indexFase, setIndex] = useState(0);
    let {nome, status:{energia, amizade, dinheiro}} = usuarioGame;

    
    
    const filterHistoria = nivel => historias.filter(historia => historia.nivel === nivel)[0];
    const getFase = (historia, index) => historia.fases[index];


    const gerarOpcoes = fase => fase.opcoes.map(opcao => <div className="game-opt" key={opcao.id} onClick={()=>alteraFase(opcao.id)}>{opcao.resposta}</div>);
    
    
    let historia = filterHistoria(nivel);
    let faseHistoria = getFase(historia, indexFase);
    let { situacao } = faseHistoria;
    let opcoesMap = gerarOpcoes(faseHistoria);

    const updStatus = (id) => {
        let {energia: energiaUpd, amizade: amizadeUpd, dinheiro: dinheiroUpd } = faseHistoria.opcoes.filter(opcao => opcao.id === id)[0];
        setUsuarioGame({
            ...usuarioGame,
            status: {
                energia: energia + energiaUpd,
                amizade: amizade + amizadeUpd,
                dinheiro: dinheiro + dinheiroUpd
            }
        });
    }
    const alteraFase = (id) => {
        updStatus(id);
       
        if(!getFase(historia,indexFase+1)){
            if(!filterHistoria(nivel+1)){
                alert("Você venceu!")
                return;
            }
            setNivel(nivel+1);
            setIndex(0);
            return;
        }
        setIndex(indexFase +1);
    }
    return(
        <div className="game-container">
            <div className="game-area">
                <div className="user-info">
                    <div style={{backgroundImage:`url(${defaultAvatar})`}} className="avatar-img"></div>
                    <p className="user-name">{nome}</p>
                </div>
                <div className="head-game">
                    <h3>Nível: {nivel}</h3>
                </div>
                <div className="btn-sair">
                    <Link to="/logout">Sair</Link>
                </div>
                <div className="game-content">
                    <div><h3>{situacao}</h3></div>
                    <div className="game-options">
                        {opcoesMap}
                    </div>
                </div>
                <UserStatus energia={energia} amizade={amizade} dinheiro={dinheiro} />
            </div>
        </div>
    )
}

export default Jogo;