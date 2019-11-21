import {Characters, Quotes, Image} from './apicalls.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const image = new  Image();
const quote = new Quotes();
const mainCharacter = new Characters();

(async function characterGrab(character) {
  const response = await mainCharacter.getCharacters(character);
  return response;

})();

(async function intialCharacter() {
  await mainCharacter.initialChars();
  $('img#rick').attr('src', mainCharacter.image[0]);
  $('img#morty').attr('src', mainCharacter.image[1]);
  $('img#jerry').attr('src', mainCharacter.image[2]);
})();

function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {

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
      let indexRick = getRandom(1,20);
      let character = '?name=rick';
      let response = await newCharacter.getCharacters(character);
      $('img.rickTrick').attr('src', response.results[`${indexRick}`].image);
      $('.rickTrickName').text(response.results[`${indexRick}`].name);
      let norrisResponse = await quote.getNorris();
      $('#norris1').text(norrisResponse.value.joke);
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);
      let dadJoke = await quote.getDad();
      $('.mainCharacterName').text(mainCharacter.name[main]);
      $('#mainWords1').text(dadJoke.attachments[0].fallback);
      let imageUrl = await image.getImg();
      $('body').css('background-image', 'url(' + imageUrl.url + ')');
      let giphResponse = await image.getGiphy(giph);
      console.log(giphResponse);
      console.log(giph);
      $('img#giphOutput').attr('src', giphResponse.data[0].images.downsized_large.url);
      console.log(giphResponse.data[0].images.downsized_large.url);
    })();


    $("#sceneOneContinue").click(function(){
      $(".sceneOne").hide();
      $(".sceneTwo").show();
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);
      (async function battle() {
        let indexRick = getRandom(1,20);
        let character = '?name=rick';
        let response = await newCharacter.getCharacters(character);
        $('img#kanyeRickImg').attr('src', response.results[`${indexRick}`].image);
        $('.kanyeRickName').text('Kanye Rick West');
        let kanyeResponse = await quote.getKanye();
        $('#kanye1').text(kanyeResponse.quote);
        let imageUrl = await image.getImg();
        $('body').css('background-image', 'url(' + imageUrl.url + ')');


        $('img.mainCharacter').attr('src', mainCharacter.image[main]);
        let dadJoke = await quote.getDad();
        $('.mainCharacterName').text(mainCharacter.name[main]);
        $('#mainWords2').text(dadJoke.attachments[0].fallback);
      })();

    });

    $('#sceneTwoContinue').click(function() {
      $('.sceneTwo').hide();
      $('.sceneThree').show();
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);

      (async function battle2() {
        let imageUrl = await image.getImg();
        $('body').css('background-image', 'url(' + imageUrl.url + ')');
        let indexRick = getRandom(1,20);
        let character = '?name=rick';
        let response = await newCharacter.getCharacters(character);
        $('img#darthRickImg').attr('src', response.results[`${indexRick}`].image);
        $('.darthRickName').text('Darth SkyRicker');
        let darthResponse = await quote.getStars();
        $('#darth').text(darthResponse.starWarsQuote);
        $('img.mainCharacter').attr('src', mainCharacter.image[main]);
        let dadJoke = await quote.getDad();
        $('.mainCharacterName').text(mainCharacter.name[main]);
        $('#mainWords3').text(dadJoke.attachments[0].fallback);
      })();


    });
    $('#sceneThreeContinue').click(function() {
      $('.sceneFour').show();
      $('.sceneThree').hide();
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);

      (async function battle3() {
        let imageUrl = await image.getImg();
        $('body').css('background-image', 'url(' + imageUrl.url + ')');
        let response = await newCharacter.getBreakingCharacter();
        $('img#breakImg').attr('src', response[0].img);
        $('.breakName').text(response[0].name);
        let breakResponse = await quote.getBreakingQuote();
        $('#break').text(breakResponse[0].quote);
        $('img.mainCharacter').attr('src', mainCharacter.image[main]);
        let dadJoke = await quote.getDad();
        $('.mainCharacterName').text(mainCharacter.name[main]);
        $('#mainWords4').text(dadJoke.attachments[0].fallback);
      })();


    });

  });
});
