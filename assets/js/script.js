const DEFAULTS = [
  {
    group: 'Sosyal Medya', icon: '◈', items: [
      { name: 'Instagram', host: 'instagram.com', url: 'https://www.instagram.com', favicon: 'https://www.instagram.com/favicon.ico' },
      { name: 'X / Twitter', host: 'x.com', url: 'https://x.com', favicon: 'https://abs.twimg.com/favicons/twitter.3.ico' },
      { name: 'Facebook', host: 'facebook.com', url: 'https://www.facebook.com', favicon: 'https://www.facebook.com/favicon.ico' },
      { name: 'TikTok', host: 'tiktok.com', url: 'https://www.tiktok.com', favicon: 'https://www.tiktok.com/favicon.ico' },
      { name: 'LinkedIn', host: 'linkedin.com', url: 'https://www.linkedin.com', favicon: 'https://www.linkedin.com/favicon.ico' },
      { name: 'YouTube', host: 'youtube.com', url: 'https://www.youtube.com', favicon: 'https://www.youtube.com/favicon.ico' },
      { name: 'Reddit', host: 'reddit.com', url: 'https://www.reddit.com', favicon: 'https://www.reddit.com/favicon.ico' },
      { name: 'Twitch', host: 'twitch.tv', url: 'https://www.twitch.tv', favicon: 'https://www.twitch.tv/favicon.ico' },
    ]
  },
  {
    group: 'AI Servisleri', icon: '◆', items: [
      { name: 'Claude', host: 'claude.ai', url: 'https://claude.ai', favicon: 'https://claude.ai/favicon.ico' },
      { name: 'ChatGPT', host: 'chat.openai.com', url: 'https://chat.openai.com', favicon: 'https://chat.openai.com/favicon.ico' },
      { name: 'Gemini', host: 'gemini.google.com', url: 'https://gemini.google.com', favicon: 'https://www.google.com/favicon.ico' },
      { name: 'Perplexity', host: 'perplexity.ai', url: 'https://www.perplexity.ai', favicon: 'https://www.perplexity.ai/favicon.ico' },
      { name: 'Midjourney', host: 'midjourney.com', url: 'https://www.midjourney.com', favicon: 'https://www.midjourney.com/favicon.ico' },
      { name: 'Hugging Face', host: 'huggingface.co', url: 'https://huggingface.co', favicon: 'https://huggingface.co/favicon.ico' },
      { name: 'Mistral', host: 'mistral.ai', url: 'https://mistral.ai', favicon: 'https://mistral.ai/favicon.ico' },
    ]
  },
  {
    group: 'İletişim', icon: '◉', items: [
      { name: 'WhatsApp', host: 'whatsapp.com', url: 'https://web.whatsapp.com', favicon: 'https://web.whatsapp.com/favicon.ico' },
      { name: 'Telegram', host: 'telegram.org', url: 'https://web.telegram.org', favicon: 'https://web.telegram.org/favicon.ico' },
      { name: 'Discord', host: 'discord.com', url: 'https://discord.com', favicon: 'https://discord.com/favicon.ico' },
      { name: 'Slack', host: 'slack.com', url: 'https://slack.com', favicon: 'https://slack.com/favicon.ico' },
      { name: 'Zoom', host: 'zoom.us', url: 'https://zoom.us', favicon: 'https://zoom.us/favicon.ico' },
      { name: 'Signal', host: 'signal.org', url: 'https://signal.org', favicon: 'https://signal.org/favicon.ico' },
    ]
  },
  {
    group: 'Arama & Haber', icon: '◎', items: [
      { name: 'Google', host: 'google.com', url: 'https://www.google.com', favicon: 'https://www.google.com/favicon.ico' },
      { name: 'DuckDuckGo', host: 'duckduckgo.com', url: 'https://duckduckgo.com', favicon: 'https://duckduckgo.com/favicon.ico' },
      { name: 'Wikipedia', host: 'wikipedia.org', url: 'https://en.wikipedia.org', favicon: 'https://en.wikipedia.org/favicon.ico' },
      { name: 'BBC News', host: 'bbc.com', url: 'https://www.bbc.com', favicon: 'https://www.bbc.com/favicon.ico' },
      { name: 'Reuters', host: 'reuters.com', url: 'https://www.reuters.com', favicon: 'https://www.reuters.com/favicon.ico' },
    ]
  },
  {
    group: 'Geliştirici', icon: '◇', items: [
      { name: 'GitHub', host: 'github.com', url: 'https://github.com', favicon: 'https://github.com/favicon.ico' },
      { name: 'GitLab', host: 'gitlab.com', url: 'https://gitlab.com', favicon: 'https://gitlab.com/favicon.ico' },
      { name: 'Stack Overflow', host: 'stackoverflow.com', url: 'https://stackoverflow.com', favicon: 'https://stackoverflow.com/favicon.ico' },
      { name: 'npm', host: 'npmjs.com', url: 'https://www.npmjs.com', favicon: 'https://www.npmjs.com/favicon.ico' },
      { name: 'Cloudflare', host: 'cloudflare.com', url: 'https://www.cloudflare.com', favicon: 'https://www.cloudflare.com/favicon.ico' },
      { name: 'Vercel', host: 'vercel.com', url: 'https://vercel.com', favicon: 'https://vercel.com/favicon.ico' },
    ]
  },
  {
    group: 'Medya & Depolama', icon: '◐', items: [
      { name: 'Spotify', host: 'spotify.com', url: 'https://open.spotify.com', favicon: 'https://open.spotify.com/favicon.ico' },
      { name: 'Netflix', host: 'netflix.com', url: 'https://www.netflix.com', favicon: 'https://www.netflix.com/favicon.ico' },
      { name: 'Google Drive', host: 'drive.google.com', url: 'https://drive.google.com', favicon: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png' },
      { name: 'Dropbox', host: 'dropbox.com', url: 'https://www.dropbox.com', favicon: 'https://www.dropbox.com/favicon.ico' },
      { name: 'OneDrive', host: 'onedrive.live.com', url: 'https://onedrive.live.com', favicon: 'https://onedrive.live.com/favicon.ico' },
    ]
  },
];

const PACKS = [
  { id: 'social-media', name: 'Sosyal Medya', icon: '◈', tags: ['social', 'media'], count: 10, url: 'https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/social-media.json' },
  { id: 'ai-services', name: 'AI Servisleri', icon: '◆', tags: ['ai', 'llm'], count: 11, url: 'https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/ai-services.json' },
  { id: 'communication', name: 'İletişim Araçları', icon: '◉', tags: ['messaging'], count: 10, url: 'https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/communication.json' },
  { id: 'developer-tools', name: 'Geliştirici', icon: '◇', tags: ['git', 'devops'], count: 11, url: 'https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/developer-tools.json' },
  { id: 'news-search', name: 'Arama & Haber', icon: '◎', tags: ['news', 'search'], count: 9, url: 'https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/news-search.json' },
  { id: 'media-storage', name: 'Medya & Depolama', icon: '◐', tags: ['media', 'storage'], count: 8, url: 'https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/media-storage.json' },
];

let SVCS = DEFAULTS.map(g => ({ ...g, items: [...g.items] }));
let results = {}, activeRules = null, vF = 'all', vG = 'cat';
const loadedIds = new Set();
const slug = s => s.replace(/[^a-z0-9]/gi, '_');

/* IP */
async function getPublicIP() {
  try {
    const d = await (await fetch('https://api.ipify.org?format=json')).json();
    const el = document.getElementById('pubIp');
    el.textContent = d.ip;
    el.classList.remove('loading');
    document.getElementById('pubSub').textContent = i18next.t('ip.public_sub');
  } catch {
    const el = document.getElementById('pubIp');
    el.textContent = i18next.t('status.failed');
    el.classList.remove('loading');
  }
}

function getLocalIP() {
  try {
    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    pc.createOffer().then(o => pc.setLocalDescription(o));
    pc.onicecandidate = e => {
      if (!e?.candidate) return;
      const m = /([0-9]{1,3}(?:\.[0-9]{1,3}){3})/.exec(e.candidate.candidate);
      if (m && m[1] !== '0.0.0.0' && !m[1].startsWith('192.0.2')) {
        const el = document.getElementById('localIp');
        el.textContent = m[1];
        el.classList.remove('loading');
        document.getElementById('localSub').textContent = i18next.t('ip.local_sub');
        pc.close();
      }
    };
    setTimeout(() => {
      const el = document.getElementById('localIp');
      if (el.classList.contains('loading')) {
        el.textContent = i18next.t('status.failed_to_detect');
        el.classList.remove('loading');
      }
    }, 4000);
  } catch {
    const el = document.getElementById('localIp');
    el.textContent = i18next.t('status.no_permission');
    el.classList.remove('loading');
  }
}

/* Measurement */
function doFetch(url) {
  return new Promise(res => {
    const t = performance.now(), ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 8000);
    fetch(url, { method: 'HEAD', mode: 'no-cors', signal: ctrl.signal, cache: 'no-store' }).then(() => {
      clearTimeout(timer);
      res({ ms: Math.round(performance.now() - t), ok: true });
    }).catch(() => {
      const ms = Math.round(performance.now() - t);
      res({ ms: ms < 80 ? null : ms, ok: false });
    });
  });
}

