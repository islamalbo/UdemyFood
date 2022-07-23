const localSt = require("./modules/localSt");

window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    timer = require("./modules/timer"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider"),
    localSt = require("./modules/localSt"),
    modal = require("./modules/modal"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc");

  tabs();
  timer();
  forms();
  slider();
  localSt();
  modal();
  cards();
  calc();
});
