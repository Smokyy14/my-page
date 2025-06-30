const translations = {
  es: {
    title: "¡Hola! Soy Smokyy",
    desc: "💻 Programador en Backend y amante de JavaScript",
    github: "GitHub",
    projects: "Proyectos Destacados",
    footer: "Hecho con ❤️ por Smokyy14",
    project1: {
      title: "WhatsApp Bot",
      desc: "Un bot de Whatsapp listo para utilizar. Desactualizado."
    },
    project2: {
      title: "Discord Bot",
      desc: "Un bot hecho con Discord.js listo para modificar."
    },
    project3: {
      title: "Telegram Bot",
      desc: "Un bot sencillo hecho con Telegraf. Listo para usar."
    },
    project4: {
      title: "Mi pagina",
      desc: "El repositorio de esta pagina."
    }
  },
  en: {
    title: "Hi! I'm Smokyy",
    desc: "💻 Backend programmer and JavaScript Lover",
    github: "GitHub",
    projects: "Featured Projects",
    footer: "Made with ❤️ by Smokyy14",
    project1: {
      title: "WhatsApp Bot",
      desc: "A WhatsApp bot ready to use. Outdated."
    },
    project2: {
      title: "Discord Bot",
      desc: "A bot made with Discord.js ready to modify."
    },
    project3: {
      title: "Telegram Bot",
      desc: "A simple bot made with Telegraf. Ready to use."
    },
    project4: {
      title: "My page", 
      desc: "The repository of this page."
    }
  },
  pt: {
    title: "Olá! Sou Smokyy",
    desc: "💻 Programador de backend e amante de JavaScript",
    github: "GitHub",
    projects: "Projetos em Destaque",
    footer: "Feito com ❤️ por Smokyy14",
    project1: {
      title: "Bot do WhatsApp",
      desc: "Um bot de WhatsApp pronto para usar. Desatualizado."
    },
    project2: {
      title: "Bot do Discord",
      desc: "Um bot feito com Discord.js pronto para modificar."
    },
    project3: {
      title: "Bot do Telegram",
      desc: "Um bot simples feito com Telegraf. Pronto para usar."
    },
    project4: {
      title: "Minha página",
      desc: "O repositório desta página"
    }
  },
  jp: {
    title: "こんにちは！スモーキーです",
    desc: "💻 バックエンドプログラマーでJavaScript愛好家です",
    github: "GitHub",
    projects: "注目のプロジェクト",
    footer: "Smokyy14 が ❤️ を込めて作成しました",
    project1: {
      title: "WhatsAppボット",
      desc: "すぐに使えるWhatsAppボット。現在は非推奨です。"
    },
    project2: {
      title: "Discordボット",
      desc: "Discord.jsで作られた、カスタマイズ可能なボットです。"
    },
    project3: {
      title: "Telegramボット",
      desc: "Telegrafで作られたシンプルなボット。すぐに使用できます。"
    },
    project4: {
      title: "マイページ",
      desc: "このページのリポジトリ"
  }

  }}

const langSelect = document.getElementById("language");

function applyLang(lang) {
  const t = translations[lang] || translations["es"];
  document.getElementById("title").textContent = t.title;
  document.getElementById("desc").textContent = t.desc;
  document.getElementById("github-btn").textContent = t.github;
  document.getElementById("projects-title").textContent = t.projects;
  document.getElementById("footer-text").textContent = t.footer;

  // Proyectos alv
  document.getElementById("project1-title").textContent = t.project1.title;
  document.getElementById("project1-desc").textContent = t.project1.desc;

  document.getElementById("project2-title").textContent = t.project2.title;
  document.getElementById("project2-desc").textContent = t.project2.desc;
  
  document.getElementById("project3-title").textContent = t.project3.title;
  document.getElementById("project3-desc").textContent = t.project3.desc;
  
  document.getElementById("project4-title").textContent = t.project4.title;
  document.getElementById("project4-desc").textContent = t.project4.desc;
}


const storedLang = localStorage.getItem("lang") || "es";
langSelect.value = storedLang;
applyLang(storedLang);

langSelect.addEventListener("change", () => {
  const newLang = langSelect.value;
  localStorage.setItem("lang", newLang);
  applyLang(newLang);
});
