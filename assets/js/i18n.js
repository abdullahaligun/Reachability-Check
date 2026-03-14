const resources = {
  tr: {
    translation: {
      title: "Reachability Check — Bağlantı Denetleyici",
      description: "Yerel ağ politikaları, firewall veya devlet kısıtlamalarından kaynaklanan erişim engellerini anlık test edin.",
      logo_sub: "Bağlantı Denetleyici",
      last_test: "son test:",
      ip: {
        local: "Yerel IP",
        public: "Genel IP",
        local_sub: "LAN adresi (WebRTC)",
        public_sub: "IPv4 — genel adres",
        detecting: "Tespit ediliyor…",
        querying: "Sorgulanıyor…"
      },
      panel: {
        custom_query: "Özel Sorgu",
        custom_query_desc: "Herhangi bir URL veya domain girerek anlık erişim testi yap.",
        custom_query_placeholder: "https://ornek.com veya ornek.com",
        service_packs: "Servis Paketleri",
        service_packs_desc: "Topluluk paketlerini seç, URL'den yükle veya kendi JSON dosyanı sürükle-bırak.",
        package_schema: "Paket şeması →",
        rule_check: "RuleCheck — Politika Denetimi",
        rule_check_desc: "Kurumsal ağ politikası veya özel kural seti yükle. Her kural, servisin erişilebilir olması ya da engellenmesi gerektiğini belirtir. Opsiyonel ping eşiği eklenebilir.",
        example_rulesets: "Örnek rulesets →"
      },
      status: {
        any_url: "herhangi bir URL",
        default_list_active: "varsayılan liste aktif",
        no_rule_loaded: "kural yüklü değil",
        ready: "Hazır",
        testing: "test…",
        waiting: "bekliyor",
        ok: "hızlı",
        slow: "yavaş",
        block: "engelli",
        failed: "alınamadı",
        failed_to_detect: "tespit edilemedi",
        no_permission: "izin yok",
        loading: "Yükleniyor…",
        test_starting: "Test başlatılıyor: 0 / {{count}}",
        testing_count: "Test ediliyor: {{done}} / {{total}}",
        completed_count: "Tamamlandı — {{count}} servis",
        query_count: "{{count}} sorgu",
        pack_loaded: "\"{{name}}\" yüklendi — {{count}} servis.",
        pack_loaded_simple: "\"{{name}}\" yüklendi.",
        extra_packs_loaded: "{{count}} ek paket yüklü",
        error: "Hata: {{message}}",
        json_error: "JSON hatası: {{message}}",
        rule_loaded: "\"{{name}}\" — {{count}} kural",
        passed: "GEÇTİ",
        failed_caps: "BAŞARISIZ",
        warning_caps: "UYARI",
        rule_met: "Kural karşılandı.",
        rule_violated: "Kural ihlali.",
        rule_result_fail: "{{fail}} kritik hata, {{warn}} uyarı",
        rule_result_warn: "{{warn}} uyarı, {{pass}} geçti",
        rule_result_ok: "Tüm kurallar geçti ({{pass}})",
        accessible_count: "{{ok}}/{{total}} erişilebilir",
        service_count: "{{count}} servis",
        no_service_in_filter: "Bu filtrede servis yok.",
        pna_error: "Güvenlik Engeli (PNA)"
      },
      table: {
        service: "Servis",
        latency: "Gecikme",
        status: "Durum"
      },
      group: {
        all_services: "Tüm Servisler",
        sosyal_medya: "Sosyal Medya",
        ai_servisleri: "AI Servisleri",
        iletisim: "İletişim",
        arama_haber: "Arama & Haber",
        gelistirici: "Geliştirici",
        medya_depolama: "Medya & Depolama"
      },
      controls: {
        test_all: "Tümünü Test Et",
        test_rules: "▶ Kuralları Test Et",
        clear: "Temizle",
        filter: "Filtre:",
        group: "Grupla:",
        sort: "Sırala:",
        all: "Tümü",
        fast: "Hızlı",
        slow: "Yavaş",
        blocked: "Engelli",
        category: "Kategori",
        status: "Durum",
        flat_list: "Düz Liste",
        sort_default: "Varsayılan",
        sort_ping_asc: "Ping ↑",
        sort_ping_desc: "Ping ↓",
        sort_name_asc: "İsim A–Z",
        sort_name_desc: "İsim Z–A"
      },
      legend: {
        fast: "Fetch hızlı <200ms",
        slow: "Yavaş 200–800ms",
        blocked: "Engelli / Timeout",
        image_ping: "Image ping hızlı"
      },
      footer: {
        note: "⚠ Tarayıcıdan ICMP ping atılamaz. HTTP Fetch: HEAD round-trip — en güvenilir. Image Ping: Servisin kendi favicon'u — düşük overhead. Her ikisi de engelli gösteriyorsa kısıtlama büyük ihtimalle gerçektir."
      },
      severity: {
        critical: "KRİTİK",
        warning: "UYARI",
        info: "BİLGİ"
      },
      buttons: {
        test: "Test Et →",
        load: "Yükle →"
      },
      drop: {
        pack: "JSON dosyasını buraya sürükle-bırak",
        rule: "Ruleset JSON dosyasını buraya sürükle-bırak",
        or: "veya",
        select_file: "dosya seç"
      }
    }
  },
  en: {
    translation: {
      title: "Reachability Check — Connectivity Checker",
      description: "Instantly test access blocks caused by local network policies, firewalls, or government restrictions.",
      logo_sub: "Connectivity Checker",
      last_test: "last run:",
      ip: {
        local: "Local IP",
        public: "Public IP",
        local_sub: "LAN address (WebRTC)",
        public_sub: "IPv4 — public address",
        detecting: "Detecting…",
        querying: "Querying…"
      },
      panel: {
        custom_query: "Custom Query",
        custom_query_desc: "Input any URL or domain for instant reachability test.",
        custom_query_placeholder: "https://example.com or example.com",
        service_packs: "Service Packs",
        service_packs_desc: "Select community packs, load from URL, or drag-and-drop your own JSON file.",
        package_schema: "Package schema →",
        rule_check: "RuleCheck — Policy Audit",
        rule_check_desc: "Load corporate network policy or custom rule set. Each rule specifies if a service should be accessible or blocked. Optional ping threshold can be added.",
        example_rulesets: "Example rulesets →"
      },
      status: {
        any_url: "any URL",
        default_list_active: "default list active",
        no_rule_loaded: "no rule loaded",
        ready: "Ready",
        testing: "testing…",
        waiting: "waiting",
        ok: "fast",
        slow: "slow",
        block: "blocked",
        failed: "failed",
        failed_to_detect: "failed to detect",
        no_permission: "no permission",
        loading: "Loading…",
        test_starting: "Test starting: 0 / {{count}}",
        testing_count: "Testing: {{done}} / {{total}}",
        completed_count: "Completed — {{count}} services",
        query_count: "{{count}} queries",
        pack_loaded: "\"{{name}}\" loaded — {{count}} services.",
        pack_loaded_simple: "\"{{name}}\" loaded.",
        extra_packs_loaded: "{{count}} extra packs loaded",
        error: "Error: {{message}}",
        json_error: "JSON error: {{message}}",
        rule_loaded: "\"{{name}}\" — {{count}} rules",
        passed: "PASSED",
        failed_caps: "FAILED",
        warning_caps: "WARNING",
        rule_met: "Rule satisfied.",
        rule_violated: "Rule violated.",
        rule_result_fail: "{{fail}} critical errors, {{warn}} warnings",
        rule_result_warn: "{{warn}} warnings, {{pass}} passed",
        rule_result_ok: "All rules passed ({{pass}})",
        accessible_count: "{{ok}}/{{total}} accessible",
        service_count: "{{count}} services",
        no_service_in_filter: "No services in this filter.",
        pna_error: "Security Block (PNA)"
      },
      table: {
        service: "Service",
        latency: "Latency",
        status: "Status"
      },
      group: {
        all_services: "All Services",
        sosyal_medya: "Social Media",
        ai_servisleri: "AI Services",
        iletisim: "Communication",
        arama_haber: "Search & News",
        gelistirici: "Developer",
        medya_depolama: "Media & Storage"
      },
      controls: {
        test_all: "Test All",
        test_rules: "▶ Test Rules",
        clear: "Clear",
        filter: "Filter:",
        group: "Group:",
        sort: "Sort:",
        all: "All",
        fast: "Fast",
        slow: "Slow",
        blocked: "Blocked",
        category: "Category",
        status: "Status",
        flat_list: "Flat List",
        sort_default: "Default",
        sort_ping_asc: "Ping ↑",
        sort_ping_desc: "Ping ↓",
        sort_name_asc: "Name A–Z",
        sort_name_desc: "Name Z–A"
      },
      legend: {
        fast: "Fetch fast <200ms",
        slow: "Slow 200–800ms",
        blocked: "Blocked / Timeout",
        image_ping: "Image ping fast"
      },
      footer: {
        note: "⚠ Browser cannot perform ICMP ping. HTTP Fetch: HEAD round-trip — most reliable. Image Ping: Service's own favicon — low overhead. If both show blocked, the restriction is likely real."
      },
      severity: {
        critical: "CRITICAL",
        warning: "WARNING",
        info: "INFO"
      },
      buttons: {
        test: "Test →",
        load: "Load →"
      },
      drop: {
        pack: "Drag-and-drop JSON file here",
        rule: "Drag-and-drop Ruleset JSON here",
        or: "or",
        select_file: "select file"
      }
    }
  }
};

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = i18next.t(key);
  });

  // Specifically handle title meta tag
  document.title = i18next.t('title');
  
  // Re-render groups/items if they exist
  if (typeof applyView === 'function') {
    applyView();
  }
  if (typeof buildPackGrid === 'function') {
    buildPackGrid();
  }
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    updateContent();
    localStorage.setItem('preferredLanguage', lang);
    updateLangButtons(lang);
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 
                   (navigator.language.startsWith('tr') ? 'tr' : 'en');
  
  i18next.init({
    lng: savedLang,
    debug: false,
    resources
  }, function(err, t) {
    updateContent();
    updateLangButtons(savedLang);
    if (typeof initApp === 'function') {
      initApp();
    }
  });
});
