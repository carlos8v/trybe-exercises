const str = 'Carlos foi pra x e não sabemos o que aconteceu.';
const changeString = (strParam) => str.split(' ').map(word => word === 'x' ? strParam : word).join(' ');
const newStr = changeString('Google');

const skills = ['Beber café', 'Madrugar', 'Pesquisar no Stack Overflow', 'Surtar com projetos', 'Arrazar no Code Climate'];

const concatenetString = (str) => {
    let newStr = `${str}\n`;
    newStr += 'As cinco principais habilidades dele são:\n';
    newStr += ` ${skills.sort().map(skill => `-${skill}\n`)}\n#goTrybe`.split(',').join(' ');
    return newStr;
}

console.log(concatenetString(newStr));