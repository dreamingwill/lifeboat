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

function bootstrap() {
  document.title = siteMeta.title;
  renderNav(siteMeta.sections);
  renderSections(siteMeta.sections);
}

bootstrap();
