import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokemonPage from './pages/PokemonPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonPage>

      </PokemonPage>
    </BrowserRouter>
  </React.StrictMode>,
)
