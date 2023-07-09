`use strict`;

// select elements
const roundEl = document.querySelector(`.round`);
// function

// eventListener
roundEl.addEventListener(`click`, () => {
  roundEl.classlist.remove(`round`);
  roundEl.classlist.add(`small-round`);
});