function doImg(fav) {
  return new Promise(res => {
    const img = new Image(), t = performance.now();
    const timer = setTimeout(() => { img.src = ''; res({ ms: null, ok: false }); }, 7000);
    const done = () => { clearTimeout(timer); const ms = Math.round(performance.now() - t); res({ ms, ok: ms > 8 }); };
    img.onload = img.onerror = done;
    img.src = fav + '?_=' + Date.now();
  });
}

function isLocalAddress(url) {
  try {
    const h = new URL(url).hostname;
    return h === 'localhost' || h === '127.0.0.1' || h.endsWith('.local') ||
      /^192\.168\./.test(h) || /^10\./.test(h) || /^172\.(1[6-9]|2[0-9]|3[01])\./.test(h);
  } catch { return false; }
}

async function checkOne(svc) {
  const k = slug(svc.name);
  markCheck(k);
  const [fr, ir] = await Promise.all([doFetch(svc.url), doImg(svc.favicon)]);
  const fOk = fr.ok && fr.ms !== null, iOk = ir.ok && ir.ms !== null && ir.ms > 8, reach = fOk || iOk,
    best = fOk ? fr.ms : (iOk ? ir.ms : null),
    state = !reach ? 'block' : best < 200 ? 'ok' : 'slow';

  let errorKey = null;
  if (!reach && isLocalAddress(svc.url)) {
    errorKey = 'pna_error';
  }

  return { k, state, ms: best, fetchMs: fr.ms, fetchOk: fOk, imgMs: ir.ms, imgOk: iOk, name: svc.name, group: svc._group || '—', errorKey };
}

