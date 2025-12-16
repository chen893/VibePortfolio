import type { DeveloperProfile } from '../types/profile';
import type { Locale } from './ui';

import profileZh from '../data/profile.json';
import profileEn from '../data/profile.en.json';

export function getProfile(locale: Locale): DeveloperProfile {
  return (locale === 'en' ? profileEn : profileZh) as unknown as DeveloperProfile;
}

