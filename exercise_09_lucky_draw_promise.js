function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((result) => {
    result ? console.log(result) : null;
    return luckyDraw("Caroline");
  })
  .then((result) => {
    result ? console.log(result) : null;
    return luckyDraw("Sabrina");
  })
  .then((result) => {
    result ? console.log(result) : null;
  })
  .catch((err) => console.log(err));
