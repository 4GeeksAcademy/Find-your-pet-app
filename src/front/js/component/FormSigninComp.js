import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
si
 

  const handleLoginRedirect = () => {
    navigate("/form-login");  // Redirige al formulario de login
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    console.log(confirmPassword)
  }

  const handleSubmit = () => {
    if (confirmPassword!==password){
        alert("contraseña incorrecta")
    }
    //   navigate("/");  
  } 

  return (
    <div className="form-container" style={{ width: '300px', margin: '0 auto' }}>
      <h2>REGISTRATE</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <span className="icon" style={{ marginRight: '10px' }}>👤</span>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <span className="icon" style={{ marginRight: '10px' }}><i className="fas fa-envelope"></i></span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <span className="icon" style={{ marginRight: '10px' }}><i className="fas fa-lock"></i></span>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <span className="icon" style={{ marginRight: '10px' }}><i className="fas fa-lock"></i></span>
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" style={{
          backgroundColor: '#FF8A5B',
          border: 'none',
          color: '#FFFFFF',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Registrarse
        </button>
      </form>
      <hr />
      <div className="alternative-login" style={{ textAlign: 'center' }}>
        <p>Si ya tienes una cuenta</p>
        <button
          type="button"
          onClick={handleLoginRedirect}
          style={{
            backgroundColor: '#FF8A5B',
            border: 'none',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Ingresar
        </button>
        {/* Puedes descomentar y ajustar esto si quieres permitir el inicio de sesión con Google */}
        {/* <button className="google-btn" style={{
          backgroundColor: '#4285F4',
          color: '#FFFFFF',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          marginBottom: '10px'
        }}>
          <i className="fab fa-google" style={{ marginRight: '10px' }}></i> Sign in with Google
        </button> */}
      </div>
    </div>
  );
};

export default SignInForm;
