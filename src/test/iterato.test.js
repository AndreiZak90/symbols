import Team from "../js/iterato";

describe("Team class", () => {
  it("should add characters to the team", () => {
    const team = new Team();

    const character = {
      name: "Тестовый персонаж",
      type: "Tester",
      health: 100,
      level: 5,
      attack: 20,
      defence: 15,
    };

    team.addChar(character);

    expect(team.characters).toHaveLength(1);
    expect(team.characters[0]).toBe(character);
  });

  it("should iterate over characters using the iterator", () => {
    const team = new Team();

    const character1 = {
      name: "Лучник",
      type: "Bowman",
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };

    const character2 = {
      name: "Маг",
      type: "Wizard",
      health: 60,
      level: 2,
      attack: 60,
      defence: 5,
    };

    team.addChar(character1);
    team.addChar(character2);

    const iteratedCharacterNames = [];
    for (const character of team) {
      iteratedCharacterNames.push(character.name);
    }

    expect(iteratedCharacterNames).toEqual(["Лучник", "Маг"]);
  });
});
