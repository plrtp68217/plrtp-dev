
const projectsCategories = [
  {
    id: "cafe",
    categoryName: "Сайты для кофейни",
    projects: [
      {
        title: "Аромантика",
        description:
          "Cайт для кофейни с акцентом на уютную атмосферу и презентацию меню. Реализована динамическая" +
          "фильтрация блюд по категориям (кофе, десерты, завтраки), форма бронирования столика с модальным окном, плавная навигация",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-1",
      },
      {
        title: "Ваша уютная кофейня",
        description:
          "Современный лендинг для кофейни с акцентом на пользовательский опыт и адаптивный дизайн." +
          "Встроена форма бронирования столика с валидацией, toast-уведомлениями, автоматическим выбором минимальной даты." +
          "Генератор персональных промокодов на скидку." +
          "Поддержка светлой и тёмной темы." +
          "Плавная навигация.",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-2",
      },
      {
        title: "GREY LAB — Монохромная кофейня",
        description:
          "Экспериментальный лендинг кофейни в эстетике «серых оттенков» — полный отказ от традиционной шапки и ярких цветов." +
          "Дизайн построен на глубоком чёрном фоне, серых полутонах и строгой типографике." +
          "Главный акцент сделан на атмосферной истории происхождения кофе",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-3",
      },
      {
        title: "Кофеман — Минималистичная кофейня",
        description:
          "Строгий, архитектурный лендинг кофейни с акцентом на лаконичность" +
          "Реализована двухкатегорийная сетка: кофе/десерты и мастер-классы с услугами." +
          "Присутствует переключение светлой/тёмной темы." +
          "Форма бронирования столика через модальный toast с уведомлением." +
          "Все интерактивные элементы (кнопки заказа, бронирования) сопровождаются плавными всплывающими сообщениями в стиле проекта.",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-4",
      },
    ],
  },
  {
    id: "course",
    categoryName: "Лендинги для онлайн-школ",
    projects: [
      {
        title: "PYTHON DEV - курс по Python с нуля до боевого проекта",
        description:
          "Посадочная страница онлайн-курса по Python, построенная на принципах доверия и конкретных результатов. " +
          "Главная задача - превратить сомневающегося новичка в уверенного ученика." +
          "Визуальный стиль выполнен в тёмной «технической» гамме с акцентами в цветах Python (синий + жёлтый).",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/course/python-beginners-course",
      },
      {
        title: "Backend‑курс .NET Middle",
        description:
          "Лендинг для курса по ASP.NET Core, DDD, микросервисам и Kafka. Тёмная тема, адаптив, модальная форма записи.",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/course/dotnet-middle-course",
      },
    ],
  },
  {
    id: "shop",
    categoryName: "Интернет-магазины",
    projects: [
      {
        title: "WATCH.STORE - Магазин премиальных часов",
        description:
          "Полностью адаптивный дизайн." +
          "Интерактивный каталог с карточками товаров, рейтингами и динамическими ценами." +
          "Анимированное добавление товаров в корзину." +
          "Миниатюрные аналоговые часы в шапке сайта с реальным ходом стрелок." +
          "Многоязычный интерфейс (русский/английский) с мгновенным переключением." +
          "Полнофункциональная корзина с боковой панелью, подтверждением очистки и оформлением заказа.",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/shop/watch-shop",
      },
    ],
  },
  {
    id: "roadmap",
    categoryName: "Дорожные карты (Roadmap)",
    projects: [
      {
        title: "Unity Roadmap: Middle → Full‑stack GameDev",
        description:
          "Одностраничный трекер навыков с сохранением прогресса в localStorage." +
          "Включает ECS, мультиплеер, оптимизацию, шейдеры, CI/CD." +
          "Чеклисты, модульные прогресс-бары и общий процент завершения.",
        tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
        link: "https://plrtp68217.github.io/small-business-sites/roadmap",
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
            <div class="project-content">
              <div class="project-img">
                <span style="margin-left: 8px; font-weight: 500;">${proj.title.substring(0, 1)}</span>
              </div>
              <div class="project-info">
                  <div class="project-title">${escapeHtml(proj.title)}</div>
                  <div class="project-desc">${escapeHtml(proj.description)}</div>
                  <div class="project-tech">
                    ${proj.tech.map((t) => `<span class="tech-badge">${escapeHtml(t)}</span>`).join("")}
                  </div>
              </div>
            </div>

            <a href="${proj.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                🔗 Перейти на GitHub Pages →
            </a>
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