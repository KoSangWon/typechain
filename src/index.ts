// Node.js는 TypeScript를 이해하지 못하기 때문에 일반적인 JavaScript 코드로 컴파일하는 작업이 필요! pacakge.json에서 prestart로 tsc 컴파일과정 설정해줌.

const name = "Sangwon",
age=24,
gender ="male"

const sayHi = (name:string, age:number, gender:string):string => {// ?가 붙으면 optional
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

console.log(sayHi("sangwon", 23, "male"));

export {}//버그 해결을 위해 넣어줌