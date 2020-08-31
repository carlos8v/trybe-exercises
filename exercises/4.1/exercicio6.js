const chessPawns = ["Peão", "Cavalo", "Bispo", "Torre", "Rainha", "Rei"]
const selectedPawn = chessPawns[Math.ceil(Math.random() * chessPawns.length - 1)];

function moves(pawn) {
    switch(pawn) {
        case "Peão":
            return "Somente uma casa para frente";
        case "Cavalo":
            return "Movimento em formato de L"
        case "Bispo":
            return "Movimento diagonal";
        case "Torre":
            return "Movimento horizontal e vertical"
        case "Rainha":
            return "Todas as direções";
        case "Rei":
            return "Todas as direções, uma única casa";
    }
}

console.log(`Peça: ${selectedPawn}`);
console.log(`Movimentos: ${moves(selectedPawn)}`);