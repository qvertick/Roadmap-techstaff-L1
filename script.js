const BASE_KEY = 'l1_support_progress_v1';
const PROFILE_KEY = 'l1_profile_v1';
const THEME_KEY = 'l1_theme_v1';

const THEMES = {
  neon:   { name:'Неон',    cyan:'#29E8FF', cyanRgb:'41,232,255',  magenta:'#FF3DC6', magentaRgb:'255,61,198' },
  matrix: { name:'Матрица', cyan:'#39FF88', cyanRgb:'57,255,136',  magenta:'#B6FF3D', magentaRgb:'182,255,61' },
  sunset: { name:'Закат',   cyan:'#FFB020', cyanRgb:'255,176,32',  magenta:'#FF4D6D', magentaRgb:'255,77,109' },
  ice:    { name:'Лёд',     cyan:'#5EC8FA', cyanRgb:'94,200,250',  magenta:'#9B6BFF', magentaRgb:'155,107,255' },
};

const DATA = [
  { code:'TECH', title:'Технические знания', categories:[
    { code:'OS-01', title:'Windows 11', items:[
      {id:'win1', text:'Установка, чистая переустановка и базовое восстановление системы'},
      {id:'win2', text:'Учётные записи: локальные, Microsoft-аккаунт, права администратора и UAC'},
      {id:'win3', text:'Диспетчер задач — завершение зависших процессов, автозагрузка, ресурсы'},
      {id:'win4', text:'Структура файловой системы, права NTFS и основы реестра'},
      {id:'win5', text:'Центр обновления Windows и Windows Defender / антивирус'},
      {id:'win6', text:'Точки восстановления системы и резервное копирование (File History)'},
      {id:'win7', text:'Включение/отключение компонентов: Hyper-V, Sandbox, WSL'},
      {id:'win8', text:'Локальные групповые политики (gpedit.msc) — базовые сценарии'},
      {id:'win9', text:'Шифрование диска BitLocker: включение и восстановление доступа'},
    ]},
    { code:'OS-02', title:'Windows Server', items:[
      {id:'srv1', text:'Роли и компоненты сервера через Server Manager'},
      {id:'srv2', text:'Active Directory: пользователи, группы, организационные подразделения (OU)'},
      {id:'srv3', text:'Роли DNS и DHCP на сервере, аренда адресов и записи зон'},
      {id:'srv4', text:'Групповые политики домена (GPO): создание, применение, диагностика'},
      {id:'srv5', text:'Службы удалённых рабочих столов (RDS) и терминальный доступ'},
      {id:'srv6', text:'Резервное копирование Windows Server Backup и восстановление'},
      {id:'srv7', text:'Обновления через WSUS, базовая виртуализация на Hyper-V'},
    ]},
    { code:'OS-03', title:'macOS', items:[
      {id:'mac1', text:'Установка, настройка и миграция данных (Migration Assistant)'},
      {id:'mac2', text:'Учётные записи, Apple ID и FileVault (шифрование диска)'},
      {id:'mac3', text:'Activity Monitor — завершение зависших процессов и нагрузка'},
      {id:'mac4', text:'Time Machine: настройка и восстановление из бэкапа'},
      {id:'mac5', text:'System Settings: сеть, принтеры, учётные записи, безопасность'},
      {id:'mac6', text:'Базовая работа с Terminal и Homebrew'},
      {id:'mac7', text:'Синхронизация iCloud и решение типовых проблем входа'},
    ]},
    { code:'LNX-01', title:'Администрирование Linux', items:[
      {id:'lnx1', text:'Основные дистрибутивы: Ubuntu/Debian, CentOS/RHEL/Fedora — отличия и назначение'},
      {id:'lnx2', text:'Базовые команды bash и навигация по файловой системе (ls, cd, pwd, cp, mv, rm)'},
      {id:'lnx3', text:'Права доступа и владельцы: chmod, chown, chgrp, октальная и символьная запись'},
      {id:'lnx4', text:'Управление пакетами: apt/apt-get (Debian-based), yum/dnf (RHEL-based)'},
      {id:'lnx5', text:'Пользователи и группы: useradd, usermod, passwd, /etc/passwd и /etc/shadow'},
      {id:'lnx6', text:'Управление службами через systemd: systemctl start/stop/enable/status'},
      {id:'lnx7', text:'Просмотр и анализ логов: journalctl, /var/log, tail -f, grep по логам'},
      {id:'lnx8', text:'Подключение по SSH: пароль vs ключи, генерация ключей ssh-keygen'},
      {id:'lnx9', text:'Сетевые утилиты: ip a, ss/netstat, ping, curl, wget, /etc/hosts'},
      {id:'lnx10', text:'Планирование задач: cron и crontab, systemd timers'},
      {id:'lnx11', text:'Права root и sudo: /etc/sudoers, принцип минимальных привилегий'},
      {id:'lnx12', text:'Мониторинг ресурсов: top/htop, df -h, du -sh, free -m'},
      {id:'lnx13', text:'Диски и разделы: lsblk, fdisk/parted, mount/umount, /etc/fstab'},
    ]},
    { code:'NET-01', title:'Сети и интернет', items:[
      {id:'net1', text:'Модель OSI и стек TCP/IP'},
      {id:'net2', text:'IP-адреса, DHCP, DNS, шлюз, маска подсети, статика vs динамика'},
      {id:'net3', text:'Настройка Wi-Fi и проводного подключения (Ethernet)'},
      {id:'net4', text:'Диагностика: ping, tracert/traceroute, ipconfig/ifconfig, nslookup/dig'},
      {id:'net5', text:'Что такое VPN, основные протоколы (OpenVPN, WireGuard, IPSec) и когда он используется'},
      {id:'net6', text:'Базовые понятия о портах, NAT и файрволе'},
      {id:'net7', text:'Типы DNS-записей: A, AAAA, CNAME, MX, TXT'},
      {id:'net8', text:'Основы Wi-Fi безопасности: WPA2/WPA3, гостевые сети'},
      {id:'net9', text:'Проверка скорости и стабильности соединения, диагностика потерь пакетов'},
    ]},
    { code:'SEC-01', title:'Основы информационной безопасности', items:[
      {id:'sec1', text:'Надёжные пароли и менеджеры паролей'},
      {id:'sec2', text:'Двухфакторная аутентификация (2FA/MFA): приложения, SMS, ключи'},
      {id:'sec3', text:'Признаки фишинга и социальной инженерии'},
      {id:'sec4', text:'Важность своевременных обновлений и патчей'},
      {id:'sec5', text:'Принцип минимальных привилегий при выдаче доступов'},
      {id:'sec6', text:'Базовые правила резервного копирования данных (правило 3-2-1)'},
    ]},
    { code:'OFC-01', title:'Офисное ПО и инструменты', items:[
      {id:'ofc1', text:'Настройка браузеров: кэш, куки, расширения, профили'},
      {id:'ofc2', text:'Microsoft 365 и Google Workspace: почта, таблицы, документы'},
      {id:'ofc3', text:'Настройка почтовых клиентов по IMAP/POP3/SMTP'},
      {id:'ofc4', text:'Облачные хранилища: OneDrive, Google Drive, права доступа к файлам'},
      {id:'ofc5', text:'Признаки фишинговых писем и подмены отправителя'},
      {id:'ofc6', text:'Корпоративные мессенджеры: Microsoft Teams, Slack'},
      {id:'ofc7', text:'Базовое понимание лицензий M365/Google Workspace'},
      {id:'ofc8', text:'Общие почтовые ящики и календари, настройка доступа'},
      {id:'ofc9', text:'Работа с PDF: экспорт, объединение, базовая защита паролем'},
    ]},
    { code:'HW-01', title:'Периферия и железо', items:[
      {id:'hw1', text:'Подключение и настройка принтеров, сканеров, МФУ'},
      {id:'hw2', text:'Компоненты ПК: ОЗУ, накопитель, процессор, блок питания'},
      {id:'hw3', text:'Диагностика неполадок монитора, кабелей, периферии'},
      {id:'hw4', text:'Базовая работа с BIOS/UEFI'},
      {id:'hw5', text:'Ноутбуки: батарея, троттлинг и перегрев, замена компонентов'},
      {id:'hw6', text:'Док-станции и настройка нескольких мониторов'},
      {id:'hw7', text:'Базовая настройка мобильных устройств (iOS/Android), MDM-регистрация'},
      {id:'hw8', text:'Учёт техники: инвентаризация, серийные номера, списание'},
    ]},
  ]},
  { code:'SUP', title:'Инструменты и процессы поддержки', categories:[
    { code:'SD-01', title:'Service Desk / Ticketing', items:[
      {id:'sd1', text:'Жизненный цикл заявки: создание, классификация, приоритизация, закрытие'},
      {id:'sd2', text:'Системы: Jira Service Management, Zendesk, ServiceNow, OTRS'},
      {id:'sd3', text:'SLA и приоритеты инцидентов'},
      {id:'sd4', text:'Грамотное оформление и ведение тикета'},
      {id:'sd5', text:'Основы ITIL: разница между инцидентом, запросом и проблемой'},
      {id:'sd6', text:'Эскалация на L2/L3: когда и как правильно передавать заявку'},
      {id:'sd7', text:'Работа с очередями заявок и контроль нарушения SLA'},
      {id:'sd8', text:'Базовые метрики поддержки: время первого ответа, время решения'},
    ]},
    { code:'RA-01', title:'Удаленный доступ', items:[
      {id:'ra1', text:'AnyDesk, TeamViewer, RustDesk'},
      {id:'ra2', text:'RDP (Remote Desktop Protocol)'},
      {id:'ra3', text:'VNC и Chrome Remote Desktop'},
      {id:'ra4', text:'Базовая безопасность удаленных подключений и 2FA'},
      {id:'ra5', text:'Логирование и запись сессий удалённого доступа'},
    ]},
    { code:'KB-01', title:'Базы знаний', items:[
      {id:'kb1', text:'Поиск готовых инструкций и решений во внутренней базе знаний'},
      {id:'kb2', text:'Оформление новой статьи после решения нетипичной проблемы'},
      {id:'kb3', text:'Структурирование статей и использование тегов/категорий'},
      {id:'kb4', text:'Поддержание актуальности статей: ревизии и версии'},
    ]},
  ]},
  { code:'SOFT', title:'Гибкие навыки', categories:[
    { code:'SOFT-01', title:'Коммуникация и стрессоустойчивость', items:[
      {id:'sf1', text:'Эмпатия и стрессоустойчивость с раздраженными клиентами'},
      {id:'sf2', text:'Грамотная устная и письменная речь'},
      {id:'sf3', text:'Умение слушать и задавать уточняющие вопросы'},
      {id:'sf4', text:'Усидчивость и способность быстро обучаться'},
      {id:'sf5', text:'Умение объяснять технические вещи простым языком'},
      {id:'sf6', text:'Тайм-менеджмент и приоритизация нескольких заявок одновременно'},
      {id:'sf7', text:'Работа в команде и передача контекста коллегам'},
      {id:'sf8', text:'Конструктивная обратная связь и работа с критикой'},
      {id:'sf9', text:'Профессиональные границы и деловая этика в переписке'},
    ]},
  ]},
];

