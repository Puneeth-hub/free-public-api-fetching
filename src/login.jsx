import React, { useState, useEffect } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    
  };

  useEffect(()=>{
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')
    if(storedUsername && storedPassword){
        setUsername(storedUsername)
        setPassword(storedPassword)
        
    }
  })

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>{username}</p>
        <p>{password}</p>
      </div>
    </div>
  );
}

export default LoginPage;
