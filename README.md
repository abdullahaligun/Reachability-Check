# Reachability Check 🌐

[EN] | [TR](#reachability-check-tr)

Browser-based reachability checker — test network connectivity, firewall rules and access restrictions.

**Single HTML file. Zero dependencies. No web server required to run.**

---

## Features

- **Dual measurement:** HTTP Fetch + Image Ping (via each service's own favicon)
- **Service packs:** JSON-based, community extensible
- **RuleCheck:** Corporate network policy auditing — should be accessible / should be blocked + ping threshold
- **Filtering & grouping:** Fast / Slow / Blocked filters, Category / Status / Flat List views
- **Custom query:** Instant test for any URL or domain
- **Local + Public IP** detection (WebRTC + ipify)
- **Drag & drop JSON** — load files directly from the browser

---

## Usage

```bash
# Simplest: open directly
open index.html

# Or with any static server
npx serve .
python3 -m http.server 8080
```

Or drag-and-drop to Netlify → **netlify.com/drop**

---

## Service Pack Format

JSON files in the `services/` folder follow this schema:

```json
{
  "meta": {
    "id": "my-pack",
    "name": "Pack Name",
    "description": "What it contains",
    "icon": "◈",
    "version": "1.0.0",
    "author": "username",
    "tags": ["category", "tag"]
  },
  "services": [
    {
      "name": "Example Service",
      "host": "example.com",
      "url": "https://www.example.com",
      "favicon": "https://www.example.com/favicon.ico"
    }
  ]
}
```

**Rule:** `url` and `favicon` fields must be HTTPS. `favicon` must be an image URL hosted directly on the service's own server (not a Google proxy).

---

## RuleCheck Format

JSON files in the `rulesets/` folder follow this schema:

```json
{
  "meta": {
    "id": "my-ruleset",
    "name": "Ruleset Name",
    "description": "What it checks",
    "version": "1.0.0",
    "author": "username",
    "tags": ["corporate", "compliance"]
  },
  "rules": [
    {
      "id": "rule-github",
      "name": "GitHub Access",
      "description": "Mandatory for developer workflow",
      "service": {
        "name": "GitHub",
        "host": "github.com",
        "url": "https://github.com",
        "favicon": "https://github.com/favicon.ico"
      },
      "severity": "critical",
      "conditions": {
        "must_reach": true,
        "max_ping_ms": 800
      },
      "fail_message": "GitHub is inaccessible.",
      "pass_message": "GitHub is accessible."
    }
  ]
}
```

### Rule Fields

| Field | Description |
|-------|-------------|
| `severity` | `critical` / `warning` / `info` |
| `conditions.must_reach` | `true` → must be reachable, `false` → must be blocked |
| `conditions.max_ping_ms` | Optional. Above this ms → fails |
| `fail_message` | Message shown on rule violation |
| `pass_message` | Message shown on rule success |

---

## Community Contribution

To add a new service pack or ruleset → [CONTRIBUTING.md](CONTRIBUTING.md)

---

## License

MIT © [Abdullah Ali GÜN](https://github.com/abdullahaligun)

---
---

# Reachability Check (TR)

> Tarayıcı tabanlı erişilebilirlik denetleyici — ağ bağlantısını, firewall kurallarını ve erişim kısıtlamalarını test edin.

**Tek HTML dosyası. Sıfır bağımlılık. Çalıştırmak için web sunucusu gerekmez.**

---

## Özellikler

- **Çift ölçüm:** HTTP Fetch + Image Ping (her servisin kendi favicon'u üzerinden)
- **Servis paketleri:** JSON tabanlı, topluluk tarafından genişletilebilir
- **RuleCheck:** Kurumsal ağ politika denetimi — erişilebilmeli / engellenmeli + ping eşiği
- **Filtreleme & gruplama:** Hızlı / Yavaş / Engelli filtresi, Kategori / Durum / Düz Liste görünümleri
- **Özel sorgu:** Herhangi bir URL veya domain anlık test
- **Yerel + Genel IP** tespiti (WebRTC + ipify)
- **Drag & drop JSON** — tarayıcıdan direkt dosya yükleme

---

## Kullanım

```bash
# En basit: direkt aç
open index.html

# Ya da herhangi bir statik sunucu ile
npx serve .
python3 -m http.server 8080
```

Veya Netlify'a sürükle-bırak → **netlify.com/drop**

---

## Servis Paketi Formatı

`services/` klasöründeki JSON dosyaları bu şemayı takip eder:

```json
{
  "meta": {
    "id": "my-pack",
    "name": "Paket Adı",
    "description": "Ne içerdiği",
    "icon": "◈",
    "version": "1.0.0",
    "author": "kullanici-adi",
    "tags": ["kategori", "etiket"]
  },
  "services": [
    {
      "name": "Örnek Servis",
      "host": "ornek.com",
      "url": "https://www.ornek.com",
      "favicon": "https://www.ornek.com/favicon.ico"
    }
  ]
}
```

**Kural:** `url` ve `favicon` alanları HTTPS olmalı. `favicon` doğrudan servisin kendi sunucusunda barındırılan bir resim URL'si olmalı (Google proxy değil).

---

## RuleCheck Formatı

`rulesets/` klasöründeki JSON dosyaları bu şemayı takip eder:

```json
{
  "meta": {
    "id": "my-ruleset",
    "name": "Kural Seti Adı",
    "description": "Ne denetlediği",
    "version": "1.0.0",
    "author": "kullanici-adi",
    "tags": ["corporate", "compliance"]
  },
  "rules": [
    {
      "id": "rule-github",
      "name": "GitHub Erişimi",
      "description": "Geliştirici iş akışı için zorunlu",
      "service": {
        "name": "GitHub",
        "host": "github.com",
        "url": "https://github.com",
        "favicon": "https://github.com/favicon.ico"
      },
      "severity": "critical",
      "conditions": {
        "must_reach": true,
        "max_ping_ms": 800
      },
      "fail_message": "GitHub erişilemiyor.",
      "pass_message": "GitHub erişilebilir."
    }
  ]
}
```

### Kural Alanları

| Alan | Açıklama |
|------|----------|
| `severity` | `critical` / `warning` / `info` |
| `conditions.must_reach` | `true` → erişilebilmeli, `false` → engellenmiş olmalı |
| `conditions.max_ping_ms` | Opsiyonel. Bu ms üstü → başarısız |
| `fail_message` | Kural ihlalinde gösterilecek mesaj |
| `pass_message` | Kural karşılandığında gösterilecek mesaj |

---

## Topluluk Katkısı

Yeni bir servis paketi veya kural seti eklemek için → [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Lisans

MIT © [Abdullah Ali GÜN](https://github.com/abdullahaligun)
