import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">UNIBIT React Project</div>
        <h1>Проект на ateofanov</h1>
        <p className="subtitle">Факултетен номер: <strong>256sz</strong></p>
        <p>
          Малък проект направен направен на ReactJS с няколко елемента в една фукнция.
        </p>
        <div className="cards">
          <article>
            <h2>Автор</h2>
            <p>ateofanov</p>
          </article>
          <article>
            <h2>Факултетен номер</h2>
            <p>256sz</p>
          </article>
          <article>
            <h2>Технологии</h2>
            <p>React + Vite</p>
          </article>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