/* DOM */
function markCheck(k) {
  const d = document.getElementById('dot_' + k);
  if (d) d.className = 'dot checking';
  const b = document.getElementById('badge_' + k);
  if (b) b.textContent = i18next.t('status.testing');
  const p = document.getElementById('p2_' + k);
  if (p) { p.textContent = '…'; p.className = 'p2'; }
}

function applyRow(r) {
  const dot = document.getElementById('dot_' + r.k), bar = document.getElementById('bar_' + r.k),
    p1 = document.getElementById('p1_' + r.k), p2 = document.getElementById('p2_' + r.k),
    badge = document.getElementById('badge_' + r.k), row = document.getElementById('row_' + r.k);
  if (!dot) return;
  dot.className = 'dot ' + r.state;
  bar.className = 'bi2 ' + r.state;
  bar.style.width = r.state === 'ok' ? Math.max(8, 100 - (r.ms || 0) / 3) + '%' : r.state === 'slow' ? Math.max(8, 55 - (r.ms || 0) / 20) + '%' : '0%';
  const fs = !r.fetchOk ? 'block' : r.fetchMs < 200 ? 'ok' : 'slow';
  p1.className = 'p1 ' + fs;
  p1.textContent = r.fetchOk ? r.fetchMs + ' ms' : '—';
  if (p2) {
    const is = !r.imgOk ? 'block' : r.imgMs < 200 ? 'ok' : 'slow';
    p2.className = 'p2 ' + is;
    p2.textContent = r.imgOk ? r.imgMs + ' ms' : '—';
  }
  badge.className = 'sb ' + (r.errorKey ? 'warn' : r.state);
  badge.textContent = r.errorKey ? i18next.t(`status.${r.errorKey}`) : i18next.t(`status.${r.state}`);
  if (row) row.className = 'sr r-' + r.state;
  results[r.k] = r;
}

