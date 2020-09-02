function verificaPalindromo(word) {
    let count = 0;
    let palindromo = true;
    for (let i = word.length - 1; i >= 0; i--) {
        if (word[i] !== word[count]) {
            palindromo = false;
        }
        count++;
    }
    return palindromo;
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));