let state = {};
let profile = null; // string or null
const usingClaudeStorage = (typeof window.storage !== 'undefined');

/* ---------- storage helpers (Claude storage -> localStorage fallback) ---------- */
async function storageGet(key){
  if(usingClaudeStorage){
    try{ const r = await window.storage.get(key, false); return r && r.value ? r.value : null; }
    catch(e){ /* key not found or unavailable */ }
  }
  try{ return localStorage.getItem(key); }catch(e){ return null; }
}
async function storageSet(key, value){
  if(usingClaudeStorage){
    try{ const r = await window.storage.set(key, value, false); if(r) return true; }
    catch(e){ /* fall through */ }
  }
  try{ localStorage.setItem(key, value); return true; }catch(e){ return false; }
}

function progressKey(){
  return BASE_KEY + '::' + (profile ? profile.toLowerCase() : 'guest');
}

async function loadProgress(){
  const raw = await storageGet(progressKey());
  try{ return raw ? JSON.parse(raw) : {}; }catch(e){ return {}; }
}
async function saveProgress(){
  const ok = await storageSet(progressKey(), JSON.stringify(state));
  setSaveIndicator(ok);
}

function setSaveIndicator(ok){
  const el = document.getElementById('save-indicator');
  const txt = document.getElementById('save-text');
  el.classList.remove('ok','err');
  if(ok){
    el.classList.add('ok');
    const t = new Date();
    txt.textContent = 'сохранено ' + t.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
  }else{
    el.classList.add('err');
    txt.textContent = 'не удалось сохранить';
  }
}