function makeRow(svc) {
  const k = slug(svc.name), d = document.createElement('div');
  d.className = 'sr';
  d.id = 'row_' + k;
  d.innerHTML = `<div class="snw"><div class="dot waiting" id="dot_${k}"></div><div><div class="sn">${svc.name}</div><div class="sh">${svc.host}</div></div></div><div class="cb"><div class="bo"><div class="bi2" id="bar_${k}"></div></div></div><div class="cp1"><div class="p1" id="p1_${k}">—</div><div class="pl">fetch</div></div><div class="cp2"><div class="p2" id="p2_${k}">—</div><div class="pl" style="color:rgba(56,189,248,.4)">img</div></div><div><div class="sb" id="badge_${k}">${i18next.t('status.waiting')}</div></div>`;
  return d;
}

function makeHdr() {
  const d = document.createElement('div');
  d.className = 'chdr';
  d.innerHTML = `<div class="ch" style="text-align:left">${i18next.t('table.service')}</div><div class="ch cb">${i18next.t('table.latency')}</div><div class="ch cp1">HTTP Fetch</div><div class="ch cp2" style="color:rgba(56,189,248,.5)">Image Ping</div><div class="ch">${i18next.t('table.status')}</div>`;
  return d;
}

function makeGroup(title, icon, gid) {
  const g = document.createElement('div');
  g.className = 'group';
  g.innerHTML = `<div class="gh"><div class="gi">${icon}</div><div class="gt">${title}</div><div class="gs" id="gs_${gid}"></div></div>`;
  const l = document.createElement('div');
  l.className = 'sl';
  l.id = 'list_' + gid;
  l.appendChild(makeHdr());
  g.appendChild(l);
  return g;
}

/* View */
function updSum() {
  let ok = 0, slow = 0, block = 0, tot = 0, cnt = 0;
  Object.values(results).forEach(r => {
    if (r.state === 'ok') { ok++; if (r.ms) { tot += r.ms; cnt++; } }
    if (r.state === 'slow') { slow++; if (r.ms) { tot += r.ms; cnt++; } }
    if (r.state === 'block') block++;
  });
  document.getElementById('cntOk').textContent = ok;
  document.getElementById('cntSlow').textContent = slow;
  document.getElementById('cntBlock').textContent = block;
  document.getElementById('avgMs').textContent = cnt > 0 ? Math.round(tot / cnt) : '—';
}

function updGS(g) {
  const gsId = slug(g.group);
  const el = document.getElementById('gs_' + gsId);
  if (!el) return;
  let ok = 0, block = 0;
  g.items.forEach(s => {
    const r = results[slug(s.name)];
    if (!r) return;
    r.state === 'block' ? block++ : ok++;
  });
  const total = g.items.length, done = ok + block;
  if (!done) { el.textContent = ''; return; }
  el.textContent = i18next.t('status.accessible_count', { ok, total });
  el.className = 'gs' + (block > 0 ? ' bad' : done === total ? ' all' : '');
}

function sorted() {
  const s = document.getElementById('sortSel').value, all = SVCS.flatMap(g => g.items.map(i => ({ ...i, _group: g.group })));
  return all.sort((a, b) => {
    if (s === 'default') return 0;
    if (s === 'name-asc') return a.name.localeCompare(b.name, i18next.language === 'tr' ? 'tr' : 'en');
    if (s === 'name-desc') return b.name.localeCompare(a.name, i18next.language === 'tr' ? 'tr' : 'en');
    const ra = results[slug(a.name)], rb = results[slug(b.name)],
      ma = ra?.ms ?? (s === 'ping-asc' ? 999999 : 0),
      mb = rb?.ms ?? (s === 'ping-asc' ? 999999 : 0);
    return s === 'ping-asc' ? ma - mb : mb - ma;
  });
}

