#!/usr/bin/env node
/**
 * validate.js — validates service packs and rulesets against schema
 * Usage: node scripts/validate.js <directory> [--type ruleset]
 */

const fs   = require('fs');
const path = require('path');

const dir      = process.argv[2];
const isRule   = process.argv.includes('--type') && process.argv[process.argv.indexOf('--type')+1] === 'ruleset';
const files    = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'index.json');
let errors     = 0;

const SERVICE_REQUIRED = ['name','host','url','favicon'];
const META_REQUIRED    = ['id','name','description','icon','version','author'];
const RULE_REQUIRED    = ['id','name','service','severity','conditions'];
const SEVERITIES       = ['critical','warning','info'];

function err(file, msg) {
  console.error(`  ✗ [${file}] ${msg}`);
  errors++;
}
function ok(file, msg) {
  console.log(`  ✓ [${file}] ${msg}`);
}

files.forEach(file => {
  const fp   = path.join(dir, file);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  } catch (e) {
    err(file, `Invalid JSON: ${e.message}`);
    return;
  }

  // Validate meta
  if (!data.meta) { err(file, 'Missing "meta" object'); return; }
  META_REQUIRED.forEach(k => { if (!data.meta[k]) err(file, `meta.${k} is required`); });

  if (isRule) {
    // Validate ruleset
    if (!Array.isArray(data.rules) || data.rules.length === 0) {
      err(file, '"rules" array is required and must not be empty');
      return;
    }
    data.rules.forEach((rule, i) => {
      RULE_REQUIRED.forEach(k => {
        if (!rule[k]) err(file, `rules[${i}].${k} is required`);
      });
      if (rule.severity && !SEVERITIES.includes(rule.severity)) {
        err(file, `rules[${i}].severity must be one of: ${SEVERITIES.join(', ')}`);
      }
      if (rule.service) {
        SERVICE_REQUIRED.forEach(k => {
          if (!rule.service[k]) err(file, `rules[${i}].service.${k} is required`);
        });
      }
      if (rule.conditions?.max_ping_ms !== undefined && typeof rule.conditions.max_ping_ms !== 'number') {
        err(file, `rules[${i}].conditions.max_ping_ms must be a number`);
      }
    });
    ok(file, `${data.rules.length} rules validated`);

  } else {
    // Validate service pack
    if (!Array.isArray(data.services) || data.services.length === 0) {
      err(file, '"services" array is required and must not be empty');
      return;
    }
    data.services.forEach((svc, i) => {
      SERVICE_REQUIRED.forEach(k => {
        if (!svc[k]) err(file, `services[${i}].${k} is required`);
      });
      if (svc.url && !svc.url.startsWith('https://')) {
        err(file, `services[${i}].url must use HTTPS`);
      }
      if (svc.favicon && !svc.favicon.startsWith('https://')) {
        err(file, `services[${i}].favicon must use HTTPS`);
      }
    });
    ok(file, `${data.services.length} services validated`);
  }
});

if (errors > 0) {
  console.error(`\n${errors} error(s) found. Fix before merging.`);
  process.exit(1);
} else {
  console.log(`\nAll files valid.`);
}
