import { afterEach, describe, expect, it } from 'bun:test';
import en from '../../i18n/locales/en';
import cs from '../../i18n/locales/cs';
import { detectLocale } from '../../i18n/detect';
import { __resetI18nForTests, publicSetLanguage, t } from '../../i18n';

afterEach(__resetI18nForTests);

describe('Czech widget locale', () => {
  it('covers the English catalog and preserves interpolation placeholders', () => {
    expect(Object.keys(cs).sort()).toEqual(Object.keys(en).sort());
    for (const key of Object.keys(en) as (keyof typeof en)[]) {
      expect(cs[key].trim().length).toBeGreaterThan(0);
      expect((cs[key].match(/\{\w+\}/g) ?? []).sort()).toEqual(
        (en[key].match(/\{\w+\}/g) ?? []).sort()
      );
    }
  });

  it('detects Czech from the page or browser and respects manual selection', () => {
    const options = { mode: 'auto' as const, projectDefault: 'en' as const };
    expect(detectLocale({ ...options, documentLang: 'cs-CZ' })).toBe('cs');
    expect(
      detectLocale({ ...options, documentLang: '', navigatorLanguages: ['cs-CZ', 'en'] })
    ).toBe('cs');
    expect(detectLocale({ ...options, initLanguage: 'cs' })).toBe('cs');
    expect(detectLocale({ ...options, scriptLanguage: 'cs' })).toBe('cs');
    expect(
      detectLocale({ ...options, mode: 'manual', projectDefault: 'cs', initLanguage: 'en' })
    ).toBe('cs');
  });

  it('switches through the public API and interpolates Czech messages', () => {
    expect(publicSetLanguage('cs-CZ')).toBe('cs');
    expect(t('dialog.title')).toBe('Nahlásit chybu');
    expect(t('dialog.tabs.mediaWithCount', { count: 3 })).toBe('Snímky obrazovky (3)');
    expect(t('screenshot.error.captureTooLarge', { size: 12, limit: 5 })).toBe(
      'Pořízený snímek má 12 MB (max. 5 MB).'
    );
  });
});
