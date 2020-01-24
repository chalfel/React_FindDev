import React, { useState, useEffect } from 'react';

import './style.css'

const DevForm = ({ onSubmit }) => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [githubUsername, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);

            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({
            github_username: githubUsername,
            techs,
            latitude,
            longitude
        });
        
        setGithubUsername('');
        setTechs('');



    }
    return (
        <form  onSubmit={handleSubmit}>
            <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input 
                name="github_username" 
                id="username_github"
                onChange={ e => setGithubUsername(e.target.value)} 
                required 
                />
            </div>
            <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
                name="techs" 
                id="techs" 
                onChange={ e => setTechs(e.target.value)}
                required 
                />
            </div>

            <div className="input-group">
            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                type="number"
                name="latitude" 
                id="latitude" 
                value={latitude} 
                onChange={ e => setLatitude(e.target.value)}
                required 
                />
            </div>

            <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude} 
                onChange={ e => setLongitude(e.target.value)}
                required 
                />
            </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    );

};

export default DevForm;