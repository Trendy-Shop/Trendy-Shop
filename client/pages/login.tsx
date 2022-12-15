import React,{useState} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'
// import { Container, Row, Col, Form, Button } from 'next-bootstrap-layout';
const Login= () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
        
      })
      router.push('/')
      // Handle successful login
    alert(response.data.message)
    console.log(response)
    } catch (error){
      console.log(error);
     
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};






export default Login
