const AboutPage = () => {
    return (
      <div className="page-content">
        <h1>Про нас</h1>
        <p>Ми створили цей сайт, щоб вивчати React з радістю 🌿</p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
  <div style={{ background: "#fff0f5", padding: "20px", borderRadius: "12px", width: "200px" }}>
    <h3>🎓 Навчання</h3>
    <p>Ми вивчаємо React разом</p>
  </div>
  <div style={{ background: "#f0fff0", padding: "20px", borderRadius: "12px", width: "200px" }}>
    <h3>⚙️ Практика</h3>
    <p>Лабораторні з кодом</p>
  </div>
</div>
      </div>
     
    
    );
  };
  
  export default AboutPage;
  
  