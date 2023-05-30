'use strict';


//  @param {number} winnerRate - Рейтинг победителя пары
//  @param {number} opponentRate - Рейтинг соперника
//  @returns {number} -  рейтинг победителя
 
function calculateRate(winnerRate, opponentRate) {
  if (
    typeof winnerRate !== 'number' ||
    typeof opponentRate !== 'number' ||
    winnerRate < 0 ||
    opponentRate < 0
  ) {
    return 'Incorrect rating.';
  }

  const ratingDiff = opponentRate - winnerRate;

  if (ratingDiff >= 0 && ratingDiff <= 2) {
    return winnerRate + 2;
  }

  if (ratingDiff > 2 && ratingDiff < 20) {
    return winnerRate + 1;
  }

  if (ratingDiff >= 20) {
    return 0;
  }

  return Math.round((opponentRate - winnerRate + 5) / 3);
}

const winnerRate = 10;
const opponentRate = 15;

const newRate = calculateRate(winnerRate, opponentRate);
console.log(`Рейтинг победителя: ${newRate}`);