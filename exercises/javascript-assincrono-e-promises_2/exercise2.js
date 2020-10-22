const promise = new Promise((resolve, reject) => {
	const maxNumber = 8000;
	const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 51));
	const sum = arr
		.map((number) => Math.pow(number, 2))
		.reduce((acc, curr) => acc + curr, 0);

	sum < maxNumber ? resolve() : reject();
});

promise
  .then((sum) => {
    const arr = [2,3,5,10];
    return arr.map((number) => sum / number);
  })
  .then(array => array.reduce((number, acc) => number + acc, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
