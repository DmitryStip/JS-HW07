'use strict';


//  @param {number} winnerRate - Рейтинг победителя пары
//  @param {number} opponentRate - Рейтинг соперника
//  @returns {number} -  рейтинг победителя
 
function calculateRate(winnerRate, opponentRate) {
    // Проверяем ввод
    if (
      typeof winnerRate !== 'number' ||
      typeof opponentRate !== 'number' ||
      winnerRate < 0 ||
      opponentRate < 0
    ) {
      console.log('Inccorect rating.');
    }
  
    // Разница
    const ratingDiff = opponentRate - winnerRate;
  
    // При победе над более слабым или равным по рейтингу игроком
    if (ratingDiff >= 0 && ratingDiff <= 2) {
      return winnerRate + 2;
    } else if (ratingDiff > 2 && ratingDiff < 20) {
      return winnerRate + 1;
    } else if (ratingDiff >= 20) {
      return winnerRate;
    }
  
    // При победе над более сильным
    return Math.round((opponentRate - winnerRate + 5) / 3);
  }
  const winnerRate = 10;
const opponentRate = 15;

const newRate = calculateRate(winnerRate, opponentRate);
console.log(`Рейтинг победителя: ${newRate}`);