function pf(r) { return vF === 'all' || r?.state === vF; }
function setFilter(f) {
  vF = f;['all', 'ok', 'slow', 'block'].forEach(x => {
    const b = document.getElementById('f-' + x);
    b.className = 'chip' + (x === f ? (x === 'all' ? ' a' : ' a-' + (x === 'ok' ? 'gn' : x === 'slow' ? 'am' : 'rd')) : '');
  });
  applyView();
}

function setGroup(g) {
  vG = g;['cat', 'status', 'flat'].forEach(x => {
    document.getElementById('g-' + x).className = 'chip' + (x === g ? ' a' : '');
  });
  applyView();
}

function applyView() {
  const c = document.getElementById('gc'); c.innerHTML = ''; const items = sorted();
  if (vG === 'flat') {
    const box = makeGroup(i18next.t('group.all_services'), '◉', 'flat');
    c.appendChild(box);
    const l = document.getElementById('list_flat');
    let vis = 0; items.forEach(svc => {
      const r = results[slug(svc.name)], row = makeRow(svc);
      if (!pf(r)) row.classList.add('hidden'); else vis++;
      l.appendChild(row);
      if (r) applyRow(r);
    });
    const el = document.getElementById('gs_flat');
    if (el && vis) el.textContent = i18next.t('status.service_count', { count: vis });
  } else if (vG === 'status') {
    [{ st: 'ok', t: i18next.t('status.ok'), i: '◈' }, { st: 'slow', t: i18next.t('status.slow'), i: '◎' }, { st: 'block', t: i18next.t('status.block'), i: '◆' }, { st: 'pending', t: i18next.t('status.waiting'), i: '◇' }].forEach(sg => {
      const m = items.filter(s => sg.st === 'pending' ? !results[slug(s.name)] : results[slug(s.name)]?.state === sg.st);
      if (!m.length) return;
      if (vF !== 'all' && sg.st !== vF && sg.st !== 'pending') return;
      const gid = 'sg_' + sg.st, box = makeGroup(`${sg.t} — ${m.length}`, sg.i, gid);
      c.appendChild(box);
      m.forEach(svc => {
        const row = makeRow(svc);
        document.getElementById('list_' + gid).appendChild(row);
        const r = results[slug(svc.name)];
        if (r) applyRow(r);
      });
    });
  } else {
    SVCS.forEach(g => {
      const gn = i18next.t(`group.${slug(g.group)}`, { defaultValue: g.group });
      const gk = slug(g.group), box = makeGroup(gn, g.icon, gk);
      c.appendChild(box);
      const l = document.getElementById('list_' + gk),
        vis = items.filter(s => s._group === g.group && pf(results[slug(s.name)]));
      if (!vis.length) {
        const e = document.createElement('div');
        e.className = 'ge';
        e.textContent = i18next.t('status.no_service_in_filter');
        l.appendChild(e);
      } else vis.forEach(svc => {
        const row = makeRow(svc);
        l.appendChild(row);
        const r = results[slug(svc.name)];
        if (r) applyRow(r);
      });
      updGS(g);
    });
  }
}