/* ---------- theme ---------- */
function applyTheme(key){
  const t = THEMES[key] || THEMES.neon;
  const r = document.documentElement.style;
  r.setProperty('--cyan', t.cyan);
  r.setProperty('--cyan-rgb', t.cyanRgb);
  r.setProperty('--magenta', t.magenta);
  r.setProperty('--magenta-rgb', t.magentaRgb);
  document.querySelectorAll('.theme-opt').forEach(el => el.classList.toggle('active', el.dataset.key === key));
}

function buildThemePicker(currentKey){
  const list = document.getElementById('theme-list');
  Object.keys(THEMES).forEach(key => {
    const t = THEMES[key];
    const opt = document.createElement('div');
    opt.className = 'theme-opt' + (key === currentKey ? ' active' : '');
    opt.dataset.key = key;
    opt.innerHTML = `<span class="swatch" style="background:${t.cyan}; color:${t.cyan};"></span><span>${t.name}</span>`;
    opt.addEventListener('click', () => {
      applyTheme(key);
      storageSet(THEME_KEY, key);
    });
    list.appendChild(opt);
  });
}

/* ---------- profile / "github" login ---------- */
function renderProfile(){
  const btn = document.getElementById('github-btn');
  const nameEl = document.getElementById('profile-name');
  if(profile){
    btn.style.display = 'none';
    nameEl.style.display = 'flex';
    nameEl.innerHTML = `<span class="profile-avatar">${profile.slice(0,2).toUpperCase()}</span><span>${profile}</span><span class="logout-link" id="logout-link">выйти</span>`;
    document.getElementById('logout-link').addEventListener('click', async () => {
      profile = null;
      await storageSet(PROFILE_KEY, '');
      renderProfile();
      await reloadProgress();
    });
  }else{
    btn.style.display = 'flex';
    nameEl.style.display = 'none';
  }
}

