function getArrayParams(...arr) {

  let array = [...arr];
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  max = Math.max.apply(null, array);
  min = Math.min.apply(null, array);
  sum = Number(array.reduce((accumulator, currentValue) => accumulator + currentValue / array.length, sum).toFixed(2));   
  
  return { min: min, max: max, avg: sum };
};

function summElementsWorker(...arr) {
  let array = [...arr];
  let sum = 0;
  sum = Number(array.reduce((accumulator, currentValue) => accumulator + currentValue, sum));

  return sum;
};

function differenceMaxMinWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) {

    return 0;

  } else {
    let max = Math.max(...array);
    let min = Math.min(...array);

    return max - min;
  };
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let array = [...arr];

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + array[i];
    } else {
      sumOddElement = sumOddElement + array[i];
    };
  };

  return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
  let array = [...arr];
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (array.length === 0) {
    return 0;
  };

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + array[i];
      countEvenElement ++;
    }; 
  };
    return sumEvenElement / countEvenElement;
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let array = [...arrOfArr];
  let sum = 0;
  // Очень долго искал решение через for (let i = 0; i < array.lenght; i++).Но оказалось все проще.
  for (let value of array) {
      sum = func(...value);
       if (sum > maxWorkerResult) {
        maxWorkerResult = sum;
       };
    };

    return maxWorkerResult;
};
