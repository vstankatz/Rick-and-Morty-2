import {Characters} from './../src/apicalls.js';

describe('character', () => {

  test('should show the character morty when 2 is selected', () => {
    let character = 2;
    (async() => {
      let mainCharacter = new Characters();
      const response = await mainCharacter.getCharacters(character);
      getElements(response);
      expect(response.results.id).toEqual(2);
    });
  });
});