function openModal(){ document.getElementById('modal-overlay').classList.add('open'); document.getElementById('modal-username').focus(); }
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); document.getElementById('modal-username').value=''; }

async function reloadProgress(){
  state = await loadProgress();
  document.querySelectorAll('.item input').forEach(chk => {
    const on = !!state[chk.id.replace('chk-','')];
    chk.checked = on;
    chk.closest('.item').classList.toggle('done', on);
  });
  updateStats();
}

/* ---------- roadmap rendering ---------- */
function safeId(code){ return code.replace(/[^a-zA-Z0-9]/g,''); }
const CHECK_SVG = '<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6"/></svg>';

function buildDOM(){
  const app = document.getElementById('app');
  const dash = document.createElement('div');
  dash.className = 'dash';

  const gaugeCard = document.createElement('div');
  gaugeCard.className = 'panel gauge-card';
  gaugeCard.innerHTML = `
    <div class="panel-label">ОБЩИЙ ПРОГРЕСС</div>
    <svg class="gauge-svg" width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--cyan)"/>
          <stop offset="100%" stop-color="var(--magenta)"/>
        </linearGradient>
      </defs>
      <circle cx="70" cy="70" r="54" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
      <circle id="gauge-arc" cx="70" cy="70" r="54" fill="none" stroke="url(#neonGrad)" stroke-width="10"
        stroke-linecap="round" stroke-dasharray="339.3" stroke-dashoffset="339.3" transform="rotate(-90 70 70)"/>
      <text id="gauge-num" x="70" y="76" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" font-weight="600" fill="#EAF1FA">0%</text>
    </svg>
    <div class="gauge-pct"><b id="gauge-count">0</b> / <span id="gauge-total">0</span> пунктов</div>
  `;

  const metersCard = document.createElement('div');
  metersCard.className = 'panel meters';
  metersCard.innerHTML = `<div class="panel-label" style="padding:0 0 6px;">ПРОГРЕСС ПО НАПРАВЛЕНИЯМ</div>`;
  DATA.forEach(cluster => {
    const row = document.createElement('div');
    row.innerHTML = `
      <div class="meter-top">
        <span><span class="meter-name">${cluster.title}</span><span class="meter-code">${cluster.code}</span></span>
        <span class="meter-num" id="mnum-${cluster.code}">0/0</span>
      </div>
      <div class="meter-track"><div class="meter-fill" id="mfill-${cluster.code}"></div></div>
    `;
    metersCard.appendChild(row);
  });

  dash.appendChild(gaugeCard);
  dash.appendChild(metersCard);
  app.appendChild(dash);

  DATA.forEach(cluster => {
    const clusterEl = document.createElement('div');
    clusterEl.className = 'cluster';
    clusterEl.id = `cluster-${cluster.code}`;
    clusterEl.innerHTML = `
      <div class="spine"><div class="spine-node"></div><div class="spine-line"></div></div>
      <div class="cluster-body">
        <div class="cluster-head">
          <h2 class="cluster-title">${cluster.title}<span class="cluster-code">${cluster.code}</span></h2>
          <span class="cluster-frac" id="cfrac-${cluster.code}"><b>0</b>/0 выполнено</span>
        </div>
        <div class="cat-grid" id="catgrid-${cluster.code}"></div>
      </div>
    `;
    app.appendChild(clusterEl);

    const grid = clusterEl.querySelector(`#catgrid-${cluster.code}`);
    cluster.categories.forEach(cat => {
      const sid = safeId(cat.code);
      const catEl = document.createElement('div');
      catEl.className = 'panel cat-panel';
      catEl.innerHTML = `
        <div class="cat-head"><span class="cat-title">${cat.title}</span><span class="cat-code">${cat.code}</span></div>
        <div class="cat-track"><div class="cat-fill" id="catfill-${sid}"></div></div>
        <div class="cat-count" id="catcount-${sid}">0 / ${cat.items.length}</div>
        <ul class="items"></ul>
      `;
      const ul = catEl.querySelector('.items');
      cat.items.forEach(it => {
        const li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = `
          <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;width:100%;">
            <input type="checkbox" class="chk-input" id="chk-${it.id}">
            <span class="chk-box">${CHECK_SVG}</span>
            <span class="txt">${it.text}</span>
          </label>
        `;
        const checkbox = li.querySelector('input');
        checkbox.addEventListener('change', () => {
          state[it.id] = checkbox.checked;
          li.classList.toggle('done', checkbox.checked);
          saveProgress();
          updateStats();
        });
        ul.appendChild(li);
      });
      grid.appendChild(catEl);
    });
  });

  const footer = document.createElement('footer');
  footer.className = 'controls';
  footer.innerHTML = `
    <p>Прогресс сохраняется автоматически и подгрузится при следующем открытии этой страницы.</p>
    <div class="controls-actions">
      <button class="copy-btn" id="copy-btn">Скопировать сводку</button>
      <button class="print-btn" id="print-btn">Печать / PDF</button>
      <button class="reset-btn" id="reset-btn">Сбросить прогресс</button>
    </div>
  `;
  app.appendChild(footer);
  document.getElementById('reset-btn').addEventListener('click', () => {
    if(confirm('Сбросить весь прогресс по роадмапу?')){
      state = {};
      document.querySelectorAll('.item input').forEach(c => { c.checked = false; c.closest('.item').classList.remove('done'); });
      saveProgress();
      updateStats();
    }
  });
  document.getElementById('print-btn').addEventListener('click', () => window.print());
  document.getElementById('copy-btn').addEventListener('click', async () => {
    const btn = document.getElementById('copy-btn');
    const summary = buildSummaryText();
    try{
      await navigator.clipboard.writeText(summary);
    }catch(e){
      // fallback: select a temporary textarea
      const ta = document.createElement('textarea');
      ta.value = summary; document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); }catch(e2){}
      document.body.removeChild(ta);
    }
    btn.textContent = 'Скопировано ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Скопировать сводку'; btn.classList.remove('copied'); }, 2000);
  });

  const legal = document.createElement('div');
  legal.className = 'legal-footer';
  legal.innerHTML = `
    <div>© ${new Date().getFullYear()} Testaff L1 Roadmap. Материал предоставлен в учебных целях.</div>
    <div class="legal-links"><a href="#">Условия использования</a><a href="#">Конфиденциальность</a><a href="#">Лицензия MIT</a></div>
  `;
  app.appendChild(legal);
}

