import React, { useState } from 'react';

const usuarios = [
    { nombre: 'Usuario 1', contraseña: 'contraseña1', activo: true },
    { nombre: 'Usuario 2', contraseña: 'contraseña2', activo: false },
    { nombre: 'Usuario 3', contraseña: 'contraseña3', activo: true },
];

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [estadoUsuario, setEstadoUsuario] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simular inicio de sesión usando el array de usuarios
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombre === username && usuario.contraseña === password
        );

        if (usuarioEncontrado) {
            setEstadoUsuario(usuarioEncontrado.activo ? 'activo' : 'inactivo');
            console.log(
                `Inicio de sesión correcto para el usuario: ${usuarioEncontrado.nombre}`
            );
            // Redirigir a la página principal
        } else {
            setEstadoUsuario('incorrecto');
            console.log('Inicio de sesión incorrecto');
            // Mostrar un mensaje de error
        }
    };

    return (
        <div className="login-form">
            <h2>Bienvenido Usuario anónimo</h2>

            <form onSubmit={handleSubmit}>
                <label>Nombre de usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />

                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type="submit">Iniciar sesión</button>
            </form>

            {estadoUsuario && (
                <div className="estado-usuario">
                    <p>Estado: {estadoUsuario}</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