/* Run All */
async function runAll() {
  const btn = document.getElementById('runBtn'), prog = document.getElementById('progBar'),
    txt = document.getElementById('progTxt'), sum = document.getElementById('sumRow');
  btn.classList.add('busy');
  btn.disabled = true;
  results = {};
  sum.style.display = 'none';
  applyView();
  const all = SVCS.flatMap(g => g.items.map(s => ({ ...s, _group: g.group })));
  let done = 0;
  prog.style.width = '0%';
  txt.textContent = i18next.t('status.test_starting', { count: all.length });
  const queue = [...all];
  async function worker() {
    while (queue.length > 0) {
      const svc = queue.shift(), r = await checkOne(svc);
      results[r.k] = r;
      applyRow(r);
      const g = SVCS.find(g => g.group === svc._group);
      if (g) updGS(g);
      done++;
      updSum();
      prog.style.width = Math.round(done / all.length * 100) + '%';
      txt.textContent = done < all.length ? i18next.t('status.testing_count', { done, total: all.length }) : i18next.t('status.completed_count', { count: all.length });
    }
  }
  await Promise.all(Array.from({ length: 8 }, () => worker()));
  btn.classList.remove('busy');
  btn.disabled = false;
  sum.style.display = 'flex';
  document.getElementById('lastRun').textContent = new Date().toLocaleTimeString(i18next.language === 'tr' ? 'tr-TR' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  applyView();
}

/* Custom */
async function runCustom() {
  let raw = document.getElementById('cqInp').value.trim();
  if (!raw) return;
  if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
  let host;
  try { host = new URL(raw).hostname; } catch { host = raw; }
  const btn = document.getElementById('cqBtn');
  btn.classList.add('busy');
  const r = await checkOne({ name: host, host, url: raw, favicon: raw.replace(/\/$/, '') + '/favicon.ico', _group: 'Special' });
  btn.classList.remove('busy');
  const row = document.createElement('div');
  row.className = 'crr';
  const fs = !r.fetchOk ? 'block' : r.fetchMs < 200 ? 'ok' : 'slow',
    is = !r.imgOk ? 'block' : r.imgMs < 200 ? 'ok' : 'slow',
    bp = r.state === 'ok' ? Math.max(8, 100 - (r.ms || 0) / 3) : r.state === 'slow' ? Math.max(8, 55 - (r.ms || 0) / 20) : 0;
  const badgeText = r.errorKey ? i18next.t(`status.${r.errorKey}`) : i18next.t(`status.${r.state}`);
  const badgeClass = r.errorKey ? 'warn' : r.state;
  row.innerHTML = `<div class="snw"><div class="dot ${r.state}"></div><div><div class="sn">${host}</div><div class="sh">${raw}</div></div></div><div class="cb"><div class="bo"><div class="bi2 ${r.state}" style="width:${bp}%"></div></div></div><div class="cp1"><div class="p1 ${fs}">${r.fetchOk ? r.fetchMs + ' ms' : '—'}</div><div class="pl">fetch</div></div><div class="cp2"><div class="p2 ${is}">${r.imgOk ? r.imgMs + ' ms' : '—'}</div><div class="pl" style="color:rgba(56,189,248,.4)">img</div></div><div><div class="sb ${badgeClass}">${badgeText}</div></div>`;
  const cont = document.getElementById('cqResults');
  cont.insertBefore(row, cont.firstChild);
  while (cont.children.length > 10) cont.removeChild(cont.lastChild);
  const b = document.getElementById('cqBadge');
  b.textContent = i18next.t('status.query_count', { count: cont.children.length });
  b.className = 'ph-badge ok';
}

/* Packs */
function buildPackGrid() {
  const g = document.getElementById('packGrid');
  if (!g) return;
  g.innerHTML = '';
  PACKS.forEach(p => {
    const c = document.createElement('div');
    c.className = 'pc' + (loadedIds.has(p.id) ? ' on' : '');
    c.id = 'pc_' + p.id;
    c.onclick = () => togglePack(p);
    c.innerHTML = `<div class="pc-top"><span class="pc-ico">${p.icon}</span><span class="pc-name">${i18next.t(`group.${slug(p.name)}`, { defaultValue: p.name })}</span><span class="pc-cnt">${p.count}</span></div><div class="pc-tags">${p.tags.map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>`;
    g.appendChild(c);
  });
}

async function togglePack(p) {
  const card = document.getElementById('pc_' + p.id);
  if (loadedIds.has(p.id)) {
    loadedIds.delete(p.id);
    SVCS = SVCS.filter(g => g._pid !== p.id);
    card.classList.remove('on');
    setMsg('', '');
    applyView();
    updPB();
    return;
  }
  card.classList.add('busy');
  setMsg(i18next.t('status.loading'), '');
  try {
    const data = await fetchJSON(p.url);
    ingestPack(data);
    loadedIds.add(p.id);
    card.classList.remove('busy');
    card.classList.add('on');
    setMsg(i18next.t('status.pack_loaded', { name: data.meta.name, count: data.services.length }), 'ok');
    applyView();
    updPB();
  } catch (e) {
    card.classList.remove('busy');
    setMsg(i18next.t('status.error', { message: e.message }), 'err');
  }
}

async function loadPackUrl() {
  const inp = document.getElementById('packUrl'), url = inp.value.trim();
  if (!url) return;
  const btn = document.getElementById('packUrlBtn');
  btn.classList.add('busy');
  setMsg(i18next.t('status.loading'), '');
  try {
    const data = await fetchJSON(url);
    ingestPack(data);
    loadedIds.add(data.meta.id);
    setMsg(i18next.t('status.pack_loaded_simple', { name: data.meta.name }), 'ok');
    inp.value = '';
    applyView();
    updPB();
    buildPackGrid();
  } catch (e) {
    setMsg(i18next.t('status.error', { message: e.message }), 'err');
  }
  btn.classList.remove('busy');
}

function loadPackFile(input) {
  const f = input.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      const d = JSON.parse(e.target.result);
      valPack(d);
      ingestPack(d);
      loadedIds.add(d.meta.id);
      setMsg(i18next.t('status.pack_loaded_simple', { name: d.meta.name }), 'ok');
      applyView();
      updPB();
      buildPackGrid();
    } catch (err) {
      setMsg(i18next.t('status.json_error', { message: err.message }), 'err');
    }
  };
  r.readAsText(f);
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const d = await res.json();
  valPack(d);
  return d;
}

