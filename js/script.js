import tabs from "./modules/tabs";
import timer from "./modules/timer";
import forms from "./modules/forms";
import slider from "./modules/slider";
import modal from "./modules/modal";
import cards from "./modules/cards";
import calc from "./modules/calc";
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  timer('.timer', "2022-07-29");
  forms('form', modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide" ,
    nextArrow: ".offer__slider-next" ,
    prevArrow: ".offer__slider-prev",
    currentCounter: "#current" ,
    totalCounter: "#total",
    wrapper: ".offer__slider-wrapper" ,
    field: ".offer_slider-inner"
  });
  modal("[data-modal]", ".modal", modalTimerId);
  cards();
  calc();
});