function computeStats(){
  let overallDone = 0, overallTotal = 0;
  const clusterStats = {};
  DATA.forEach(cluster => {
    let cDone = 0, cTotal = 0;
    const cats = {};
    cluster.categories.forEach(cat => {
      let done = 0;
      cat.items.forEach(it => { cTotal++; if(state[it.id]){ done++; cDone++; } });
      cats[cat.code] = { done, total: cat.items.length };
    });
    clusterStats[cluster.code] = { done: cDone, total: cTotal, cats };
    overallDone += cDone; overallTotal += cTotal;
  });
  return { overallDone, overallTotal, clusterStats };
}

function updateStats(){
  const { overallDone, overallTotal, clusterStats } = computeStats();
  const pct = overallTotal ? Math.round((overallDone/overallTotal)*100) : 0;
  const circumference = 339.3;
  document.getElementById('gauge-arc').setAttribute('stroke-dashoffset', circumference * (1 - pct/100));
  document.getElementById('gauge-num').textContent = pct + '%';
  document.getElementById('gauge-count').textContent = overallDone;
  document.getElementById('gauge-total').textContent = overallTotal;

  DATA.forEach(cluster => {
    const cs = clusterStats[cluster.code];
    const cpct = cs.total ? Math.round((cs.done/cs.total)*100) : 0;
    document.getElementById(`mfill-${cluster.code}`).style.width = cpct + '%';
    document.getElementById(`mnum-${cluster.code}`).textContent = `${cs.done}/${cs.total}`;
    document.getElementById(`cfrac-${cluster.code}`).innerHTML = `<b>${cs.done}</b>/${cs.total} выполнено`;
    cluster.categories.forEach(cat => {
      const sid = safeId(cat.code);
      const c = cs.cats[cat.code];
      const catPct = c.total ? Math.round((c.done/c.total)*100) : 0;
      const fill = document.getElementById(`catfill-${sid}`);
      if(fill) fill.style.width = catPct + '%';
      const count = document.getElementById(`catcount-${sid}`);
      if(count) count.textContent = `${c.done} / ${c.total}`;
    });
  });
}

