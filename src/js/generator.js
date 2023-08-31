export default function* createTeamIterator(team) {
  for (const character of team.characters) {
    yield character;
  }
}
