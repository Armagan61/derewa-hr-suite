import React from 'react';

const Login = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Login</h1>
    <form>
      <input className="border p-2 mb-2 block" type="email" placeholder="E-Mail" />
      <input className="border p-2 mb-4 block" type="password" placeholder="Passwort" />
      <button className="bg-blue-500 text-white px-4 py-2">Einloggen</button>
    </form>
  </div>
);

export default Login;