function applyStateToCheckboxes(){
  Object.keys(state).forEach(id => {
    const chk = document.getElementById(`chk-${id}`);
    if(chk && state[id]){ chk.checked = true; chk.closest('.item').classList.add('done'); }
  });
}

/* ---------- summary text (for copy-to-clipboard) ---------- */
function buildSummaryText(){
  const { overallDone, overallTotal, clusterStats } = computeStats();
  const pct = overallTotal ? Math.round((overallDone/overallTotal)*100) : 0;
  const lines = [];
  lines.push(`Testaff L1 · Roadmap — сводка прогресса${profile ? ' (' + profile + ')' : ''}`);
  lines.push(`Итого: ${overallDone}/${overallTotal} (${pct}%)`);
  lines.push('');
  DATA.forEach(cluster => {
    const cs = clusterStats[cluster.code];
    lines.push(`${cluster.title} [${cluster.code}]: ${cs.done}/${cs.total}`);
    cluster.categories.forEach(cat => {
      const c = cs.cats[cat.code];
      lines.push(`  · ${cat.title}: ${c.done}/${c.total}`);
    });
  });
  return lines.join('\n');
}

/* ---------- search / filter (lightweight, no impact on stats) ---------- */
function initSearch(){
  const input = document.getElementById('roadmap-search');
  if(!input) return;
  input.addEventListener('input', () => applyFilter(input.value.trim().toLowerCase()));
  window.addEventListener('keydown', (e) => {
    if(e.key === '/' && document.activeElement !== input && !e.metaKey && !e.ctrlKey){
      const tag = (document.activeElement && document.activeElement.tagName) || '';
      if(tag !== 'INPUT' && tag !== 'TEXTAREA'){
        e.preventDefault();
        input.focus();
      }
    }
  });
}

