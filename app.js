function renderNav(sections) {
  const navList = document.getElementById("nav-list");

  navList.innerHTML = sections
    .map((section) => `<li><a href="#${section.id}">${section.label}</a></li>`)
    .join("");
}

function renderSections(sections) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="page-sections">
      ${sections.map(renderSection).join("")}
      <footer class="site-footer">
        <p>模块 1 已完成：页面骨架、sticky nav、10 个 section 占位与本地多文件引用已建立。</p>
      </footer>
    </div>
  `;
}

function renderSection(section, index) {
  if (section.id === "hero") {
    return renderHeroSection(section, index);
  }

  if (section.id === "characters") {
    return renderCharactersSection(section, index);
  }

  if (section.id === "overview") {
    return renderOverviewSection(section, index);
  }

  if (section.id === "setup") {
    return renderSetupSection(section, index);
  }

  if (section.id === "flow") {
    return renderFlowSection(section, index);
  }

  if (section.id === "mechanics") {
    return renderMechanicsSection(section, index);
  }

  if (section.id === "scoring") {
    return renderScoringSection(section, index);
  }

  if (section.id === "variants") {
    return renderVariantsSection(section, index);
  }

  if (section.id === "faq") {
    return renderFaqSection(section, index);
  }

  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <p>${section.placeholder}</p>
      <div class="section-placeholder">
        当前为骨架占位区。后续模块将在这里挂载真实内容与组件。
      </div>
    </section>
  `;
}

function renderHeroSection(section, index) {
  return `
    <section class="page-section page-section-hero" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <div class="hero-layout">
        <div class="hero-copy">
          <p class="hero-eyebrow">${heroData.eyebrow}</p>
          <h2>${heroData.title}</h2>
          <p class="hero-summary">${heroData.summary}</p>
          <div class="hero-pill-list">
            ${heroData.highlights.map((item) => `<span class="hero-pill">${item}</span>`).join("")}
          </div>
        </div>
        <aside class="hero-aside" aria-label="游戏摘要">
          ${heroData.callouts.map((item) => `
            <article class="hero-metric">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
            </article>
          `).join("")}
        </aside>
      </div>
      <div class="hero-scene" aria-hidden="true">
        <div class="hero-wave hero-wave-back"></div>
        <div class="hero-wave hero-wave-mid"></div>
        <div class="hero-wave hero-wave-front"></div>
        <div class="hero-boat">
          <span class="hero-boat-body"></span>
          <span class="hero-boat-cabin"></span>
          <span class="hero-boat-flag"></span>
        </div>
      </div>
    </section>
  `;
}

function renderOverviewSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <p>${overviewData.intro}</p>
      <div class="content-grid content-grid-two">
        <section class="content-card">
          <h3>基础信息</h3>
          <div class="fact-list">
            ${overviewData.facts.map(([label, value]) => `
              <div class="fact-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="content-card">
          <h3>基础组件</h3>
          <div class="stack-list">
            ${overviewData.components.map((item) => `
              <article class="mini-card">
                <strong>${item.name}</strong>
                <span>${item.count}</span>
                <p>${item.detail}</p>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="content-card content-card-full">
          <h3>25 周年豪华版新增</h3>
          <div class="pill-list">
            ${overviewData.anniversary.map((item) => `<span class="pill">${item}</span>`).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderSetupSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <div class="content-grid content-grid-two">
        <section class="content-card">
          <h3>通用准备步骤</h3>
          <ol class="ordered-list">
            ${setupData.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </section>
        <section class="content-card">
          <h3>救生艇初始座位</h3>
          <div class="seat-track">
            ${setupData.seatOrder.map((seat) => `<div class="seat-stop">${seat}</div>`).join("")}
          </div>
        </section>
        <section class="content-card content-card-full">
          <h3>不同人数建议</h3>
          <div class="stack-list">
            ${setupData.playerCounts.map((item) => `
              <article class="mini-card">
                <strong>${item.players}</strong>
                <span>${item.keep}</span>
                <p>${item.note}</p>
              </article>
            `).join("")}
          </div>
          <p class="inline-note">${setupData.warning}</p>
        </section>
      </div>
    </section>
  `;
}

function renderFlowSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <div class="phase-strip">
        ${flowData.summary.map((phase) => `
          <article class="phase-card">
            <h3>${phase.title}</h3>
            <p>${phase.body}</p>
          </article>
        `).join("")}
      </div>
      <div class="content-grid content-grid-two">
        <section class="content-card">
          <h3>行动阶段选项</h3>
          <div class="stack-list">
            ${flowData.actions.map((action) => `
              <article class="mini-card">
                <strong>${action.name}</strong>
                <span>${action.resist}</span>
                <p>${action.detail}</p>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="content-card">
          <h3>航行图标</h3>
          <div class="stack-list">
            ${flowData.navigationIcons.map((item) => `
              <article class="mini-card mini-card-icon">
                <strong>${item.icon} ${item.name}</strong>
                <p>${item.detail}</p>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderMechanicsSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <div class="content-grid content-grid-two">
        <section class="content-card">
          <h3>位置价值</h3>
          <div class="stack-list">
            ${mechanicData.position.map((item) => `
              <article class="mini-card">
                <strong>${item.title}</strong>
                <span>${item.weight}</span>
                <p>${item.detail}</p>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="content-card">
          <h3>关键机制</h3>
          <div class="stack-list">
            ${mechanicData.systems.map((item) => `
              <article class="mini-card">
                <strong>${item.title}</strong>
                <ul class="bullet-list">
                  ${item.points.map((point) => `<li>${point}</li>`).join("")}
                </ul>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderScoringSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <p>${scoringRules.endTrigger}</p>
      <div class="content-grid content-grid-two">
        <section class="content-card">
          <h3>得分来源</h3>
          <div class="fact-list">
            ${scoringRules.sources.map(([label, value]) => `
              <div class="fact-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="content-card">
          <h3>${scoringRules.example.title}</h3>
          <p>${scoringRules.example.body}</p>
          <p class="inline-note">${scoringRules.note}</p>
        </section>
      </div>
    </section>
  `;
}

function renderVariantsSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <div class="content-grid">
        ${variantCards.map((item) => `
          <article class="content-card">
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFaqSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <div class="content-grid">
        ${faqItems.map((item) => `
          <article class="content-card faq-card">
            <h3>${item.q}</h3>
            <p>${item.a}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCharactersSection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <p>现有角色系统已经迁移到独立 section 中，后续模块可以继续在不影响其他区块的前提下扩展它。</p>
      <div class="character-widget" data-character-widget>
        <div class="character-tabs" role="tablist" aria-label="角色切换">
          ${chars.map((char, indexInner) => renderCharacterTab(char, indexInner)).join("")}
        </div>
        <div class="character-cards">
          ${chars.map((char, indexInner) => renderCharacterCard(char, indexInner)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCharacterTab(char, index) {
  const isActive = index === 0;

  return `
    <button
      class="character-tab${isActive ? " is-active" : ""}"
      type="button"
      role="tab"
      aria-selected="${isActive ? "true" : "false"}"
      aria-controls="character-panel-${char.id}"
      id="character-tab-${char.id}"
      data-character-tab="${char.id}"
      style="--character-color:${char.color};--character-tab-bg:${char.bgt};"
    >
      <span class="character-tab-icon">${char.icon}</span>
      <span>${char.name.split(" ")[0]}</span>
    </button>
  `;
}

function renderCharacterCard(char, index) {
  const isActive = index === 0;

  return `
    <article
      class="character-card${isActive ? " is-active" : ""}"
      id="character-panel-${char.id}"
      role="tabpanel"
      aria-labelledby="character-tab-${char.id}"
      ${isActive ? "" : "hidden"}
    >
      <div class="character-card-header" style="--character-header-bg:${char.bg};--character-color:${char.color};">
        <div class="character-avatar">${char.icon}</div>
        <div class="character-meta">
          <h3>${char.name}</h3>
          <p>${char.en} · ${char.pos}</p>
          <div class="character-badges">
            ${char.tags.map((tag) => `<span class="character-badge">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="character-card-body">
        <section class="character-panel">
          <h4>角色数值</h4>
          ${renderCharacterStat("体型（战斗力）", char.size, 8, char.color)}
          ${renderCharacterStat("体力（血量上限）", char.hp, 8, char.color)}
          ${renderCharacterStat("生存分", char.sv, 6, char.color, " 分")}
          <div class="character-row">
            <span>角色类型</span>
            <strong>${char.type}</strong>
          </div>
          <div class="character-row">
            <span>特殊能力</span>
            <strong>${char.special}</strong>
          </div>
        </section>
        <section class="character-panel">
          <h4>社交关系</h4>
          <div class="character-note">
            <span class="character-note-label">重点威胁</span>
            <p>${char.threat}</p>
          </div>
          <div class="character-note">
            <span class="character-note-label">结盟方向</span>
            <p>${char.ally}</p>
          </div>
        </section>
        <section class="character-panel character-panel-full">
          <h4>核心打法</h4>
          <div class="character-tips">
            ${char.tips.map((tip) => `<p>${tip}</p>`).join("")}
          </div>
        </section>
        <section class="character-verdict" style="--character-verdict-bg:${char.verdictColor};--character-color:${char.verdictBorder};">
          <strong>总评</strong>
          <p>${char.verdict}</p>
        </section>
      </div>
    </article>
  `;
}

function renderCharacterStat(label, value, maxValue, color, suffix = "") {
  return `
    <div class="character-stat">
      <div class="character-row">
        <span>${label}</span>
        <strong>${value}${suffix}</strong>
      </div>
      <div class="character-stat-bar" aria-hidden="true">
        <div class="character-stat-fill" style="width:${(value / maxValue) * 100}%;--character-color:${color};"></div>
      </div>
    </div>
  `;
}

function bindCharacterTabs() {
  const tabButtons = document.querySelectorAll("[data-character-tab]");
  const panels = document.querySelectorAll(".character-card");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.characterTab;

      tabButtons.forEach((tab) => {
        const isActive = tab.dataset.characterTab === targetId;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach((panel) => {
        const isActive = panel.id === `character-panel-${targetId}`;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

function bootstrap() {
  document.title = siteMeta.title;
  renderNav(siteMeta.sections);
  renderSections(siteMeta.sections);
  bindCharacterTabs();
}

bootstrap();
