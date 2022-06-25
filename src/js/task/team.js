export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(...characters) {
    characters.forEach((character) => {
      if (this.members.has(character)) {
        throw new Error('The team has this character');
      }
      this.members.add(character);
    });
  }
}
