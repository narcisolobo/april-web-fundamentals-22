function d6() {
  var roll = Math.floor(Math.random() * 6 + 1);
  return roll;
}

function untilDoubles() {
  var count = 0;
  var dice1 = d6();
  var dice2 = d6();

  count++;

  while (dice1 != dice2) {
    dice1 = d6();
    dice2 = d6();
    count++;
  }
  return count;
}

function maxMinAvg(arr) {
  var analysis = {
    max: arr[0],
    min: arr[0],
    avg: 0
  }

  var sum = arr[0];

  for (let i = 1; i < arr.length; i++){
    if (arr[i] > analysis.max) {
      analysis.max = arr[i];
    }
    if (arr[i] < analysis.min) {
      analysis.min = arr[i];
    }
    sum += arr[i];
  }
  analysis.avg = sum/arr.length;
  return analysis;
}

function analyzeDoubles() {
  var arr = []
  for (let i = 0; i <= 100; i++){
    arr.push(untilDoubles());
  }
  var analysis = maxMinAvg(arr);
  return analysis;
}

console.log(analyzeDoubles());