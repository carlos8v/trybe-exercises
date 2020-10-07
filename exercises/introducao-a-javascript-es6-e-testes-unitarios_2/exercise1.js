const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, value) => obj[key] = value;
addShift(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj).forEach(key => console.log(key));

const objectLenght = (obj) => console.log(Object.entries(obj).length);

const listValues = (obj) => Object.values(obj).forEach(value => console.log(value));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const totalStudents = (obj) => {
  let total = 0;
  for(let entries in obj) {
    total += obj[entries].numeroEstudantes;
  }
  return total;
}

const getValueByNumber = (obj, number) => Object.values(obj)[number];

const verifyPair = (obj, key, value) => {
  let error = true;
  Object.entries(obj).forEach(entrie => {
    if (entrie[0] === key && entrie[1] === value) error = false;
  });
  return error;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));