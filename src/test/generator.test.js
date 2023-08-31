import Team from "../js/iterato";
import createTeamIterator from "../js/generator";

describe("Team and createTeamIterator", () => {
  it("should iterate over team characters", () => {
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
    const iterator = createTeamIterator(team);
    for (const character of iterator) {
      iteratedCharacterNames.push(character.name);
    }

    expect(iteratedCharacterNames).toEqual(["Лучник", "Маг"]);
  });

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
});
