function sumFibonacci(num) {
  var array = [1, 1];
  var next = 0;
  var sum = 0;

  while (next < num) {
    next = array[array.length - 1] + array[array.length - 2];
    if (next < num) {
      array.push(next);
    }
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      sum = sum + array[i];
    }
  }

  console.log(sum);
}

sumFibonacci(1);
sumFibonacci(10);
sumFibonacci(20);
sumFibonacci(4);
sumFibonacci(-5);
