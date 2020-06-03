import React from 'react';

function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">Hero subtitle</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
