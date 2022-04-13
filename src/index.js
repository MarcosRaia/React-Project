import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Sobre from './Routes/sobre.jsx'
import Ranking from './Routes/ranking.jsx';
import Polos from './Routes/polos.jsx';
import Publicacoes from './Routes/publicacoes.jsx';
import Register from './Routes/registrar.jsx'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="sobre" element={<Sobre />} />
      <Route exact path="ranking" element={<Ranking />} />
      <Route exact path="polos" element={<Polos />} />
      <Route exact path="publicacoes" element={<Publicacoes />} />
      <Route exact path="registrar" element={<Register />} />   
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
