const longestWord = (phrase) => phrase.split(' ').sort((a, b) => b.length - a.length)[0]
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
