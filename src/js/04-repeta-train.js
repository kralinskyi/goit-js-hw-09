const horses = [
  'Secretariat',
  'Secretariat1',
  'Secretariat2',
  'Secretariat3',
  'Secretariat4',
];

function runRace(horse) {
  return new Promise(res => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      res({ horse, time });
    }, time);
  });
}

// console.log(`Horses start race!!All bets stops!`);

const promises = horses.map(runRace);
console.log(promises);
Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c Horses ${horse} win the race!! with result - ${time / 1000} minutes!`,
    'color: green'
  );
});

Promise.all(promises).then(() => {
  console.log(`%c New race coming!!All bets available!`, 'color: blue');
});

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
