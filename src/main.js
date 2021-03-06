import {
  Characters,
  Quotes,
  Image
} from './apicalls.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const image = new Image();
const quote = new Quotes();
const mainCharacter = new Characters();

(async function characterGrab(character) {
  const response = await mainCharacter.getCharacters(character);
  return response;

})();

(async function intialCharacter() {
  let people = await mainCharacter.initialChars();
  let imageUrl = await image.getImg();
  Promise.all([people, imageUrl]).then(
    $('img#rick').attr('src', mainCharacter.image[0]),
    $('img#morty').attr('src', mainCharacter.image[1]),
    $('img#jerry').attr('src', mainCharacter.image[2]));
})();

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  let thisGuess = [];

  function checkAnswer(guess) {
    if (guess === thisGuess[0]) {
      $(".hideButton").show();
      thisGuess = [];
      $("input#triviaGuess").val('');
    } else {
      alert("YOURE DUMB!!");
    }
  }


  (async function backgroundImage() {

    let imageUrl = await image.getImg();
    $('body').css('background-image', 'url(' + imageUrl.url + ')');

  })();



  $('form#pickCharacter').submit(function(event) {
    event.preventDefault();
    $(".sceneOne").show();
    $(".pickCharacter").hide();
    let main = $("input[name=characterChoice]:checked").val();
    const newCharacter = new Characters(main);
    const giph = $("input#giphy").val();

    (async function mentor() {
      let indexRick = getRandom(1, 20);
      let character = '?name=rick';
      let response = await newCharacter.getCharacters(character);
      let norrisResponse = await quote.getNorris();
      let dadJoke = await quote.getDad();
      let imageUrl = await image.getImg();
      let giphResponse = await image.getGiphy(giph);
      Promise.all([indexRick, character, response, norrisResponse, dadJoke, imageUrl, giphResponse]).then(
        $('img.rickTrick').attr('src', response.results[`${indexRick}`].image),
        $('.rickTrickName').text(response.results[`${indexRick}`].name),
        $('#norris1').text(norrisResponse.value.joke),
        $('img.mainCharacter').attr('src', mainCharacter.image[main]),
        $('.mainCharacterName').text(mainCharacter.name[main]),
        $('#mainWords1').text(dadJoke.attachments[0].fallback),
        $('body').css('background-image', 'url(' + imageUrl.url + ')'),
        $('img#giphOutput').attr('src', giphResponse.data[0].images.downsized_large.url));
    })();


    $("#sceneOneContinue").click(function() {
      $(".sceneOne").hide();
      $(".sceneTwo").show();
      $(".trivia1").show();
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);
      (async function battle() {
        let indexRick = getRandom(1, 20);
        let character = '?name=rick';
        let triviaResponse = await quote.getTrivia();
        let response = await newCharacter.getCharacters(character);
        let kanyeResponse = await quote.getKanye();
        let imageUrl = await image.getImg();
        let dadJoke = await quote.getDad();
        Promise.all([indexRick, character, response, kanyeResponse, imageUrl, dadJoke, triviaResponse]).then(
          $('img#kanyeRickImg').attr('src', response.results[`${indexRick}`].image),
          $('.kanyeRickName').text('Kanye Rick West'),
          $('#kanye1').text(kanyeResponse.quote),
          $('body').css('background-image', 'url(' + imageUrl.url + ')'),
          $(".triviaQuestion").text(triviaResponse[0].question),
          $(".triviaAnswer").text(triviaResponse[0].answer),

          $('img.mainCharacter').attr('src', mainCharacter.image[main]),
          $('.mainCharacterName').text(mainCharacter.name[main]),
          $('#mainWords2').text(dadJoke.attachments[0].fallback));
        thisGuess.push(triviaResponse[0].answer);
      })();



      $('#sceneTwoContinue').click(function() {
        $('.sceneTwo').hide();
        $('.sceneThree').show();
        $(".trivia1").show();
        $(".trivia2").hide();
        $('img.mainCharacter').attr('src', mainCharacter.image[main]);
        (async function battle2() {
          let triviaResponse = await quote.getTrivia();
          let imageUrl = await image.getImg();
          let indexRick = getRandom(1, 20);
          let character = '?name=rick';
          let response = await newCharacter.getCharacters(character);
          let darthResponse = await quote.getStars();
          let dadJoke = await quote.getDad();
          Promise.all([imageUrl, indexRick, character, response, darthResponse, dadJoke, triviaResponse]).then(
            $('body').css('background-image', 'url(' + imageUrl.url + ')'),
            $('img#darthRickImg').attr('src', response.results[`${indexRick}`].image),
            $('.darthRickName').text('Darth SkyRicker'),
            $(".triviaQuestion").text(triviaResponse[0].question),
            $(".triviaAnswer").text(triviaResponse[0].answer),
            $('#darth').text(darthResponse.starWarsQuote),
            $('img.mainCharacter').attr('src', mainCharacter.image[main]),
            $('.mainCharacterName').text(mainCharacter.name[main]),
            $('#mainWords3').text(dadJoke.attachments[0].fallback));
          thisGuess.push(triviaResponse[0].answer);
        })();


      });
      $('#sceneThreeContinue').click(function() {
        $('.sceneFour').show();
        $('.sceneThree').hide();
        $('img.mainCharacter').attr('src', mainCharacter.image[main]);
        $("form#triviaForm").hide();
        (async function battle3() {
          let imageUrl = await image.getImg();
          let response = await newCharacter.getBreakingCharacter();
          let breakResponse = await quote.getBreakingQuote();
          let dadJoke = await quote.getDad();
          Promise.all([imageUrl, response, breakResponse, dadJoke]).then(
            $('body').css('background-image', 'url(' + imageUrl.url + ')'),
            $('img#breakImg').attr('src', response[0].img),
            $('.breakName').text(response[0].name),
            $('#break').text(breakResponse[0].quote),
            $('img.mainCharacter').attr('src', mainCharacter.image[main]),
            $('.mainCharacterName').text(mainCharacter.name[main]),
            $('#mainWords4').text(dadJoke.attachments[0].fallback));
        })();


      });
      $('#sceneFourContinue').click(function() {
        $('.sceneFour').hide();
        $('.sceneFive').show();
        $('img.mainCharacter').attr('src', mainCharacter.image[main]);

        (async function battle4() {
          let imageUrl = await image.getImg();
          let response = await image.getRobot(giph);
          let adviceResponse = await quote.getAdvice();
          let roboName = await newCharacter.getRandom();
          let dadJoke = await quote.getDad();
          Promise.all([imageUrl, response, adviceResponse, dadJoke]).then(
            $('body').css('background-image', 'url(' + imageUrl.url + ')'),
            $('img#roboImg').attr('src', response.url),
            $('.roboName').text(roboName.name + " " + roboName.surname),
            $('#advice').text(adviceResponse.slip.advice),
            $('img.mainCharacter').attr('src', mainCharacter.image[main]),
            $('.mainCharacterName').text(mainCharacter.name[main]),
            $('#mainWords5').text(dadJoke.attachments[0].fallback));
        })();


      });

    });

  });
  $("form#triviaForm").submit(function(event) {
    event.preventDefault();
    $(".trivia2").toggle();
    let guess = $("input#triviaGuess").val();
    checkAnswer(guess);

  });

});
