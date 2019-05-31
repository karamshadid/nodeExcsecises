function logArray(array) {
  array.forEach((element) => {
    console.log(element)
  })
}
//logArray(arr);

function cloneArray(array) {
  let newArr = array.slice();
  return newArr;
}
//cloneArray(arr);

function firstElement(array) {
  return array[0];
}
//console.log(firstElement(arr));

function lastElement(array) {
  return array[array.length - 1];
}
//console.log(lastElement(arr));

function nFirstElements(array, n) {
  let result = [];
  if (n > 0 && n !== undefined && n < array.length) {
    result = array.slice(0, n)
  }
  return result;
}
//console.log(nFirstElements(arr, 3));


function nLastElements(array, n) {
  let result = [];
  if (n > 0 && n !== undefined && n < array.length) {
    result = array.slice(array.length - n)
  }
  return result;
}
//console.log(nLastElements(arr, 3));

function toStringWithSeparator(array, s) {
  return array.join(s)
}
//console.log(toStringWithSeparator(arr, "*"));

function sumSquaresOfVector(array) {
  return array.reduce(function(total, element) {
    return total + element * element;
  }, 0);
}
//console.log(sumSquaresOfVector(arr));

function averageOfVector(array) {
  return array.reduce(function(total, element) {
    return (total + element);
  }, 0) / array.length;
}
//console.log(averageOfVector(arr));

function toUl(array) {
  return "<ul>" + array.map(elem => {
    return `<li>${elem.toString().replace("<", "&lt;").replace(">", "&gt;")}</li>`;
  }).join("") + "</ul>";
}



function toUlDeep(array) {

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "object") {
      result.push(`<li>${toUlDeep(array[i])}</li>`);
    } else {
      result.push(`<li>${array[i].toString().replace("<", "&lt;").replace(">", "&gt;")}</li>`);
    }
  }
  return `<ul>${result.join("")}</ul>`
}

//console.log(toUlDeep([1, 2, 3, [1, 2, 3, "ololo"], "123"]));

function sortStringArray(array) {
  return array.sort();
}
//console.log(sortStringArray(["feb", "apr", "mar", "oct"]));

function sortNumericVector(array) {
  return array.sort((a, b) => a - b);
}
//console.log(numericVector([1, 3, 7, 2]));

const arr = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    libraryID: 1254
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    libraryID: 4264
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The HungerGames',
    libraryID: 3245
  }
];

function sortObjectArray(array, key) {
  return array.sort((elem1, elem2) => {
      if (elem1[key] > elem2[key]) return +1;
      if (elem1[key] < elem2[key]) return -1;
      return 0;
  });
}
console.log(sortObjectArray(arr, "libraryID"));


console.log(sortObjectArray(arr, "title"));



module.exports = {
  logArray,
  cloneArray,
  firstElement,
  lastElement,
  toStringWithSeparator,
  sumSquaresOfVector,
  averageOfVector,
  nFirstElements,
  nLastElements,
  toUl,
  toUlDeep,
  sortStringArray,
  sortNumericVector,
  sortObjectArray
}
