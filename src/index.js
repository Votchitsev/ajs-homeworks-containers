import Character from './js/task/character.js';
import Team from './js/task/team.js';

const characterOne = new Character('Dima');
const characterTwo = new Character('Sasha');
const characterThree = new Character('Some one');

const team = new Team();
team.add(characterOne, characterTwo, characterThree);
team.add(characterOne);

console.log(team.members);
