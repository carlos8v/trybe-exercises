function finalDeString(word, ending) {
    let final = word.length - 1;
    let estaNoFinal = true;
    for (let i = ending.length - 1; i >= 0; i--) {
        if (word[final] !== ending[i]) {
            estaNoFinal = false;
        }
        final--;
    }        
    return estaNoFinal;
}

console.log(finalDeString('trybe', 'beb'));