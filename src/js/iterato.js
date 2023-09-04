export default class Team {
  constructor() {
    this.characters = [];
  }

  addChar(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    let proper = this.characters;
    let count = 0;

    return {
      next() {
        if (count < proper.length) {
          let key = proper[count];
          let result = { done: false, value: key };
          count++;
          return result;
        } else {
          return { done: true };
        }
      },
    };
  }
}
