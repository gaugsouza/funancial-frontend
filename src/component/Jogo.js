import React from 'react';
import '../css/Jogo.css'
import {usuario} from '../util/usuario';
import {historias} from '../util/fases';
import defaultAvatar from '../images/default-avatar.png';

const Jogo = () =>{
    return(
        <div className="game-container">
            <div className="game-area">
                <div className="user-info">
                    <div style={{backgroundImage:`url(${defaultAvatar})`}} className="avatar-img"></div>
                    <p className="user-name">{usuario.nome}</p>
                </div>
            </div>
        </div>
    )
}

export default Jogo;