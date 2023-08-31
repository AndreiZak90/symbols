export default class Team {
  constructor() {
    this.characters = [];
  }

  addChar(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