function applyFilter(query){
  const noResults = document.getElementById('no-results');
  let anyVisible = false;

  document.querySelectorAll('.cluster').forEach(clusterEl => {
    let clusterHasVisible = false;
    clusterEl.querySelectorAll('.cat-panel').forEach(catEl => {
      let catHasVisible = false;
      catEl.querySelectorAll('.item').forEach(itemEl => {
        const txt = itemEl.querySelector('.txt').textContent.toLowerCase();
        const match = !query || txt.includes(query);
        itemEl.classList.toggle('filtered-hide', !match);
        if(match) catHasVisible = true;
      });
      catEl.classList.toggle('filtered-hide', !catHasVisible);
      if(catHasVisible) clusterHasVisible = true;
    });
    clusterEl.classList.toggle('filtered-hide', !clusterHasVisible);
    if(clusterHasVisible) anyVisible = true;
  });

  if(noResults) noResults.classList.toggle('show', !anyVisible && !!query);
}

/* ---------- quick nav chips ---------- */
function initQuickNav(){
  document.querySelectorAll('.quick-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById('cluster-' + btn.dataset.target);
      if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });
}

/* ---------- tip of the day (dismissible, not annoying: once per day) ---------- */
const TIPS = [
  'Перед сбросом настроек ОС всегда уточняй у пользователя — сохранены ли важные данные и учётки.',
  'При заведении тикета фиксируй точные шаги воспроизведения проблемы — это экономит время L2/L3.',
  'ping и tracert — первое, что стоит проверить при жалобе «не работает интернет».',
  'Если пользователь раздражён — сначала признай неудобство, потом переходи к диагностике.',
  'Прежде чем удалённо подключаться, объясни пользователю, что именно ты будешь делать.',
  'Проверь базу знаний перед эскалацией — вдруг похожий кейс уже кто-то решил.',
  'После решения нетипичной проблемы — оформи короткую статью в базу знаний для коллег.',
  'Fishing-письма часто выдают несовпадающий домен отправителя — научись проверять его быстро.',
  'В Linux перед удалением файлов через rm -rf трижды проверь путь — восстановить их будет негде.',
  'На Windows Server не применяй новую групповую политику сразу на всех — сначала протестируй на одной OU.',
];
const TIP_DISMISS_KEY = 'l1_tip_dismissed_v1';

async function initTip(){
  const card = document.getElementById('tip-card');
  if(!card) return;
  const today = new Date().toISOString().slice(0,10);
  const dismissedOn = await storageGet(TIP_DISMISS_KEY);
  if(dismissedOn === today){ card.remove(); return; }

  const dayIndex = Math.floor(Date.now() / 86400000) % TIPS.length;
  document.getElementById('tip-text').textContent = TIPS[dayIndex];
  card.style.display = 'flex';

  document.getElementById('tip-close').addEventListener('click', async () => {
    card.remove();
    await storageSet(TIP_DISMISS_KEY, today);
  });
}

/* ---------- spotlight (mouse only, not on touch) ---------- */
function initSpotlight(){
  if(!window.matchMedia('(pointer: fine)').matches) return;
  const spot = document.getElementById('spotlight');
  window.addEventListener('mousemove', (e) => {
    spot.style.opacity = '1';
    spot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  window.addEventListener('mouseleave', () => { spot.style.opacity = '0'; });
}

/* ---------- sidebar toggle ---------- */
function initSidebar(){
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('sidebar-overlay');
  toggle.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
  overlay.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
}

/* ---------- login modal wiring ---------- */
function initLogin(){
  document.getElementById('github-btn').addEventListener('click', openModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => { if(e.target.id === 'modal-overlay') closeModal(); });
  document.getElementById('modal-confirm').addEventListener('click', async () => {
    const val = document.getElementById('modal-username').value.trim();
    if(!val) return;
    profile = val;
    await storageSet(PROFILE_KEY, val);
    renderProfile();
    closeModal();
    await reloadProgress();
  });
  document.getElementById('modal-username').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') document.getElementById('modal-confirm').click();
  });
}

(async function init(){
  const savedProfile = await storageGet(PROFILE_KEY);
  profile = savedProfile || null;

  const savedTheme = await storageGet(THEME_KEY);
  buildThemePicker(savedTheme && THEMES[savedTheme] ? savedTheme : 'neon');
  applyTheme(savedTheme && THEMES[savedTheme] ? savedTheme : 'neon');

  renderProfile();
  state = await loadProgress();

  document.getElementById('loading').remove();
  buildDOM();
  applyStateToCheckboxes();
  updateStats();
  initSpotlight();
  initSidebar();
  initLogin();
  initSearch();
  initQuickNav();
  initTip();
})();
