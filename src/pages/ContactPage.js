const ContactPage = () => {
    return (
      <div className="page-content">
        <h1>Контакти</h1>
        <p>Зв'яжіться з нами через email або чарівну сову 🕊️</p>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
  <input type="text" placeholder="Ваше ім’я" />
  <input type="email" placeholder="Email" />
  <textarea placeholder="Ваше повідомлення" />
  <button type="submit">Надіслати</button>
</form>

      </div>
    );
  };
  
  export default ContactPage;
  
  