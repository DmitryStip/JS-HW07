'use strict';


//  @param {number} winnerRate - Рейтинг победителя пары
//  @param {number} opponentRate - Рейтинг соперника
//  @returns {number} -  рейтинг победителя
 
function calculateRate(winnerRate, opponentRate) {
  let diffRate = winnerRate - opponentRate;
  if (
    typeof winnerRate !== 'number' ||
    typeof opponentRate !== 'number' ||
    winnerRate < 0 ||
    opponentRate < 0
  ) {
    return 'Incorrect rating.';
  }
  if (winnerRate === 0) {
    return opponentRate;
  }
  if (diffRate >= 0 && diffRate <= 2){
    return (winnerRate += 2);
  }
  if (diffRate > 2 && diffRate < 20){
    return (winnerRate += 1);
  }
  if (diffRate >= 20){
    return winnerRate;
  }
  if (diffRate < 0){
    return winnerRate + Math.round((Math.abs(diffRate) + 5) / 3);
  }
}

let number1 = calculateRate(25, 23);
console.log(number1);
let number2 = calculateRate(5,23);
console.log(number2);
let number3 = calculateRate('go', 23);
console.log(number3);
let number4 = calculateRate(23, 0);
console.log(number4);
let number5 = calculateRate(0, 25);
console.log(number5)