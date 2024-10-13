import Gettext from 'node-gettext';

import MeteoGid_Ukrainian from './../locales/uk.po';

export const gt = new Gettext();

gt.addTranslations('uk', 'common', MeteoGid_Ukrainian);
gt.setTextDomain('common');
gt.setLocale('uk');
