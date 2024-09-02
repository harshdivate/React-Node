import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    await fetch('http://localhost:4004/register', {
      method : 'POST',
      body : JSON.stringify({username,password}),
      headers : {'Content-Type' : 'application/json'},
    })
  }

  return (
    <form className="register" onSubmit={registerUser}>
      <h1>Register</h1>
      <input type="text" 
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input type="password" 
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
