// const horses = [
//   'Secretariat',
//   'Secretariat1',
//   'Secretariat2',
//   'Secretariat3',
//   'Secretariat4',
// ];

// function runRace(horse) {
//   return new Promise(res => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       res({ horse, time });
//     }, time);
//   });
// }

// const promises = horses.map(runRace);
// console.log(promises);
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c Horses ${horse} win the race!! with result - ${time / 1000} minutes!`,
//     'color: green'
//   );
// });

// Promise.all(promises).then(() => {
//   console.log(`%c New race coming!!All bets available!`, 'color: blue');
// });

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// *NEW=================================NEW
//! import pokemonTmpl from '../templates/pokemon-card.hbs';

//! const refs = {
//!   testEl: document.querySelector('.test'),
//!   form: document.querySelector('.form'),
//! };

// refs.form.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const id = e.target.query.value;

//   fetchPokemon(id)
//     .then(renderPokemon)
//     .catch(onFetchError)
//     .finally(() => {
//       e.target.reset();
//     });
// }

// function renderPokemon(pokemon) {
//   const markup = pokemonTmpl(pokemon);
//   refs.testEl.innerHTML = markup;
// }

// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     response => response.json()
//   );
// }

// function onFetchError() {
//   alert('NOT OK!');
// }

fetch('https://pixabay.com/api/?key=34842285-9ef26a99ee49cc306160c27d8&q=home')
  .then(r => r.json())
  .then(console.log);
