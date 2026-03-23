function renderNav(sections) {
  const navList = document.getElementById("nav-list");

  navList.innerHTML = sections
    .map((section) => `<li><a href="#${section.id}" data-nav-link="${section.id}">${section.label}</a></li>`)
    .join("");
}

function renderSections(sections) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="page-sections">
      ${sections.map(renderSection).join("")}
      <footer class="site-footer">
        <p>当前版本已包含角色指南、计分规则与可交互的终局计分器。</p>
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

  if (section.id === "strategy") {
    return renderStrategySection(section, index);
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
        <section class="content-card content-card-full">
          <h3>基础补给牌一览</h3>
          <div class="stack-list">
            ${overviewData.provisions.map((item) => `
              <article class="mini-card">
                <strong>${item.name}</strong>
                <span>${item.count} 张</span>
                <p>${item.detail}</p>
              </article>
            `).join("")}
          </div>
          <p class="inline-note">${overviewData.provisionsNote}</p>
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
            ${setupData.seatOrder.map((seat) => `
              <button
                class="seat-stop"
                type="button"
                data-seat-name="${seat.name}"
                data-seat-tip="${seat.tip}"
              >
                <strong>${seat.slot}</strong>
                <span>${seat.name}</span>
              </button>
            `).join("")}
          </div>
          <p class="seat-hint" id="seat-hint">点击任意座位，查看它在开局中的战略提示。</p>
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
      <div class="phase-strip" data-accordion-group="flow">
        ${flowData.summary.map((phase, phaseIndex) => `
          <article class="phase-card${phaseIndex === 0 ? " is-open" : ""}" data-accordion-item>
            <button class="phase-toggle" type="button" aria-expanded="${phaseIndex === 0 ? "true" : "false"}">
              <span>${phase.title}</span>
              <span class="phase-toggle-icon" aria-hidden="true"></span>
            </button>
            <div class="phase-panel"${phaseIndex === 0 ? "" : " hidden"}>
              <p>${phase.body}</p>
            </div>
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
        <section class="content-card content-card-full">
          <h3>特殊关系判定</h3>
          <div class="stack-list">
            ${scoringRules.specialCases.map(([label, value]) => `
              <article class="mini-card">
                <strong>${label}</strong>
                <p>${value}</p>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
      ${renderScoringCalculator()}
    </section>
  `;
}

function renderStrategySection(section, index) {
  return `
    <section class="page-section" id="${section.id}">
      <p class="section-meta">Section ${index + 1}</p>
      <h2>${section.title}</h2>
      <p>这里把最容易影响胜率的判断拆成三个维度，方便按局势快速切换思路。</p>
      <div class="strategy-widget">
        <div class="strategy-tabs" role="tablist" aria-label="策略标签页">
          ${strategyTabs.map((tab, tabIndex) => `
            <button
              class="strategy-tab${tabIndex === 0 ? " is-active" : ""}"
              type="button"
              role="tab"
              aria-selected="${tabIndex === 0 ? "true" : "false"}"
              aria-controls="strategy-panel-${tab.id}"
              id="strategy-tab-${tab.id}"
              data-strategy-tab="${tab.id}"
            >
              ${tab.label}
            </button>
          `).join("")}
        </div>
        <div class="strategy-panels">
          ${strategyTabs.map((tab, tabIndex) => `
            <article
              class="strategy-panel${tabIndex === 0 ? " is-active" : ""}"
              id="strategy-panel-${tab.id}"
              role="tabpanel"
              aria-labelledby="strategy-tab-${tab.id}"
              ${tabIndex === 0 ? "" : "hidden"}
            >
              <h3>${tab.title}</h3>
              <ul class="bullet-list">
                ${tab.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
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
            <p class="variant-meta">${item.meta}</p>
            <p>${item.detail}</p>
            <ul class="bullet-list">
              ${item.bullets.map((point) => `<li>${point}</li>`).join("")}
            </ul>
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
      <div class="faq-toolbar">
        <button class="faq-toolbar-button" type="button" data-faq-toggle="expand">全部展开</button>
        <button class="faq-toolbar-button" type="button" data-faq-toggle="collapse">全部收起</button>
      </div>
      <div class="content-grid">
        ${faqItems.map((item, itemIndex) => `
          <article class="content-card faq-card${item.open ? " is-open" : ""}" data-faq-item>
            <button
              class="faq-question"
              type="button"
              aria-expanded="${item.open ? "true" : "false"}"
              aria-controls="faq-panel-${itemIndex}"
            >
              <span>${item.q}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
            <div class="faq-answer" id="faq-panel-${itemIndex}"${item.open ? "" : " hidden"}>
              <p>${item.a}</p>
            </div>
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
          ${renderCharacterStat("生存分", char.sv, 9, char.color, " 分")}
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

function renderScoringCalculator() {
  return `
    <div class="scoring-calculator" data-scoring-calculator>
      <div class="calculator-toolbar">
        <div>
          <h3>终局计分器</h3>
          <p>先选择本局人数，计分器会自动带出对应角色；再填写每名角色的生死、财宝和爱恨关系，结果会自动更新。</p>
        </div>
        <div class="calculator-toolbar-side">
          <label class="calculator-player-count">
            <span>本局人数</span>
            <select data-score-player-count>
              <option value="4">4 人</option>
              <option value="5">5 人</option>
              <option value="6" selected>6 人</option>
              <option value="7">7 人</option>
              <option value="8">8 人</option>
            </select>
          </label>
          <div class="calculator-actions">
          <button class="faq-toolbar-button" type="button" data-score-action="example">载入示例</button>
          <button class="faq-toolbar-button" type="button" data-score-action="reset">重置</button>
          </div>
        </div>
      </div>
      <div class="content-grid content-grid-two scoring-layout">
        <section class="content-card">
          <h3>角色状态与财宝</h3>
          <div class="score-player-list">
            ${chars.map((char) => `
              <article class="score-player-card" data-score-player="${char.id}">
                <div class="score-player-top">
                  <label class="score-active-toggle">
                    <input type="checkbox" data-score-active checked>
                    <span>${char.icon} ${char.name.split(" ")[0]}</span>
                  </label>
                  <span class="score-meta">体型 ${char.size} · 生存分 ${char.sv}</span>
                </div>
                <div class="score-status-row">
                  <label>
                    <span>终局状态</span>
                    <select data-score-status>
                      <option value="alive">存活</option>
                      <option value="dead">死亡</option>
                    </select>
                  </label>
                </div>
                <div class="score-treasure-grid">
                  ${scoringTreasureTypes.map((type) => `
                    <label>
                      <span>${type.label}${char.treasureBonus === type.id ? " ×2" : ""}</span>
                      <input type="number" min="0" step="1" value="0" data-score-treasure="${type.id}">
                    </label>
                  `).join("")}
                </div>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="content-card">
          <h3>爱恨公开</h3>
          <div class="score-rel-list">
            ${chars.map((char) => `
              <article class="score-rel-card" data-score-rel="${char.id}">
                <strong>${char.icon} ${char.name.split(" ")[0]}</strong>
                <div class="score-rel-grid">
                  <label>
                    <span>爱</span>
                    <select data-score-love></select>
                  </label>
                  <label>
                    <span>恨</span>
                    <select data-score-hate></select>
                  </label>
                </div>
              </article>
            `).join("")}
          </div>
          <p class="inline-note" data-score-warning>提示：若爱自己就是“自恋”，恨自己就是“反社会”，爱恨同指一人则按“矛盾”处理。</p>
        </section>
        <section class="content-card content-card-full">
          <h3>计分结果</h3>
          <div class="score-results" data-score-results></div>
        </section>
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

function buildRelationOptions(activeChars, selectedValue) {
  return ['<option value="">未公开</option>']
    .concat(
      activeChars.map((char) => `
        <option value="${char.id}"${selectedValue === char.id ? " selected" : ""}>${char.name.split(" ")[0]}</option>
      `)
    )
    .join("");
}

const scoringPlayerSets = {
  4: ["captain", "frenchy", "stephen", "lauren"],
  5: ["captain", "frenchy", "stephen", "lauren", "kid"],
  6: ["captain", "mate", "frenchy", "stephen", "lauren", "kid"],
  7: ["captain", "mate", "frenchy", "stephen", "lauren", "kid", "harter"],
  8: ["captain", "mate", "frenchy", "stephen", "lauren", "kid", "harter", "wong"]
};

function getScoringState(container) {
  const state = {};

  chars.forEach((char) => {
    const playerCard = container.querySelector(`[data-score-player="${char.id}"]`);
    const relCard = container.querySelector(`[data-score-rel="${char.id}"]`);
    const active = playerCard.querySelector("[data-score-active]").checked;

    state[char.id] = {
      ...char,
      active,
      status: playerCard.querySelector("[data-score-status]").value,
      love: relCard.querySelector("[data-score-love]").value,
      hate: relCard.querySelector("[data-score-hate]").value,
      treasures: scoringTreasureTypes.reduce((acc, type) => {
        const input = playerCard.querySelector(`[data-score-treasure="${type.id}"]`);
        const value = Number.parseInt(input.value, 10);
        acc[type.id] = Number.isFinite(value) && value > 0 ? value : 0;
        return acc;
      }, {})
    };
  });

  return state;
}

function buildPlayerCountPreset(playerCount, baseState) {
  const activeIds = new Set(scoringPlayerSets[playerCount] || scoringPlayerSets[6]);

  return chars.reduce((acc, char) => {
    const current = baseState?.[char.id];
    const isActive = activeIds.has(char.id);

    acc[char.id] = {
      active: isActive,
      status: isActive ? current?.status ?? "alive" : "alive",
      love: isActive ? current?.love ?? "" : "",
      hate: isActive ? current?.hate ?? "" : "",
      treasures: scoringTreasureTypes.reduce((treasures, type) => {
        treasures[type.id] = isActive ? current?.treasures?.[type.id] ?? 0 : 0;
        return treasures;
      }, {})
    };

    return acc;
  }, {});
}

function calculateTreasureScore(playerState) {
  return scoringTreasureTypes.reduce((total, type) => {
    const amount = playerState.treasures[type.id] || 0;
    const multiplier = playerState.treasureBonus === type.id ? 2 : 1;
    return total + amount * multiplier;
  }, 0);
}

function calculatePlayerScore(playerState, state) {
  const activePlayers = Object.values(state).filter((item) => item.active);
  const deadPlayers = activePlayers.filter((item) => item.status === "dead");
  const breakdown = [];
  let total = 0;

  const isAlive = playerState.status === "alive";
  const loveTarget = playerState.love ? state[playerState.love] : null;
  const hateTarget = playerState.hate ? state[playerState.hate] : null;
  const isNarcissist = playerState.love === playerState.id;
  const isPsychopath = playerState.hate === playerState.id;
  const isAmbivalent = Boolean(playerState.love) && playerState.love === playerState.hate;

  if (isAlive && !isPsychopath) {
    const selfScore = playerState.sv * (isNarcissist ? 2 : 1);
    total += selfScore;
    breakdown.push(`自己存活：${selfScore}`);
  } else if (isAlive && isPsychopath) {
    breakdown.push("自己存活：0（反社会没有自身生存分）");
  } else {
    breakdown.push("自己存活：0");
  }

  if (isPsychopath) {
    const psychopathScore = deadPlayers
      .filter((item) => item.id !== playerState.id)
      .reduce((sum, item) => sum + item.size, 0);

    total += psychopathScore;
    breakdown.push(`反社会：${psychopathScore}`);
  } else if (isAmbivalent && loveTarget && loveTarget.active) {
    const loveScore = loveTarget.status === "alive" ? loveTarget.sv : 0;
    const hateScore = loveTarget.status === "dead" ? loveTarget.size : 0;
    const ambivalentScore = Math.max(loveScore, hateScore);

    total += ambivalentScore;
    breakdown.push(`矛盾（取高）：${ambivalentScore}`);
  } else {
    if (loveTarget && loveTarget.active) {
      const loveScore = loveTarget.status === "alive" ? loveTarget.sv : 0;
      total += loveScore;
      breakdown.push(`所爱角色：${loveScore}`);
    } else if (playerState.love) {
      breakdown.push("所爱角色：0（该角色未出场）");
    } else {
      breakdown.push("所爱角色：0");
    }

    if (hateTarget && hateTarget.active) {
      const hateScore = hateTarget.status === "dead" ? hateTarget.size : 0;
      total += hateScore;
      breakdown.push(`所恨角色：${hateScore}`);
    } else if (playerState.hate) {
      breakdown.push("所恨角色：0（该角色未出场）");
    } else {
      breakdown.push("所恨角色：0");
    }
  }

  const treasureScore = calculateTreasureScore(playerState);
  total += treasureScore;
  breakdown.push(`财宝：${treasureScore}`);

  return { total, breakdown };
}

function renderScoreResults(container) {
  const resultsHost = container.querySelector("[data-score-results]");
  const warning = container.querySelector("[data-score-warning]");
  const state = getScoringState(container);
  const activePlayers = chars.filter((char) => state[char.id].active);

  if (!activePlayers.length) {
    resultsHost.innerHTML = '<p class="score-empty">至少勾选 1 名出场角色后，计分器才会开始计算。</p>';
    warning.textContent = "提示：先勾选本局实际出场的角色，未出场角色不会参与爱恨、死亡或财宝计算。";
    return;
  }

  const invalidSelfLoop = activePlayers.some((char) => {
    const player = state[char.id];
    return player.love === player.id && player.hate === player.id;
  });

  warning.textContent = invalidSelfLoop
    ? "提示：同一名角色同时“爱自己又恨自己”通常不属于基础规则牌组，结果仅作近似参考。"
    : "提示：若爱自己就是“自恋”，恨自己就是“反社会”，爱恨同指一人则按“矛盾”处理。";

  const ranking = activePlayers
    .map((char) => {
      const score = calculatePlayerScore(state[char.id], state);
      return { char, ...score };
    })
    .sort((a, b) => b.total - a.total || b.char.sv - a.char.sv);

  resultsHost.innerHTML = `
    <div class="score-summary-strip">
      ${ranking.map((item, index) => `
        <article class="score-summary-card${index === 0 ? " is-leading" : ""}">
          <span>${index === 0 ? "当前领先" : `第 ${index + 1} 名`}</span>
          <strong>${item.char.icon} ${item.char.name.split(" ")[0]}</strong>
          <b>${item.total} 分</b>
        </article>
      `).join("")}
    </div>
    <div class="score-breakdown-list">
      ${ranking.map((item) => `
        <article class="score-breakdown-card">
          <div class="score-breakdown-head">
            <div>
              <strong>${item.char.icon} ${item.char.name}</strong>
              <span>总分 ${item.total}</span>
            </div>
            <span>${state[item.char.id].status === "alive" ? "存活" : "死亡"}</span>
          </div>
          <ul class="bullet-list">
            ${item.breakdown.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
}

function syncScoringControls(container) {
  const state = getScoringState(container);
  const activeChars = chars.filter((char) => state[char.id].active);

  chars.forEach((char) => {
    const playerCard = container.querySelector(`[data-score-player="${char.id}"]`);
    const relCard = container.querySelector(`[data-score-rel="${char.id}"]`);
    const loveSelect = relCard.querySelector("[data-score-love]");
    const hateSelect = relCard.querySelector("[data-score-hate]");
    const isActive = state[char.id].active;

    playerCard.classList.toggle("is-inactive", !isActive);
    relCard.classList.toggle("is-inactive", !isActive);

    playerCard.querySelectorAll("select, input[type='number']").forEach((control) => {
      control.disabled = !isActive;
    });

    loveSelect.disabled = !isActive;
    hateSelect.disabled = !isActive;

    if (!isActive) {
      loveSelect.value = "";
      hateSelect.value = "";
    }

    loveSelect.innerHTML = buildRelationOptions(activeChars, state[char.id].love);
    hateSelect.innerHTML = buildRelationOptions(activeChars, state[char.id].hate);
  });
}

function applyScorePreset(container, preset) {
  chars.forEach((char) => {
    const playerCard = container.querySelector(`[data-score-player="${char.id}"]`);
    const relCard = container.querySelector(`[data-score-rel="${char.id}"]`);
    const playerPreset = preset[char.id] || {};

    playerCard.querySelector("[data-score-active]").checked = playerPreset.active ?? true;
    playerCard.querySelector("[data-score-status]").value = playerPreset.status ?? "alive";

    scoringTreasureTypes.forEach((type) => {
      playerCard.querySelector(`[data-score-treasure="${type.id}"]`).value = playerPreset.treasures?.[type.id] ?? 0;
    });

    relCard.querySelector("[data-score-love]").dataset.pendingValue = playerPreset.love ?? "";
    relCard.querySelector("[data-score-hate]").dataset.pendingValue = playerPreset.hate ?? "";
  });

  syncScoringControls(container);

  chars.forEach((char) => {
    const relCard = container.querySelector(`[data-score-rel="${char.id}"]`);
    const loveSelect = relCard.querySelector("[data-score-love]");
    const hateSelect = relCard.querySelector("[data-score-hate]");
    const pendingLove = loveSelect.dataset.pendingValue || "";
    const pendingHate = hateSelect.dataset.pendingValue || "";

    loveSelect.value = pendingLove;
    hateSelect.value = pendingHate;

    delete loveSelect.dataset.pendingValue;
    delete hateSelect.dataset.pendingValue;
  });

  renderScoreResults(container);
}

function bindScoringCalculator() {
  const container = document.querySelector("[data-scoring-calculator]");

  if (!container) return;

  const playerCountSelect = container.querySelector("[data-score-player-count]");

  const examplePreset = {
    captain: { active: true, status: "alive", love: "kid", hate: "mate", treasures: { cash: 5, jewelry: 0, art: 0 } },
    mate: { active: true, status: "dead", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } },
    frenchy: { active: true, status: "alive", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } },
    stephen: { active: true, status: "alive", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } },
    lauren: { active: true, status: "alive", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } },
    kid: { active: true, status: "alive", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } },
    harter: { active: false, status: "alive", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } },
    wong: { active: false, status: "alive", love: "", hate: "", treasures: { cash: 0, jewelry: 0, art: 0 } }
  };

  function applyPlayerCountPreset(playerCount, preserveCurrentState = true) {
    const baseState = preserveCurrentState ? getScoringState(container) : null;
    const preset = buildPlayerCountPreset(playerCount, baseState);
    playerCountSelect.value = String(playerCount);
    applyScorePreset(container, preset);
  }

  applyPlayerCountPreset(Number(playerCountSelect.value), false);

  container.addEventListener("input", (event) => {
    if (!event.target.closest("[data-score-player]")) return;
    syncScoringControls(container);
    renderScoreResults(container);
  });

  container.addEventListener("change", (event) => {
    if (!event.target.closest("[data-score-player], [data-score-rel]")) return;
    syncScoringControls(container);
    renderScoreResults(container);
  });

  playerCountSelect.addEventListener("change", () => {
    applyPlayerCountPreset(Number(playerCountSelect.value));
  });

  container.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-score-action]");

    if (!actionButton) return;

    if (actionButton.dataset.scoreAction === "example") {
      playerCountSelect.value = "6";
      applyScorePreset(container, examplePreset);
    }

    if (actionButton.dataset.scoreAction === "reset") {
      applyPlayerCountPreset(Number(playerCountSelect.value), false);
    }
  });
}

