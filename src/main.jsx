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
          Това е преработена версия на проекта с обновени авторски данни и
          готова структура за качване в GitHub.
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
