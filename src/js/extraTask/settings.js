export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    this.userSettings = new Map();
  }

  setUserSettings(settings) {
    Object.keys(settings).forEach((key) => {
      this.userSettings.set(key, settings[key]);
    });
  }

  getUserSettings() {
    const iter = this.defaultSettings[Symbol.iterator]();
    for (let i = 0; i < this.defaultSettings.size; i += 1) {
      const setting = iter.next().value;
      if (!this.userSettings.has(setting[0])) {
        this.userSettings.set(setting[0], setting[1]);
      }
    }
    return this.userSettings;
  }
}
