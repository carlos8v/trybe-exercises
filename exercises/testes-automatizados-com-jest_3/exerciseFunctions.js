const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const firstFunction = (str) => str.toUpperCase();

const secondFunction = (str) =>  str.charAt(0);

const thirdFunction = (str1, str2) => str1.concat(str2);

const fetchDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data;
}

module.exports = {
  randomNumber,
  firstFunction,
  secondFunction,
  thirdFunction,
  fetchDog,
};