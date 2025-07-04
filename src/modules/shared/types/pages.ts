import { pages, settings } from '../data/pages';

export type PageType = (typeof pages)[number];
export type PagePath = PageType['path'];

export type SettingsType = (typeof settings)[number];
export type SettingsPath = SettingsType['path'];
