import React from 'react';

import './style.css'

const DevItem = ({ dev }) => {
    return (
        <li  className="dev-item">
            <header>
            <img src={dev.avatar_url} alt="Diego Fernandes" />
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>
            {dev.bio}
            </p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    )
};

export default DevItem;