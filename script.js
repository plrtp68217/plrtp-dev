// --------------------------------------------------------------
// ДАННЫЕ ПРОЕКТОВ С КАТЕГОРИЯМИ (разделами)
// Легко добавлять новые категории и сайты, просто следуя формату.
// --------------------------------------------------------------
const projectsCategories = [
  {
    id: "cafe",
    categoryName: "Сайты, сделанные для кофейни",
    projects: [
      {
        title: "Roast Coffee — Main website",
        description:
          "Адаптивный лендинг для кофейни с меню, картой расположения, историей заведения и формой бронирования столов.",
        tech: ["Vue 3", "TypeScript", "SCSS", "Pinia"],
        link: "https://morozovdev.github.io/roast-coffee/",
        previewIcon: "coffee",
      },
      {
        title: "Кофейня 'Зерно' — админ-панель",
        description:
          "Система управления заказами и складскими остатками для сети кофеен. Архитектура с разделением логики и чистым Vue.",
        tech: ["Vue 3", "TS", "Composition API", "Chart.js"],
        link: "https://morozovdev.github.io/coffee-admin/",
        previewIcon: "dashboard",
      },
      {
        title: "Coffee Blog & Magazine",
        description:
          "Блог о кофе, обжарке и рецептах с адаптивной сеткой, поиском и тематическими категориями.",
        tech: ["Next.js", "TypeScript", "Markdown", "CSS Modules"],
        link: "https://morozovdev.github.io/coffee-blog/",
        previewIcon: "article",
      },
    ],
  },
  {
    id: "corporate",
    categoryName: "Корпоративные сайты и сервисы",
    projects: [
      {
        title: "CRM-дашборд логистики",
        description:
          "Дашборд для отслеживания перевозок с графиками, фильтрами и ролевой моделью. Frontend: Vue3, TS, mock API.",
        tech: ["Vue 3", "Vuex", "Tailwind", "ApexCharts"],
        link: "https://morozovdev.github.io/logistics-dashboard/",
        previewIcon: "crm",
      },
      {
        title: "Портал госуслуг (демо-версия)",
        description:
          "Демонстрационный портал с авторизацией, личным кабинетом и формами заявок. Акцент на валидацию и модульность.",
        tech: ["Next.js", "TypeScript", "Zod", "React Hook Form"],
        link: "https://morozovdev.github.io/gosuslugi-demo/",
        previewIcon: "portal",
      },
    ],
  },
  {
    id: "landing",
    categoryName: "Лендинги и продуктовые сайты",
    projects: [
      {
        title: "Fintech — стартап лендинг",
        description:
          "Современный лендинг для финтех-продукта с анимациями, формами связи и микро-взаимодействиями.",
        tech: ["Vue 3", "GSAP", "SCSS", "Vite"],
        link: "https://morozovdev.github.io/fintech-landing/",
        previewIcon: "startup",
      },
      {
        title: "Образовательная платформа (главная)",
        description:
          "Главная страница онлайн-школы с динамическими блоками, интеграцией с API курсов.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        link: "https://morozovdev.github.io/edu-platform/",
        previewIcon: "education",
      },
    ],
  },
];

function renderAllProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;
  container.innerHTML = "";

  if (!projectsCategories.length) {
    container.innerHTML =
      '<p style="color:#aaa;">Скоро здесь появятся проекты...</p>';
    return;
  }

  for (let cat of projectsCategories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "projects-category";

    const titleEl = document.createElement("h3");
    titleEl.className = "category-title";
    titleEl.innerText = cat.categoryName;
    categoryDiv.appendChild(titleEl);

    const gridDiv = document.createElement("div");
    gridDiv.className = "projects-grid";

    for (let proj of cat.projects) {
      const card = document.createElement("div");
      card.className = "project-card";

      // Создаем структуру карточки
      card.innerHTML = `
            <div class="project-img">
              <span style="margin-left: 8px; font-weight: 500;">${proj.title.substring(0, 1)}</span>
            </div>
            <div class="project-info">
              <div class="project-title">${escapeHtml(proj.title)}</div>
              <div class="project-desc">${escapeHtml(proj.description)}</div>
              <div class="project-tech">
                ${proj.tech.map((t) => `<span class="tech-badge">${escapeHtml(t)}</span>`).join("")}
              </div>
              <a href="${proj.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                🔗 Перейти на GitHub Pages →
              </a>
            </div>
          `;
      gridDiv.appendChild(card);
    }

    categoryDiv.appendChild(gridDiv);
    container.appendChild(categoryDiv);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>]/g, function (m) {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}

// Плавный скролл для якорей
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

renderAllProjects();