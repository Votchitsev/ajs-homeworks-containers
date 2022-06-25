import Character from '../task/character';
import Team from '../task/team';

test('adding character to team', () => {
  const character = new Character('Marusia');
  const team = new Team();
  team.add(character);
  expect(team.members).toContain(character);
});

test('repeated adding a character to team', () => {
  const character = new Character('Marusia');
  const team = new Team();
  team.add(character);
  expect(team.add(character)).toThrow();
});
