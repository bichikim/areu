# ARE U?

![flow][flow]

[flow]:https://img.shields.io/badge/typescript-2.6.*-blue.svg

> Run time type checker

## Install
``
npm install --save areu
``

## How to use
````javascript
// import {...} from 'areu'
import {validate, array, any, object, boolean, integer, number, string} from 'src/index'

const data = {
  age: 999,
  name: 'foo',
  bag: {
    apple: true,
    phone: false,
    candy: ['ice', 'wine', 'banana'],
    messages: [1, 'apple', 'you', 'can', 'eat']
  }
}

const schema = object({
  age: number().required(),
  name: string().required(),
  bag: object({
    apple: boolean().required(),
    phone: boolean(),
    candy: array([string()]),
    ham: boolean(),
    messages: array([number().required(), string(), any()])
  }).required(),
})
/*
interface Data{
  age: number
  name: string
  bag: {
    apple: boolean,
    phone?: boolean,
    candy: string[],
    ham?: boolean,
    message?: [number, string?, any, ...]
  }
}
*/
console.log(validate(data, schema)) // <== true

````

## Feature
* check required of all type
* check email, uuid, testing regular expression  & any of string type
* check number type
* check integer type
* check object type & members type deeply
* check array type, members type deeply & members type in order
* check boolean
* check any


## Future Feature
* extend schema
* check html, time, address of string type 
* check min, max, length of number type
* check 