function bindStrategyTabs() {
  const tabButtons = document.querySelectorAll("[data-strategy-tab]");
  const panels = document.querySelectorAll(".strategy-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.strategyTab;

      tabButtons.forEach((tab) => {
        const isActive = tab.dataset.strategyTab === targetId;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach((panel) => {
        const isActive = panel.id === `strategy-panel-${targetId}`;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

function bindSeatHints() {
  const seatButtons = document.querySelectorAll("[data-seat-tip]");
  const seatHint = document.getElementById("seat-hint");

  if (!seatHint) return;

  seatButtons.forEach((button) => {
    button.addEventListener("click", () => {
      seatButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      seatHint.textContent = `${button.dataset.seatName}：${button.dataset.seatTip}`;
    });
  });
}

function bindAccordions() {
  const accordionButtons = document.querySelectorAll(".phase-toggle");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-accordion-item]");
      const panel = card.querySelector(".phase-panel");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll("[data-accordion-item]").forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".phase-toggle").setAttribute("aria-expanded", "false");
        item.querySelector(".phase-panel").hidden = true;
      });

      if (!isOpen) {
        card.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });
}

function bindFaq() {
  const questionButtons = document.querySelectorAll(".faq-question");
  const toolbarButtons = document.querySelectorAll("[data-faq-toggle]");

  function setFaqItemState(card, shouldOpen) {
    const button = card.querySelector(".faq-question");
    const answer = card.querySelector(".faq-answer");
    card.classList.toggle("is-open", shouldOpen);
    button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    answer.hidden = !shouldOpen;
  }

  questionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-faq-item]");
      const isOpen = button.getAttribute("aria-expanded") === "true";
      setFaqItemState(card, !isOpen);
    });
  });

  toolbarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const shouldOpen = button.dataset.faqToggle === "expand";
      document.querySelectorAll("[data-faq-item]").forEach((item) => setFaqItemState(item, shouldOpen));
    });
  });
}

function bindNavHighlight() {
  const links = document.querySelectorAll("[data-nav-link]");
  const sections = [...document.querySelectorAll(".page-section")];

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      const activeId = visibleEntry.target.id;
      links.forEach((link) => link.classList.toggle("is-active", link.dataset.navLink === activeId));
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.2, 0.45, 0.7]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function bindMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");
  const links = document.querySelectorAll("[data-nav-link]");

  if (!toggle || !navList) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    navList.classList.toggle("is-open", !isOpen);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggle.setAttribute("aria-expanded", "false");
        navList.classList.remove("is-open");
      }
    });
  });
}

function bootstrap() {
  document.title = siteMeta.title;
  renderNav(siteMeta.sections);
  renderSections(siteMeta.sections);
  bindCharacterTabs();
  bindScoringCalculator();
  bindStrategyTabs();
  bindSeatHints();
  bindAccordions();
  bindFaq();
  bindNavHighlight();
  bindMobileNav();
}

bootstrap();
