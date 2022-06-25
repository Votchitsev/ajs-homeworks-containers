import Character from '../task/character';
import Team from '../task/team';

const team = new Team();
const characterOne = new Character('Marusia');
const characterTwo = new Character('Ivan');
const characterThree = new Character('Vasily');

test('adding character to team', () => {
  team.add(characterOne);
  expect(team.members).toContain(characterOne);
  expect(() => {
    team.add(characterOne);
  }).toThrow();
});

test('adding character to team by addAll', () => {
  team.addAll(characterTwo, characterThree);
  expect(team.members).toContain(characterTwo, characterThree);
});
