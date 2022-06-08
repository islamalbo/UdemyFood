// const films = [
//   {
//     name: "Titanic",
//     rating: 9,
//   },
//   {
//     name: "Die hard 5",
//     rating: 5,
//   },
//   {
//     name: "Matrix",
//     rating: 8,
//   },
//   {
//     name: "Some bad film",
//     rating: 4,
//   },
// ];

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }
// showGoodFilms(films);

// function showListOfFilms(arr) {
//     let names = arr.map(film => film.name);
//     console.log(names.join());
// }

// showListOfFilms(films);

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
    let fAmounts = data.filter(item => item.amount > 0);
    let amoMap = fAmounts.map(amoFunds => amoFunds.amount);
    return amoMap.reduce((sum, amount) => sum + amount);
};

getPositiveIncomeAmount(funds);



const getTotalIncomeAmount = (data) => {
  let everyAmount = data.map(item => item.amount);
  let checkAmount = everyAmount.some(item => item <= 0);
  if (checkAmount <= 0) {
    getPositiveIncomeAmount(funds);
  } else {
    return everyAmount.reduce((sum, curr) => sum + curr);
  }
};

getTotalIncomeAmount(funds);

