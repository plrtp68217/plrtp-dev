    const projectsCategories = [
      {
        id: "cafe",
        categoryName: "Сайты для кофейни",
        projects: [
          {
            title: "Аромантика",
            description: "Сайт для кофейни с акцентом на уютную атмосферу и презентацию меню. Динамическая фильтрация блюд по категориям, форма бронирования столика с модальным окном, плавная навигация.",
            tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
            link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-1",
          },
          {
            title: "Ваша уютная кофейня",
            description: "Современный лендинг с акцентом на пользовательский опыт. Форма бронирования с валидацией и toast-уведомлениями, генератор промокодов, поддержка светлой и тёмной темы.",
            tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
            link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-2",
          },
          {
            title: "GREY LAB - Монохромная кофейня",
            description: "Экспериментальный лендинг в эстетике «серых оттенков». Глубокий чёрный фон, строгая типографика, акцент на атмосферной истории происхождения кофе.",
            tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
            link: "https://plrtp68217.github.io/small-business-sites/cafe/cafe-site-design-3",
          },
          {
            title: "Кофеман - Минималистичная кофейня",
            description: "Строгий архитектурный лендинг. Двухкатегорийная сетка, переключение тем, форма бронирования через модальный toast. Все интерактивные элементы с плавными уведомлениями.",
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
            title: "PYTHON DEV - курс с нуля до боевого проекта",
            description: "Посадочная страница онлайн-курса по Python. Визуальный стиль - тёмная «техническая» гамма с акцентами в цветах Python. Фокус на доверии и конкретных результатах.",
            tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
            link: "https://plrtp68217.github.io/small-business-sites/course/python-beginners-course",
          },
          {
            title: "Backend‑курс .NET Middle",
            description: "Лендинг для курса по ASP.NET Core, DDD, микросервисам и Kafka. Тёмная тема, адаптивный дизайн, модальная форма записи.",
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
            description: "Адаптивный каталог с карточками товаров и рейтингами. Аналоговые часы в шапке с реальным ходом стрелок. Многоязычный интерфейс, полнофункциональная корзина с боковой панелью.",
            tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
            link: "https://plrtp68217.github.io/small-business-sites/shop/watch-shop",
          },
        ],
      },
      {
        id: "roadmap",
        categoryName: "Дорожные карты",
        projects: [
          {
            title: "Unity Roadmap: Middle → Full‑stack GameDev",
            description: "Одностраничный трекер навыков с сохранением прогресса. ECS, мультиплеер, оптимизация, шейдеры, CI/CD. Чеклисты, прогресс-бары и общий процент завершения.",
            tech: ["HTML5", "CSS", "Vue 3", "TypeScript", "Next.js"],
            link: "https://plrtp68217.github.io/small-business-sites/roadmap",
          },
        ],
      },
    ];

    function escapeHtml(str) {
      if (!str) return "";
      return str.replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
    }

    function renderAllProjects() {
      const container = document.getElementById("projectsContainer");
      if (!container) return;
      container.innerHTML = "";

      if (!projectsCategories.length) {
        container.innerHTML = '<p style="color:var(--text-3)">Скоро здесь появятся проекты...</p>';
        return;
      }

      for (const cat of projectsCategories) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "projects-category";

        const header = document.createElement("div");
        header.className = "category-header";
        header.innerHTML = `
          <h3 class="category-title">${escapeHtml(cat.categoryName)}</h3>
          <span class="category-count">${cat.projects.length} ${cat.projects.length === 1 ? "проект" : "проекта"}</span>
        `;
        categoryDiv.appendChild(header);

        const gridDiv = document.createElement("div");
        gridDiv.className = "projects-grid";

        for (const proj of cat.projects) {
          const card = document.createElement("div");
          card.className = "project-card";
          const initial = proj.title.charAt(0);
          card.innerHTML = `
            <div class="project-img">
              <span class="project-initial">${escapeHtml(initial)}</span>
            </div>
            <div class="project-info">
              <div class="project-title">${escapeHtml(proj.title)}</div>
              <div class="project-desc">${escapeHtml(proj.description)}</div>
              <div class="project-tech">
                ${proj.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join("")}
              </div>
            </div>
            <a href="${escapeHtml(proj.link)}" class="project-link" target="_blank" rel="noopener noreferrer">
              Перейти на GitHub Pages
              <span class="arrow">→</span>
            </a>
          `;
          gridDiv.appendChild(card);
        }

        categoryDiv.appendChild(gridDiv);
        container.appendChild(categoryDiv);
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
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