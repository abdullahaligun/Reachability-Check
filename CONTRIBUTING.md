# Contribution Guide for Reachability Check

[EN] | [TR](#reachability-checke-katkida-bulunma-rehberi-tr)

Thank you for your contribution! This document is for those who want to add new service packs or rulesets.

---

## Quick Start

```bash
# Fork and clone the repo
git clone https://github.com/abdullahaligun/reachability-check.git
cd reachability-check

# Create a new branch
git checkout -b add/gaming-services
```

---

## Adding a New Service Pack

### 1. Create the JSON file

Create a new file in the `services/` folder. The filename should be `kebab-case`:

```
services/
  gaming-platforms.json   ← new pack
  turkish-news.json       ← regional pack example
```

### 2. Fill the schema

```json
{
  "meta": {
    "id": "gaming-platforms",
    "name": "Gaming Platforms",
    "description": "Major gaming platforms and stores",
    "icon": "◈",
    "version": "1.0.0",
    "author": "your-github-username",
    "tags": ["gaming", "entertainment"]
  },
  "services": [
    {
      "name": "Steam",
      "host": "store.steampowered.com",
      "url": "https://store.steampowered.com",
      "favicon": "https://store.steampowered.com/favicon.ico"
    }
  ]
}
```

### 3. Rules

- `url` and `favicon` fields must be **HTTPS**
- `favicon` must come directly from the service's server (not Google proxy)
- Use a real and tested favicon URL for each service
- Minimum **3**, maximum **20** services recommended
- `id` must be unique and not conflict with existing packs

### 4. Update `services/index.json`

```json
{
  "packs": [
    ...existing packs...,
    {
      "id": "gaming-platforms",
      "name": "Gaming Platforms",
      "description": "Major gaming platforms and stores",
      "icon": "◈",
      "tags": ["gaming", "entertainment"],
      "url": "https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/gaming-platforms.json",
      "author": "your-github-username",
      "services_count": 8
    }
  ]
}
```

### 5. Validate and Open PR

```bash
npm run validate:services   # JSON schema check
```

PR Title: `feat(services): add gaming-platforms pack`

---

## Adding a New Ruleset

### Simple ruleset (accessible / blocked)

```json
{
  "meta": {
    "id": "tr-isp-check",
    "name": "Turkey ISP Check",
    "description": "Common sites blocked by Turkish ISPs",
    "version": "1.0.0",
    "author": "your-github-username",
    "tags": ["turkey", "isp", "censorship"]
  },
  "rules": [
    {
      "id": "rule-wikipedia-tr",
      "name": "Wikipedia Access",
      "description": "Wikipedia should be accessible",
      "service": {
        "name": "Wikipedia",
        "host": "wikipedia.org",
        "url": "https://en.wikipedia.org",
        "favicon": "https://en.wikipedia.org/favicon.ico"
      },
      "severity": "critical",
      "conditions": {
        "must_reach": true
      },
      "fail_message": "Wikipedia is inaccessible — might be an ISP block.",
      "pass_message": "Wikipedia is accessible."
    }
  ]
}
```

### Rule Schema Reference

| Field | Mandatory | Values | Description |
|-------|-----------|--------|-------------|
| `id` | ✓ | string | Unique rule ID |
| `name` | ✓ | string | Short descriptive name |
| `service` | ✓ | object | `name`, `host`, `url`, `favicon` |
| `severity` | ✓ | `critical` / `warning` / `info` | Severity level |
| `conditions.must_reach` | ✓ | `true` / `false` | Should it be reachable or blocked |
| `conditions.max_ping_ms` | — | number | Optional ping threshold |
| `fail_message` | — | string | Message on rule violation |
| `pass_message` | — | string | Message on rule success |

---

## PR Checklist

Check these before opening a PR:

- [ ] `npm run validate` passes
- [ ] All favicon URLs are HTTPS and directly from the service server
- [ ] `services/index.json` or `rulesets/` updated
- [ ] `meta.author` field contains your GitHub username
- [ ] Service/rule count matches `services_count`
- [ ] `id` field does not conflict with existing packs

---

## Idea Suggestions

Pack ideas we want to add:

- 🇹🇷 **Turkey Regional** — local news, public services
- 🏢 **Enterprise SaaS** — Jira, Confluence, Salesforce, HubSpot
- 🎮 **Gaming** — Steam, Epic, PlayStation, Xbox
- 📚 **Education** — Coursera, edX, Udemy, Khan Academy
- 🏦 **Fintech** — crypto exchanges, payment systems
- 🔒 **Security** — VPN providers, DNS services

If you have an idea, open an **Issue** or send a PR directly!

---

## Code of Conduct

- Technical-focused packs without political content
- Do not add services hosting harmful or illegal content
- All contributions are shared under the MIT license

---
---

# Reachability Check'e Katkıda Bulunma Rehberi (TR)

Katkın için teşekkürler! Bu belge yeni servis paketi veya kural seti eklemek isteyenler içindir.

---

## Hızlı Başlangıç

```bash
# Repoyu fork'la ve klonla
git clone https://github.com/abdullahaligun/reachability-check.git
cd reachability-check

# Yeni bir branch oluştur
git checkout -b add/gaming-services
```

---

## Yeni Servis Paketi Eklemek

### 1. JSON dosyasını oluştur

`services/` klasöründe yeni bir dosya oluştur. Dosya adı `kebab-case` olmalı:

```
services/
  gaming-platforms.json   ← yeni paket
  turkish-news.json       ← bölgesel paket örneği
```

### 2. Şemayı doldur

```json
{
  "meta": {
    "id": "gaming-platforms",
    "name": "Oyun Platformları",
    "description": "Major gaming platforms and stores",
    "icon": "◈",
    "version": "1.0.0",
    "author": "github-kullanici-adin",
    "tags": ["gaming", "entertainment"]
  },
  "services": [
    {
      "name": "Steam",
      "host": "store.steampowered.com",
      "url": "https://store.steampowered.com",
      "favicon": "https://store.steampowered.com/favicon.ico"
    }
  ]
}
```

### 3. Kurallar

- `url` ve `favicon` alanları **HTTPS** olmalı
- `favicon` doğrudan servisin sunucusundan gelmeli (Google proxy değil)
- Her servis için gerçek ve test edilmiş bir favicon URL'si kullan
- Minimum **3**, maksimum **20** servis önerilir
- `id` benzersiz olmalı ve mevcut paketlerle çakışmamalı

### 4. `services/index.json` dosyasını güncelle

```json
{
  "packs": [
    ...mevcut paketler...,
    {
      "id": "gaming-platforms",
      "name": "Oyun Platformları",
      "description": "Major gaming platforms and stores",
      "icon": "◈",
      "tags": ["gaming", "entertainment"],
      "url": "https://raw.githubusercontent.com/abdullahaligun/reachability-check/main/services/gaming-platforms.json",
      "author": "github-kullanici-adin",
      "services_count": 8
    }
  ]
}
```

### 5. Doğrula ve PR aç

```bash
npm run validate:services   # JSON şema kontrolü
```

PR başlığı: `feat(services): add gaming-platforms pack`

---

## Yeni Kural Seti Eklemek

### Basit kural seti (erişilebilir / engelli)

```json
{
  "meta": {
    "id": "tr-isp-check",
    "name": "Türkiye ISP Kontrolü",
    "description": "Common sites blocked by Turkish ISPs",
    "version": "1.0.0",
    "author": "github-kullanici-adin",
    "tags": ["turkey", "isp", "censorship"]
  },
  "rules": [
    {
      "id": "rule-wikipedia-tr",
      "name": "Wikipedia Erişimi",
      "description": "Wikipedia should be accessible",
      "service": {
        "name": "Wikipedia",
        "host": "wikipedia.org",
        "url": "https://en.wikipedia.org",
        "favicon": "https://en.wikipedia.org/favicon.ico"
      },
      "severity": "critical",
      "conditions": {
        "must_reach": true
      },
      "fail_message": "Wikipedia erişilemiyor — ISP engeli olabilir.",
      "pass_message": "Wikipedia erişilebilir."
    }
  ]
}
```

### Kural şema referansı

| Alan | Zorunlu | Değerler | Açıklama |
|------|---------|----------|----------|
| `id` | ✓ | string | Benzersiz kural kimliği |
| `name` | ✓ | string | Kısa açıklayıcı isim |
| `service` | ✓ | object | `name`, `host`, `url`, `favicon` |
| `severity` | ✓ | `critical` / `warning` / `info` | Kritiklik seviyesi |
| `conditions.must_reach` | ✓ | `true` / `false` | Erişilebilmeli mi, engelli mi olmalı |
| `conditions.max_ping_ms` | — | number | Opsiyonel ping eşiği |
| `fail_message` | — | string | Kural ihlalinde gösterilecek mesaj |
| `pass_message` | — | string | Kural karşılandığında mesaj |

---

## PR Kontrol Listesi

PR açmadan önce şunları kontrol et:

- [ ] `npm run validate` başarılı geçiyor
- [ ] Tüm favicon URL'leri HTTPS ve doğrudan servisin sunucusundan
- [ ] `services/index.json` veya `rulesets/` güncellendi
- [ ] `meta.author` alanında GitHub kullanıcı adın var
- [ ] Servis/kural sayısı `services_count` ile eşleşiyor
- [ ] `id` alanı mevcut paketlerle çakışmıyor

---

## İdea Önerileri

Eklemek istediğimiz paket fikirleri:

- 🇹🇷 **Türkiye bölgesel** — yerli haberler, kamu servisleri
- 🏢 **Kurumsal SaaS** — Jira, Confluence, Salesforce, HubSpot
- 🎮 **Oyun** — Steam, Epic, PlayStation, Xbox
- 📚 **Eğitim** — Coursera, edX, Udemy, Khan Academy
- 🏦 **Fintech** — kripto borsaları, ödeme sistemleri
- 🔒 **Güvenlik** — VPN sağlayıcıları, DNS servisleri

Fikrin varsa **Issue** aç ya da direkt PR gönder!

---

## Davranış Kuralları

- Siyasi içerik içermeyen, teknik odaklı paketler
- Zararlı veya illegal içerik barındıran servisleri ekleme
- Tüm katkılar MIT lisansı altında paylaşılır
