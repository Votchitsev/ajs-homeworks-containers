import Settings from '../extraTask/settings';

const settings = new Settings();

settings.setUserSettings({
  theme: 'light',
});

const testSettings = new Map();
testSettings.set('theme', 'light');
testSettings.set('music', 'trance');
testSettings.set('difficulty', 'easy');

test('test set user Settings', () => {
  expect(settings.getUserSettings()).toEqual(testSettings);
});
