"use strict";
// Node.js는 TypeScript를 이해하지 못하기 때문에 일반적인 JavaScript 코드로 컴파일하는 작업이 필요! pacakge.json에서 prestart로 tsc 컴파일과정 설정해줌.
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Sangwon", age = 24, gender = "male";
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age);
//# sourceMappingURL=index.js.map