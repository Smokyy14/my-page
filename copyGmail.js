function copyGmail() {
  const email = "Contact.Smokyy@gmail.com";
  const icon = document.getElementById("gmail-icon");
  const toast = document.getElementById("toast");

  // Traducciones simples dentro de este archivo
  const translations = {
    es: "¡Correo copiado al portapapeles!",
    en: "Email copied to clipboard!",
    pt: "Email copiado para a área de transferência!",
    jp: "メールがクリップボードにコピーされました！"
  };

  const lang = localStorage.getItem("lang") || "es"; // idioma activo
  const message = translations[lang] || translations["es"]; // fallback

  navigator.clipboard.writeText(email)
    .then(() => {
      icon.src = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png";
      icon.alt = "Copiado";

      toast.textContent = message; // muestra el mensaje traducido
      toast.classList.add("show");

      setTimeout(() => {
        icon.alt = "Gmail";
        toast.classList.remove("show");
      }, 2000);
    })
    .catch((err) => {
      console.error("Error al copiar:", err);
      toast.textContent = "❌ Error al copiar";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    });
}