function valPack(d) {
  if (!d.meta?.id || !d.meta?.name) throw new Error('"meta.id/name" eksik');
  if (!Array.isArray(d.services) || !d.services.length) throw new Error('"services" dizisi boş');
  d.services.forEach((s, i) => { if (!s.name || !s.host || !s.url || !s.favicon) throw new Error(`services[${i}] eksik alan`); });
}

function ingestPack(data) {
  SVCS = SVCS.filter(g => g._pid !== data.meta.id);
  SVCS.push({ group: data.meta.name, icon: data.meta.icon || '◈', _pid: data.meta.id, items: data.services });
}

function updPB() {
  const b = document.getElementById('packBadge'), n = loadedIds.size;
  b.textContent = n > 0 ? i18next.t('status.extra_packs_loaded', { count: n }) : i18next.t('status.default_list_active');
  b.className = 'ph-badge' + (n > 0 ? ' ok' : '');
}

function setMsg(m, t) {
  const el = document.getElementById('packMsg');
  if (!el) return;
  el.textContent = m;
  el.className = 'pmsg' + (t ? ' ' + t : '');
}

/* RuleCheck */
async function loadRuleUrl() {
  const inp = document.getElementById('ruleUrl'), url = inp.value.trim();
  if (!url) return;
  const btn = document.getElementById('ruleUrlBtn');
  btn.classList.add('busy');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    ingestRules(await res.json());
    inp.value = '';
  } catch (e) {
    document.getElementById('ruleBadge').textContent = i18next.t('status.error', { message: e.message });
  }
  btn.classList.remove('busy');
}

function loadRuleFile(input) {
  const f = input.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = e => {
    try {
      ingestRules(JSON.parse(e.target.result));
    } catch (err) {
      document.getElementById('ruleBadge').textContent = i18next.t('status.error', { message: err.message });
    }
  };
  r.readAsText(f);
}

