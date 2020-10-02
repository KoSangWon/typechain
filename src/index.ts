interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "sangwon",
    gender: "male",
    age: 24
}

const sayHi = (person: Human):string => {// ?가 붙으면 optional
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person));

export {}//버그 해결을 위해 넣어줌