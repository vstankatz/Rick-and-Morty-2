
export class Characters {
  constructor(mainCharacter) {
    this.mainCharacter = mainCharacter;
    this.image = [];
    this.name = [];
  }

  async getCharacters(character) {
    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character/${character}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {

      console.error("There was an error handling your request: " + error.message);
    }
  }

  async initialChars() {
    try {
      let charArray = [1,2,5];
      for (let i=0; i<charArray.length; i++) {
        let thisResponse = await this.getCharacters(charArray[i]);
        this.image.push(thisResponse.image);
        this.name.push(thisResponse.name);
      }
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  async getBreakingCharacter() {
    try {
      let response = await fetch(`https://www.breakingbadapi.com/api/character/random`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {

      console.error("There was an error handling your request: " + error.message);
    }
  }

}

export class Quotes {


  async getNorris() {
    try {
      let response = await
      fetch(`http://api.icndb.com/jokes/random`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }
  }
  async getBreakingQuote() {
    try {
      let response = await
      fetch(`https://www.breakingbadapi.com/api/quote/random`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }
  }

  async getDad() {
    try {
      let response = await
      fetch('https://icanhazdadjoke.com/slack',
        { headers: {
          'Content-Type': 'application/json'}
        });

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }
  async getKanye() {
    try {
      let response = await
      fetch('https://api.kanye.rest/');

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }

  async getStars() {
    try {
      let response = await
      fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote');
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }
}

export class Image {
  async getImg() {
    try {
      let response = await
      fetch('http://www.splashbase.co/api/v1/images/random');
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }

  async getGiphy(giph) {
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${giph}&limit=1&offset=&rating=G&lang=en`);
      console.log(giph);
      console.log(response);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("there was an error handling this " + error.message);
    }
  }


}