function ingestRules(data) {
  if (!data.meta || !Array.isArray(data.rules)) throw new Error('Geçersiz ruleset');
  activeRules = data;
  const list = document.getElementById('ruleList');
  list.innerHTML = '';
  data.rules.forEach(rule => {
    const row = document.createElement('div');
    row.className = 'rl-row pending';
    row.id = 'rl_' + rule.id;
    row.innerHTML = `<div class="sv-dot sv-${rule.severity}"></div><div><div class="rl-name">${rule.name}</div><div class="rl-msg">${rule.description || ''}</div></div><div class="rl-badge">${i18next.t(`severity.${rule.severity}`, { defaultValue: rule.severity.toUpperCase() })}</div>`;
    list.appendChild(row);
  });
  const b = document.getElementById('ruleBadge');
  b.textContent = i18next.t('status.rule_loaded', { name: data.meta.name, count: data.rules.length });
  b.className = 'ph-badge warn';
  document.getElementById('ruleActions').style.display = 'flex';
}

async function runRuleCheck() {
  if (!activeRules) return;
  const btn = document.getElementById('ruleRunBtn');
  btn.classList.add('busy');
  btn.disabled = true;
  let pass = 0, fail = 0, warn = 0;
  await Promise.all(activeRules.rules.map(async rule => {
    const r = await checkOne({ ...rule.service, _group: 'RuleCheck' });
    const reach = r.state !== 'block',
      pingOk = !rule.conditions.max_ping_ms || (r.ms !== null && r.ms <= rule.conditions.max_ping_ms),
      mustReach = rule.conditions.must_reach !== false,
      passed = mustReach ? (reach && pingOk) : (!reach);
    const row = document.getElementById('rl_' + rule.id);
    if (!row) return;
    row.classList.remove('pending');
    const badge = row.querySelector('.rl-badge'), msg = row.querySelector('.rl-msg');
    if (passed) {
      badge.className = 'rl-badge pass';
      badge.textContent = i18next.t('status.passed');
      msg.textContent = rule.pass_message || i18next.t('status.rule_met');
      pass++;
    } else {
      const crit = rule.severity === 'critical';
      badge.className = 'rl-badge ' + (crit ? 'fail' : 'warn');
      badge.textContent = crit ? i18next.t('status.failed_caps') : i18next.t('status.warning_caps');
      msg.textContent = rule.fail_message || i18next.t('status.rule_violated');
      if (crit) fail++; else warn++;
    }
  }));
  btn.classList.remove('busy');
  btn.disabled = false;
  const b = document.getElementById('ruleBadge');
  if (fail > 0) { b.textContent = i18next.t('status.rule_result_fail', { fail, warn }); b.className = 'ph-badge fail'; }
  else if (warn > 0) { b.textContent = i18next.t('status.rule_result_warn', { warn, pass }); b.className = 'ph-badge warn'; }
  else { b.textContent = i18next.t('status.rule_result_ok', { pass }); b.className = 'ph-badge ok'; }
}

function clearRules() {
  activeRules = null; document.getElementById('ruleList').innerHTML = '';
  document.getElementById('ruleActions').style.display = 'none';
  const b = document.getElementById('ruleBadge');
  b.textContent = i18next.t('status.no_rule_loaded');
  b.className = 'ph-badge';
}

/* Panel & Drop */
function togglePanel(hdr) {
  const pb = hdr.nextElementSibling, ch = hdr.querySelector('.ph-chev');
  pb.classList.toggle('open');
  ch.classList.toggle('open');
}

function initDrops() {
  setupDrop('packDrop', d => {
    valPack(d); ingestPack(d); loadedIds.add(d.meta.id);
    setMsg(i18next.t('status.pack_loaded_simple', { name: d.meta.name }), 'ok');
    applyView(); updPB(); buildPackGrid();
  });
  setupDrop('ruleDrop', d => ingestRules(d));
}

function setupDrop(id, cb) {
  const z = document.getElementById(id);
  if (!z) return;
  z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('over'); });
  z.addEventListener('dragleave', () => z.classList.remove('over'));
  z.addEventListener('drop', e => {
    e.preventDefault(); z.classList.remove('over');
    const f = e.dataTransfer.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = ev => { try { cb(JSON.parse(ev.target.result)); } catch (err) { setMsg(i18next.t('status.json_error', { message: err.message }), 'err'); } };
    r.readAsText(f);
  });
}

function initApp() {
  getPublicIP();
  getLocalIP();
  applyView();
  buildPackGrid();
  initDrops();
}

window.initApp = initApp;
