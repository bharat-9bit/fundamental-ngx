import { FdLanguage } from '../models/lang';
import { translationTester } from '../utils/translation-tester';
import translations from './translations_zh_TW';

describe('libs/i18n/src/lib/translations/translations_zh_TW.spec.ts', () =>
    translationTester(translations as unknown as FdLanguage));
